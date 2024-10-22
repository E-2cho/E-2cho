'use client';

import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  // Kakao SDK 초기화
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
      }
    }
  }, []);

  // Naver SDK 초기화
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        callbackUrl: 'http://localhost:3000/auth/naver/callback',
        isPopup: false,
      });
      naverLogin.init();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSocialLogin = async (snsType: string, accessToken: string) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          snsType,
          accessToken: `Bearer ${accessToken}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          // 회원가입 
          const signupResponse = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              snsType,
              accessToken: `Bearer ${accessToken}`,
            }),
          });

          if (!signupResponse.ok) {
            throw new Error('회원가입 실패');
          }

          return handleSocialLogin(snsType, accessToken);
        }

        throw new Error(data.message || '로그인 실패');
      }

      // 로그인 성공 처리
      localStorage.setItem('accessToken', data.token.accessToken);
      localStorage.setItem('refreshToken', data.token.refreshToken);
      
      router.push('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSuccess = (credentialResponse: any) => {
    handleSocialLogin('Google', credentialResponse.credential);
  };

  const handleKakaoLogin = () => {
    if (window.Kakao) {
      window.Kakao.Auth.login({
        success: (authObj: any) => {
          handleSocialLogin('Kakao', authObj.access_token);
        },
        fail: (err: any) => {
          setError('카카오 로그인에 실패했습니다.');
        },
      });
    }
  };

  const handleNaverLogin = () => {
    if (window.naver) {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        callbackUrl: 'http://localhost:3000/auth/naver/callback',
        isPopup: false,
      });
      naverLogin.getLoginStatus((status: boolean) => {
        if (status) {
          handleSocialLogin('Naver', naverLogin.accessToken.accessToken);
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">E^2cho에 오신 것을 환영합니다</h2>
          <p className="mt-2 text-muted-foreground">
            환경을 위한 첫 걸음
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="mt-8 space-y-4">
          <div className="flex flex-col items-center gap-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google 로그인에 실패했습니다.')}
              size="large"
              width="300"
            />
            
            <Button 
              onClick={handleKakaoLogin}
              className="w-[300px] bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
            >
              카카오로 시작하기
            </Button>

            <Button
              onClick={handleNaverLogin}
              className="w-[300px] bg-[#03C75A] hover:bg-[#03C75A]/90 text-white"
            >
              네이버로 시작하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
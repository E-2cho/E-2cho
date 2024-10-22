'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NaverCallback() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.naver) {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        callbackUrl: 'http://localhost:3000/auth/naver/callback',
      });

      naverLogin.getLoginStatus((status: boolean) => {
        if (status) {
          const accessToken = naverLogin.accessToken.accessToken;
          router.push(`/login?provider=naver&token=${accessToken}`);
        } else {
          router.push('/login');
        }
      });
    }
  }, [router]);

  return <div>로그인 처리중...</div>;
}
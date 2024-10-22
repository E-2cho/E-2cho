'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { LeafIcon, Palette, Type, Ruler, MessageSquare } from "lucide-react";

const FONT_OPTIONS = [
  { value: 'pretendard', label: 'Pretendard' },
  { value: 'notoSans', label: 'Noto Sans' },
  { value: 'nanumGothic', label: '나눔고딕' },
  { value: 'nanumMyeongjo', label: '나눔명조' },
  { value: 'gmarket', label: '지마켓 산스' },
];

const CASE_COLOR_OPTIONS = [
    { value: 'white', label: '화이트', hex: '#FFFFFF' },
    { value: 'black', label: '블랙', hex: '#2C2C2C' },
    { value: 'purple', label: '퍼플', hex: '#9370DB' },
    { value: 'peakGreen', label: '피크 그린', hex: '#90EE90' },
    { value: 'pink', label: '핑크', hex: '#FFB6C1' },
  ];

const SIZE_OPTIONS = [
  { value: 'small', label: '소형 (15cm)', price: 79000 },
  { value: 'medium', label: '중형 (20cm)', price: 89000 },
  { value: 'large', label: '대형 (25cm)', price: 99000 },
];

export default function CustomProductDetail() {
  const [customOptions, setCustomOptions] = useState({
    text: '',
    font: 'pretendard',
    caseColor: 'white',
    size: 'medium',
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    additionalNotes: '',
  });

  const handleOptionsChange = (field: string, value: string) => {
    setCustomOptions(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getCurrentPrice = () => {
    const basePrice = SIZE_OPTIONS.find(size => size.value === customOptions.size)?.price || 89000;
    const textLengthPrice = Math.max(0, (customOptions.text.length - 8) * 10000); // 8자 초과시 글자당 10000원 추가
    return basePrice + textLengthPrice;
  };

  const handleSubmitOrder = async () => {
    // 아임포트 결제 로직 구현
    alert('결제 기능은 아임포트 연동 후 구현 예정입니다.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 커스텀 옵션 프리뷰 */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div 
                className="aspect-square rounded-lg flex items-center justify-center mb-4"
                style={{ 
                  backgroundColor: CASE_COLOR_OPTIONS.find(c => c.value === customOptions.caseColor)?.hex,
                  border: customOptions.caseColor === 'white' ? '1px solid #e2e2e2' : 'none'
                }}
              >
                <div 
                  className="p-8 text-center"
                  style={{ 
                    fontFamily: customOptions.font,
                    color: customOptions.caseColor === 'white' || customOptions.caseColor === 'beige' || customOptions.caseColor === 'marble' 
                      ? '#000000' 
                      : '#FFFFFF'
                  }}
                >
                  <p className="text-2xl">미리보기</p>
                  <p>{customOptions.text || '여기에 문구가 표시됩니다'}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                * 실제 제품과 색상이 다소 다를 수 있습니다
              </p>
            </CardContent>
          </Card>

          <Alert>
            <LeafIcon className="h-4 w-4" />
            <AlertTitle>환경을 생각하는 선택</AlertTitle>
            <AlertDescription>
              주문 금액의 10%가 환경 보호 단체에 기부됩니다
            </AlertDescription>
          </Alert>
        </div>

        {/* 커스터마이징 옵션 */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">커스텀 무드등 주문하기</h1>
          
          <Accordion type="single" collapsible defaultValue="text">
            {/* 문구 설정 */}
            <AccordionItem value="text">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  문구 입력
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="custom-text">표시될 문구</Label>
                    <Textarea
                      id="custom-text"
                      placeholder="원하시는 문구를 입력해주세요 (최대 20자)"
                      value={customOptions.text}
                      onChange={(e) => handleOptionsChange('text', e.target.value)}
                      maxLength={20}
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {customOptions.text.length}/20자 (8자 초과시 글자당 1,0000원 추가)
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 글꼴 설정 */}
            <AccordionItem value="font">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  글꼴 선택
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="font">글꼴</Label>
                    <Select
                      value={customOptions.font}
                      onValueChange={(value) => handleOptionsChange('font', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="글꼴을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {FONT_OPTIONS.map((font) => (
                          <SelectItem key={font.value} value={font.value}>
                            {font.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 케이스 색상 설정 */}
            <AccordionItem value="color">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  케이스 색상 선택
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label>케이스 색상</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {CASE_COLOR_OPTIONS.map((color) => (
                        <Button
                          key={color.value}
                          variant={customOptions.caseColor === color.value ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleOptionsChange('caseColor', color.value)}
                        >
                          <div
                            className="w-4 h-4 rounded-full mr-2"
                            style={{ 
                              backgroundColor: color.hex,
                              border: color.value === 'white' ? '1px solid #e2e2e2' : 'none'
                            }}
                          />
                          {color.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 크기 설정 */}
            <AccordionItem value="size">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5" />
                  크기 선택
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label>제품 크기</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {SIZE_OPTIONS.map((size) => (
                        <Button
                          key={size.value}
                          variant={customOptions.size === size.value ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleOptionsChange('size', size.value)}
                        >
                          <div className="text-center">
                            <div>{size.label}</div>
                            <div className="text-sm">{size.price.toLocaleString()}원</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* 주문자 정보 폼 */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">주문자 정보</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    name="name"
                    value={userInfo.name}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={userInfo.email}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">연락처</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="address">배송주소</Label>
                  <Input
                    id="address"
                    name="address"
                    value={userInfo.address}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="additionalNotes">추가 요청사항</Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={userInfo.additionalNotes}
                    onChange={handleUserInfoChange}
                    placeholder="추가로 요청하실 사항이 있다면 입력해주세요"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 결제 섹션 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-t border-b">
              <span className="text-lg font-semibold">총 결제금액</span>
              <span className="text-xl font-bold text-primary">
                {getCurrentPrice().toLocaleString()}원
              </span>
            </div>

            <Button className="w-full h-12 text-lg" onClick={handleSubmitOrder}>
              주문하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
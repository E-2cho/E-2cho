'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { BadgeCheck, Truck, PackageCheck, LeafIcon } from "lucide-react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const productDetails = {
    name: "E^2cho Limited Edition Mood Light",
    price: 89000,
    stock: 50,
    description: "환경을 생각하는 한정판 무드등. 고품질 3D 프린팅과 LED 기술이 결합된 프리미엄 제품입니다.",
    features: [
      "3D 프린팅 케이스 (친환경 PLA 소재)",
      "Xiao ESP32 마이크로컨트롤러",
      "RGB LED 스트립 (조절 가능한 밝기 및 색상)",
      "Bluetooth 연결 지원",
      "USB Type-C 전원 공급",
      "앱을 통한 원격 제어"
    ],
    specs: [
      { name: "크기", value: "20cm x 20cm x 25cm" },
      { name: "무게", value: "450g" },
      { name: "전력 소비", value: "5W (최대)" },
      { name: "LED 수명", value: "약 50,000시간" },
      { name: "보증 기간", value: "1년" }
    ]
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= productDetails.stock) {
      setQuantity(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    // 아임포트 결제 로직 구현
    alert('결제 기능은 아임포트 연동 후 구현 예정입니다.');
  };

  const totalPrice = productDetails.price * quantity;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 제품 이미지 캐러셀 */}
        <Card>
          <CardContent className="p-6">
            <Carousel>
              <CarouselContent>
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={`/api/placeholder/600/600`}
                      alt={`Product view ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* 제품 정보 및 구매 폼 */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{productDetails.name}</h1>
            <div className="flex items-center gap-2 text-green-600">
              <LeafIcon className="h-5 w-5" />
              <span>환경 보호에 참여하세요 - 판매 금액의 10% 환경단체 기부</span>
            </div>
            <p className="text-2xl font-bold mt-4">
              {productDetails.price.toLocaleString()}원
            </p>
          </div>

          <Alert>
            <BadgeCheck className="h-4 w-4" />
            <AlertTitle>한정판 상품</AlertTitle>
            <AlertDescription>
              남은 수량: {productDetails.stock}개
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div>
              <Label htmlFor="quantity">수량</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  className="w-20 text-center"
                />
                <Button
                  variant="outline"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="phone">연락처</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="address">배송주소</Label>
                <Input
                  id="address"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-b">
              <span className="text-lg font-semibold">총 결제금액</span>
              <span className="text-xl font-bold text-primary">
                {totalPrice.toLocaleString()}원
              </span>
            </div>

            <Button className="w-full h-12 text-lg" onClick={handlePayment}>
              결제하기
            </Button>

            <div className="flex justify-around text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Truck className="h-4 w-4" />
                <span>무료배송</span>
              </div>
              <div className="flex items-center gap-1">
                <PackageCheck className="h-4 w-4" />
                <span>안전포장</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 상세 설명 섹션 */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">제품 상세 설명</h2>
            <p className="text-lg mb-6">{productDetails.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">주요 특징</h3>
            <ul className="list-disc pl-6 space-y-2">
              {productDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">제품 사양</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>항목</TableHead>
                  <TableHead>상세</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productDetails.specs.map((spec, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{spec.name}</TableCell>
                    <TableCell>{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
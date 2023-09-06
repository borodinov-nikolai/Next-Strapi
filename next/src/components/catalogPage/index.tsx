'use client'
import React from 'react';
import { Card, Image } from 'antd';
import image from '@/public/fabrizio-coco-gVBIohdCRUQ-unsplash.jpg'

const { Meta } = Card;

const ProductCard: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240, height: 350 }}
    cover={<Image
        width={240}
        src='http://localhost:3000/_next/image?url=%2F%D0%A2%D1%80%D0%B5%D0%B9_%D0%A0%D0%B0%D1%82%D0%BA%D0%BB%D0%B8%D1%84%D1%84_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F.jpg&w=3840&q=75'
      />}
  >
    <Meta title="Europe Street beat" description="www.google.com" />
  </Card>
);

export default ProductCard;
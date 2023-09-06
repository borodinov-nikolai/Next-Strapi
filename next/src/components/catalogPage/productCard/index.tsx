'use client'
import React from 'react';
import { Card, Image } from 'antd';


const { Meta } = Card;

const ProductCard: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240, height: 350 }}
    cover={<Image
        width={240}
        src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarek-piwnicki-sIaIHalCnsM-unsplash.a8fcb5dd.jpg&w=2048&q=75'
      />}
  >
    <Meta title="Europe Street beat" description="www.google.com" />
  </Card>
);

export default ProductCard;
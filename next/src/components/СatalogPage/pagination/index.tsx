'use client'
import React, { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

const PaginationDevices: React.FC = () => {
  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  return <Pagination current={current} showSizeChanger={false} onChange={onChange} total={500} />;
};

export default PaginationDevices;
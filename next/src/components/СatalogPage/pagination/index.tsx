'use client'
import React, { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setPage } from '@/redux/slices/filtersSlice';


interface Props {
  page: number,
  pageSize: number,
  pageCount: number,
  total: number
}

const PaginationDevices = ({pagination}: {pagination:Props}) => {
  
  const dispatch = useAppDispatch();

  const onChange: PaginationProps['onChange'] = (e) => {
     dispatch(setPage(e));
  };
   
  return <Pagination hideOnSinglePage={true} current={pagination?.page || 1} defaultCurrent={1} pageSize={pagination?.pageSize || 1} showSizeChanger={false} onChange={onChange} total={pagination?.total} />;
};

export default PaginationDevices;
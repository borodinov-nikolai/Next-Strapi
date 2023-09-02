"use client";
import React from "react";
import Sort from "./sort";
import styles from "./Filters.module.scss";
import Search from "./search";
import { useSearchParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import qs from "qs";
import {
  resetFilters,
  setSearch,
  setSearchValue,
  setSort,
} from "@/redux/slices/filtersSlice";

const Filters = ({sorting}:any) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { sort, search, brand } = useAppSelector((state) => state.filters);
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (searchParams.toString().length > 0) {
      const searchString = qs.parse(searchParams.toString());
      dispatch(setSort(searchString.sort));
    }
     
     
     
   
  }, []);





  React.useEffect(() => {
  

  }, [sort, search]);



  return (
    <div className={styles.root}>
      <div className={styles.search}>

          <Search />
      
      </div>

      <div className={styles.sort}>
      
          <Sort sortServer={sorting}  />
  

           
        
      </div>
    </div>
  );
};

export default Filters;

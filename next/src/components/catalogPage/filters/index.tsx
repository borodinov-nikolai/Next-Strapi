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
} from "@/redux/slices/filters";

const Filters = ({sorting, searching}:any) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { sort, search } = useAppSelector((state) => state.filters);
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (searchParams.toString().length > 0) {
        setLoading(false)
      const searchString = qs.parse(searchParams.toString());
      dispatch(setSort(searchString.sort));
    }
    setLoading(true);

    return () => {
      dispatch(resetFilters());
    };
  }, []);

  React.useEffect(() => {
    if (searchParams.toString().length < 1){
         dispatch(resetFilters());
        };
  }, [searchParams]);

  React.useEffect(() => {
    if (sort && search) {
      router.replace(`?sort=${sort}&search=${search}`, { scroll: true });
    }

    if (sort && !search) {
      router.replace(`?sort=${sort}`, { scroll: true });
    }

    if (!sort && search) {
      router.replace(`?search=${search}`, { scroll: true });
    }

    if (!sort && !search) {
      router.replace("catalog", { scroll: true });
    }
  }, [sort, search]);



  return (
    <div className={styles.root}>
      <div className={styles.search}>

          <Search />
      
      </div>

      <div className={styles.sort}>
        
          <Sort sort={sorting} dispatch={dispatch} />
        
      </div>
    </div>
  );
};

export default Filters;

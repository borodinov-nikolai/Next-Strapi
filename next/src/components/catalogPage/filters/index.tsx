'use client'
import React from 'react'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import { useSearchParams, useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import qs from 'qs'
import { resetFilters, setSearch, setSearchValue, setSort } from '@/redux/slices/filters'



const Filters = () => {
    const {sort, search} = useAppSelector((state)=> state.filters);
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const router = useRouter();







    React.useEffect(() => {
        if (searchParams.toString().length > 0) {
            const searchString = qs.parse(searchParams.toString())
            dispatch(setSearchValue(searchString.search))
            dispatch(setSort(searchString.sort))
            dispatch(setSearch(searchString.search))
        }


        return () => {
          
            dispatch(resetFilters());
          };

    }, [])



    React.useEffect(()=> {
        
  

        if (searchParams.toString().length < 1)
         dispatch(resetFilters());


    }, [searchParams])





    React.useEffect(() => {
     
     
        if (sort && search) {

            router.replace(`?sort=${sort}&search=${search}`, { scroll: true })
        }

        if (sort && !search) {
            router.replace(`?sort=${sort}`, { scroll: true })
        }

        if (!sort && search) {
            router.replace(`?search=${search}`, { scroll: true })
        }


        if (!sort && !search) {

            router.replace("catalog", { scroll: true })
        }
       
    }, [sort, search])






    return (


        <div className={styles.root}>

            <div className={styles.search}>
                <Search />
            </div>


            <div className={styles.sort}>

                <Sort sort={sort} dispatch={dispatch} />

            </div>

        </div>


    )
}

export default Filters
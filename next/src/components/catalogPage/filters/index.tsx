'use client'
import React from 'react'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import qs from 'qs'
import { setSearch, setSort } from '@/redux/slices/filters'


const Filters = () => {
    const {sort, search} = useAppSelector((state)=> state.filters)
    const dispatch = useAppDispatch();
    const router = useRouter();







    React.useEffect(() => {
        if (window.location.search) {
            const searchParams = qs.parse(window.location.search.substring(1))


            dispatch(setSort(searchParams.sort))
            dispatch(setSearch(searchParams.search))
        }

    }, [])



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
                <Search search={search} dispatch={dispatch} />
            </div>


            <div className={styles.sort}>

                <Sort sort={sort} dispatch={dispatch} />

            </div>

        </div>


    )
}

export default Filters
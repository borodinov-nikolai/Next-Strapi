'use client'
import React from 'react'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import { useRouter } from 'next/navigation';
import qs from "qs"


const Filters = ({searchParams}:any) => {
    const [sort, setSort] = React.useState<any>('')
    const [search, setSearch] = React.useState<any>('')
    const router = useRouter();
    
    console.log(searchParams)

 



    React.useEffect(()=> {
        if(searchParams) {
            setSort(searchParams.sort)
            setSearch(searchParams.search)
        }

    },[])


    React.useEffect(()=> {
        console.log(searchParams.length)
        if(Object.keys(searchParams).length < 1) {
            setSort('')
            setSearch('')
        }

    },[searchParams])


    React.useEffect(()=> {
    
     
        if(sort && search){

            router.replace(`?sort=${sort}&search=${search}`, {scroll:true}) 
        }

        if(sort && !search) {
            router.replace(`?sort=${sort}`, {scroll:true})
        } 

        if(!sort && search) {
            router.replace(`?search=${search}`, {scroll:true})
        } 

      
        if(!sort && !search){

            router.replace("catalog", {scroll:true}) 
        }
    


    
    },[sort, search])



   



    return (


        <div className={styles.root}>


            <div className={styles.search}>
                <Search search={search} setSearch={setSearch} />
            </div>


            <div className={styles.sort}>

                <Sort sort={sort} setSort={setSort} />

            </div>

        </div>


    )
}

export default Filters
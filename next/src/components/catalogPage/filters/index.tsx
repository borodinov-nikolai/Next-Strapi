'use client'
import React from 'react'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'


const Filters = ({searchParams}:any) => {
    const [sort, setSort] = React.useState<string>('')
    const [search, setSearch] = React.useState<string>('')
    const router = useRouter();
    const {isAuth} = useAppSelector((state)=>state.user)
    
 

 



    React.useEffect(()=> {
        if(searchParams) {
            setSort(searchParams.sort)
            setSearch(searchParams.search)
        }


    },[])


    React.useEffect(()=> {
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
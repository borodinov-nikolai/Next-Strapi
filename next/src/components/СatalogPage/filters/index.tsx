'use client'
import React from 'react'
import Brands from './brands'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import qs from 'qs'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebounce } from 'usehooks-ts'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setPage} from '@/redux/slices/filtersSlice'


interface Props {
  brandValue: string,
  sortValue: string,
  pagination: any
}

const Filters = ({brandValue, sortValue, pagination}: Props) => {
   const [brand, setBrand] = React.useState<string>('');
   const [sort, setSort] = React.useState<string>('');
   const [search, setSearch] = React.useState<string>('');
   const {page} = useAppSelector((state)=> state.filters)
   const dispatch = useAppDispatch();
   let debouncedSearch = useDebounce(search, 700)
   const router = useRouter();
   const searchParams = useSearchParams();
   


  



   React.useEffect(()=> {

    if(searchParams.size < 1){
      setSort('price:asc');
      setBrand('all');
      setSearch('')
    }

   },[searchParams])



   React.useEffect(()=> {


    if(search) {
      setBrand('all')
    }
       
   if(pagination?.pageCount < page){
    dispatch(setPage(1))
   }

  
  


      const query = qs.stringify({
        pagination: {
      page : page || pagination?.page 
        },
        sort: [sort || sortValue || 'price:asc'],
           filters: {
            name: {
              $containsi: debouncedSearch || undefined
            },
            brand: {
              name: !brand ? brandValue : brand === 'all'? undefined : brand 
            }
          }
    })
     router.replace(`?${query}`)
    

    
         
    
     
        
  
     },[brand, sort, debouncedSearch, page, pagination?.pageCount])


  

  return (
    
      <div className={styles.root}>
        <div className={styles.brands} >
          <Brands brand={brand} value={brandValue} setBrand={setBrand} />
            </div>
            <div className={styles.search} >
              <Search search={search} setSearch={setSearch} />
            </div>
            <div className={styles.sort} >
        <Sort value={sortValue} sort={sort} setSort={setSort} />
            </div>
      </div>
  
  )
}

export default Filters
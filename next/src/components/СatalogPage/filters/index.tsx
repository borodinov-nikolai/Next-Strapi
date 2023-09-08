'use client'
import React from 'react'
import Brands from './brands'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import qs from 'qs'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebounce } from 'usehooks-ts'


interface Props {
  brandValue: string,
  sortValue: string
}

const Filters = ({brandValue, sortValue}: Props) => {
   const [brand, setBrand] = React.useState<string>('');
   const [sort, setSort] = React.useState<string>('');
   const [search, setSearch] = React.useState<string>('');
   const debouncedSearch = useDebounce(search, 700)
   const router = useRouter();
   const searchParams = useSearchParams();





  React.useEffect(()=> {
   
     if(searchParams.size===0) {
   setSort('price:asc');
   setBrand('all');

     } 
  

  },[searchParams])




   React.useEffect(()=> {
    
    if(search) {
      setBrand('all')
    }
   
        
          const query = qs.stringify({
            pagination: {
          page: 1,
          pageSize: 20
            },
            sort: [sort || sortValue || 'price:asc'],
               filters: {
                name: {
                  $containsi: debouncedSearch
                },
                brand: {
                  name: !brand ? brandValue : brand === 'all'? undefined : brand 
                }
              }
      })
    
      router.replace(`?${query}`)
        
  
     },[brand, sort, debouncedSearch])


  

  return (
    
      <div className={styles.root}>
        <div>
          <Brands brand={brand} value={brandValue} setBrand={setBrand} />
            </div>
            <div>
              <Search setSearch={setSearch} />
            </div>
            <div>
        <Sort value={sortValue} sort={sort} setSort={setSort} />
            </div>
      </div>
  
  )
}

export default Filters
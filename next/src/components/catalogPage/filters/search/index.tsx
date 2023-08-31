'use client'
import { useAppSelector } from '@/redux/hooks'
import { setSearch, setSearchValue } from '@/redux/slices/filters'
import { setServers } from 'dns'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'usehooks-ts'



const Search = () => {

  const {searchValue} = useAppSelector((state)=> state.filters)
  const debouncedValue = useDebounce(searchValue, 1000)
  const dispatch = useDispatch();

 
  React.useEffect(()=>{
dispatch(setSearch(debouncedValue))
    

  },[debouncedValue])



  return (
    <div>
        <input onChange={(e)=>dispatch(setSearchValue(e.target.value))} value = {searchValue? searchValue as string : ''} type="text" placeholder='поиск' />
    </div>
  )
}

export default Search
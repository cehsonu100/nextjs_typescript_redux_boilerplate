'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store';
import { useEffect, useRef } from 'react';
import { fetchUsers, increment } from '@/slices/userSlice';
import { Button, Container } from '@mui/material';


export default function Home() {

  const userRef = useRef(false);

  const {entities, value, loading} = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();

  console.log(entities)

  useEffect(() => {
    if(!userRef.current)
      dispatch(fetchUsers())

    return () => {userRef.current = true}
  }, [])

  const incrementValue = () => {
    dispatch(increment())
  }


  return (
    <main className={styles.main}>
      {loading ? <div>loading...</div> : 
      // <Image
      //   src="/nature.jpg"
      //   alt="background"
      //   layout="fill"
      //   objectFit="cover"
      //   quality={100}
      // />
      <Button variant="outlined" onClick={incrementValue}>{value}</Button>
      }
      
    </main>
  )
}

'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store';
import { useEffect, useRef, useState } from 'react';
import { fetchUsers, increment } from '@/slices/userSlice';
import { Button, Container } from '@mui/material';
import ChatModal from '@/components/ChatModal/ChatModal';


export default function Home() {
  const [open, setOpen] = useState(true);
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
    const currentConversationDetails = "";
  }


  return (
    <main className={styles.main}>
      {false ? <div>loading...</div> : 
      <><Image
        src="/nature.jpg"
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Button variant="contained" color="primary" onClick={(e) => setOpen(!open)} className='chatButton'>
        <span>Open Modal</span>
      </Button>
      {/* <Button variant="contained" onClick={incrementValue}>{value}</Button> */}
      <ChatModal open={open}/>
      </>
      }
      
    </main>
  )
}

"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useRef } from "react";
import { fetchUsers, increment } from "@/slices/userSlice";
import { Box, Button, Container, Grid, IconButton, Input, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';

export default function VirtualTutor() {
  const userRef = useRef(false);

  const { entities, value, loading } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  console.log(entities);

  useEffect(() => {
    if (!userRef.current) dispatch(fetchUsers());

    return () => {
      userRef.current = true;
    };
  }, []);

  const incrementValue = () => {
    dispatch(increment());
  };

  return (
    <Box className={""} sx={{ p: 3 }}>
      <Grid container justifyContent="space-between">
        <Grid item container xs={12} md={8} lg={8} spacing={2}>
          <Grid item xs={6} md={3}>
            <Button size="small" variant="contained" sx={{minWidth: '180px'}}>Q&A</Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button size="small" variant="contained" sx={{minWidth: '180px'}}>Document Summary</Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button size="small" variant="contained" sx={{minWidth: '180px'}}>Review Assignment</Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button size="small" variant="contained" sx={{minWidth: '180px'}}>Lookup Assignment</Button>
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent="flex-end">
            <Grid item xs={3} md={2}>
                <DownloadIcon color="primary" sx={{minWidth: '10px'}}/>
            </Grid>
            <Grid item xs={3} md={2}>
                <AccountCircleIcon color="primary" sx={{minWidth: '10px'}}/>
            </Grid>
        </Grid>
      </Grid>
      <Box sx={{mt: 8}}>
        <OutlinedInput
            placeholder="TYPE YOUR QUESTION HERE"
            id="inputChatBot"
            aria-describedby="basic-addon1"
            fullWidth
            sx={{ bgcolor: "white", borderRadius: "5px", p: "8px" }}
            endAdornment={
            <InputAdornment position="end">
                <IconButton
                id="recordAudioBtn"
                sx={{ "&:focus": { outline: "none" } }}
                >
                <MicIcon/>
                </IconButton>
            </InputAdornment>
            }
        />
      </Box>
    </Box>
  );
}

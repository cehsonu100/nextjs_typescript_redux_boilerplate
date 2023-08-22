"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  Button,
  IconButton,
  Box,
  Grid,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import VirtualTutor from "@/app/virtualtutor/page";

interface ChatModalProps {
  open: boolean;
}

const ChatModal = (props: ChatModalProps) => {
  return (
    <>
      <div>
        <Modal
          open={props.open}
          aria-labelledby="chatBotModal"
          aria-describedby="chatBotModal"
          id="chatBotModal"
          sx={{minHeight: '50%'}}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              padding: "30px",
              borderRadius: "5px",
              minHeight: '600px'
            }}
          >
            <Box sx={{ bgcolor: "rgba(242, 242, 242, 0.5)", borderRadius: "5px" }}>
              <VirtualTutor/>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ChatModal;

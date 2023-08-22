import React from 'react';
import { Avatar, Grid, Typography, Link, IconButton } from '@mui/material';
import { Dot } from 'react-animated-dots';
import { ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import '../../styles/chat-message.css'
import '../../styles/chat-modal.css'

const ChatBotResponse = ({ answer }) => {
  return (
    <div className="mb-5 chatAnswerRow">
      <Grid container>
        <Grid item xs={1} className="mb-1">
          <div className="leftContent">
            <Avatar style={{ height: '35px', width: '35px' }} src="https://thoughtfocus.com/wp-content/themes/thoughtfocus/assets-img/svg-logo-monogram-green.svg" alt="Logo" className="avatar" />
          </div>
        </Grid>
        <Grid item xs={11} className="mb-1">
          <Typography variant="body1" className="content rightContent">
            {(answer && answer !== '') ? answer : <><Dot>.</Dot><Dot>.</Dot><Dot>.</Dot></>}
          </Typography>
        </Grid>
      </Grid>
      <div className="feedback text-end me-2">
        <Link href="#" target="_blank"><i className="fa fa-globe"></i></Link>&nbsp;&nbsp;&nbsp;
        <IconButton className="like-btn"><ThumbUpOutlined /></IconButton>&nbsp;&nbsp;&nbsp;
        <IconButton className="dislike-Btn"><ThumbDownOutlined /></IconButton>
      </div>
    </div>
  );
};

export default ChatBotResponse;

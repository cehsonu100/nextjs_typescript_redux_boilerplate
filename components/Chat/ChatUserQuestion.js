import React from 'react';
import { Grid, Typography } from '@mui/material';
import '../../styles/chat-message.css'
import '../../styles/chat-modal.css'

const ChatUserQuestion = ({ questionDetails }) => {
  return (
    <div className="chatQuestionRow">
      <Grid container>
        <Grid item xs={1} className="mb-3">
          <Typography variant="body1" className="content leftContent float-end">
            <b>You asked</b>
          </Typography>
        </Grid>
        <Grid item xs={11} className="mb-3">
          <Typography variant="body1" className="content rightContent">
            {questionDetails.question}
          </Typography>
          <div className="timestamp">
            <small>{questionDetails.dateTime}</small>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatUserQuestion;

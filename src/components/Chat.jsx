import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Teacher from '../img/computer-icon.png';
import User from '../img/user.png'

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem>
        <ListItemAvatar className={classes}>
          {isQuestion ? (
            <Avatar alt="icon" src={Teacher} />
          ) : (
            <Avatar alt="icon" src={User} />
          )}
          
        </ListItemAvatar>
        <div className="p-chat__bubble">
          {props.text}
        </div>
      </ListItem>
  )
}

export default Chat
import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Card, Button } from 'evergreen-ui';

import './style.less';

const Note = ({ id, title, onDelete }) => {
  const onDeleteEvent = () => onDelete(id);
  
  return (
    <Card
      elevation={1}
      background="tint1"
      marginY={25}
      flex={1}
      padding={25}
      className="note-wrapper"
    >
      <Text className="content">{title}</Text>
  
      <div>
        <Link to={`/detail/${id}`}>
          <Button
            height={35}
            marginX={3}
            iconBefore="edit"
            className="edit"
          >
            Edit
          </Button>
        </Link>
        <Button
          marginRight={12}
          iconBefore="trash"
          intent="danger"
          onClick={onDeleteEvent}
          className="delete"
        >Delete</Button>
      </div>
    </Card>
  );
};

export default Note;

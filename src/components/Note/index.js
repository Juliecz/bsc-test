import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Text, Card, Button, Icon } from 'evergreen-ui';

const Note = ({ id, title, onDelete }) => {
  const onDeleteEvent = () => onDelete(id);
  
  return (
    <Card
      elevation={1}
      background="tint1"
      marginY={25}
      flex={1}
      padding={25}
    >
      <Text>{title}</Text>
    
      <div>
        <Link to={`/detail/${id}`}>
          <Button
            height={35}
            marginX={3}
            iconBefore='edit'
          >
            Edit
          </Button>
        </Link>
      </div>
      <Button
        marginRight={12}
        iconBefore="trash"
        intent="danger"
        onClick={onDeleteEvent}
      >Delete</Button>
    </Card>
  );
};

export default Note;

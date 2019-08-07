import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Text, Card, Button, Icon } from 'evergreen-ui';

const Note = ({ id, title }) => (
  <Card
    elevation={1}
    // float="left"
    // backgroundColor="tint1"
    background="tint1"
    // maxWidth="1000px"
    // width="90%"
    // height={120}
    // marginX="auto"
    marginY={25}
    flex={1}
    padding={25}
  >
    <Text>
      {title}
    </Text>
    
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
  </Card>
);

export default Note;

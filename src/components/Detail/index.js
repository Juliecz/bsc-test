import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pane, Textarea, Button } from 'evergreen-ui';

import { fetchNoteById } from '../../model/actions';

const Detail = ({ fetchNoteById, match, note }) => {
  useEffect(() => {
    fetchNoteById(match.params.id);
  }, []);
  

  return (
    <div>
      Note {note.id}
      <Pane>
        <Textarea
          id="textarea"
          placeholder="Textarea"
          value={note.title}
        />
        <Button
          height={35}
          iconBefore="tick"
          intent="success"
        >
          Save
        </Button>
      </Pane>
    </div>
  );
};

const mapStateToProps = (state) => ({
  note: state.app.note,
});

export default connect(mapStateToProps, { fetchNoteById })(Detail);

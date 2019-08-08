import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Heading,
  Pane,
  Textarea,
  Button,
  Spinner,
} from 'evergreen-ui';

import {
  fetchNoteById,
  changeNote,
  saveNote,
  cleanUpNote,
  createNote,
} from '../../model/actions';

const Detail = ({
  fetchNoteById,
  changeNote,
  saveNote,
  match,
  note,
  fetchState,
  cleanUpNote,
  createNote
}) => {
  const isNew = match.path.substring(1) === 'new';

  useEffect(() => {
    if (!isNew) {
      fetchNoteById(match.params.id);
    }
    return () => cleanUpNote();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    isNew ? createNote() : saveNote(note.id);
  };
  
  const changeNoteEvent = (e) => changeNote(e.target.value);

  return (
    <div>
      <Link to={`/`}>
        <Button
          marginRight={12}
          iconBefore="arrow-left"
        > Back </Button>
      </Link>
      <Heading
        size={600}
        marginTop="default"
      > Note {note.id} </Heading>

      <Pane>
        <Textarea
          id="textarea"
          placeholder="Textarea"
          value={note.title}
          onChange={changeNoteEvent}
        />
        {fetchState === 'loading'
          ? <Spinner/>
          : <Button
            height={35}
            iconBefore="tick"
            intent="success"
            onClick={onSubmit}
          >
            {isNew ? 'Create' : 'Save'}
          </Button>}
      </Pane>
    </div>
  );
};

const mapStateToProps = (state) => ({
  note: state.app.note,
  fetchState: state.app.state,
});

export default connect(mapStateToProps, {
  fetchNoteById,
  changeNote,
  saveNote,
  cleanUpNote,
  createNote
})(Detail);

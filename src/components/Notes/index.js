import React from 'react';
import { connect } from 'react-redux';

import Note from '../Note';
import { fetchNotes } from '../../model/actions';
import {Pane, Button, Icon} from "evergreen-ui";

class Notes extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  
  render() {
    const { notes } = this.props;
    return (
      <div className="notes">
        Notes
        <Pane className="notes-wrapper">
          {notes && notes.map((note) => (
            <Note
              {...note}
              key={note.id}
            />
          ))}
        </Pane>
        <Button
          height={35}
          iconBefore="add"
        >
          New note
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notes: state.app.notes,
});

export default connect(mapStateToProps, { fetchNotes })(Notes);

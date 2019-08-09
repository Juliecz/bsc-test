import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Note from '../Note';
import { fetchNotes, onDeleteNote } from '../../model/actions';
import { Pane, Button, Dialog, Spinner, Heading } from "evergreen-ui";

import './style.less';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShow: false,
      noteId: null,
    }
  }
  componentDidMount() {
    this.props.fetchNotes();
  }
  
  hideDeleteModal = () => {
    this.props.onDeleteNote(this.state.noteId);
    this.setState({
      isModalShow: false,
      noteId: null,
    });
  };

  showDeleteModal = (noteId) =>
    this.setState({
      isModalShow: true,
      noteId,
    });

  render() {
    const { notes, state } = this.props;
    return (
      <div className="notes">
        <Heading
          size={900}
          marginY="20"
        > Notes </Heading>
        {state === 'loading'
          ? <Spinner/>
          : <>
            <Pane className="notes-wrapper">
              <Dialog
                isShown={this.state.isModalShow}
                title="Delete note"
                intent="danger"
                onCloseComplete={this.hideDeleteModal}
                confirmLabel="Delete"
              >
                Do you really want to delete this note?
              </Dialog>
              {notes && notes.map((note) => (
                <Note
                  {...note}
                  key={note.id}
                  onDelete={() => this.showDeleteModal(note.id)}
                />
              ))}
            </Pane>
            <div className="footer-buttons">
              <Link to={'/new'}>
                <Button
                  height={35}
                  iconBefore="add"
                >
                  New note
                </Button>
              </Link>
            </div>
          </>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notes: state.app.notes,
  state: state.app.state,
});

export default connect(mapStateToProps, {
  fetchNotes,
  onDeleteNote,
})(Notes);

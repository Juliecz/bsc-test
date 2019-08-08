import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import Note from '../Note';
import { fetchNotes, onDeleteNote } from '../../model/actions';
import {Pane, Button, Dialog} from "evergreen-ui";

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShow: false,
    }
  }
  componentDidMount() {
    this.props.fetchNotes();
  }
  
  hideDeleteModal = () =>
    this.setState({ isModalShow: false });

  showDeleteModal = () =>
    this.setState({ isModalShow: true });

  render() {
    const { notes, onDeleteNote } = this.props;
    return (
      <div className="notes">
        Notes
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
              onDelete={this.showDeleteModal}
            />
          ))}
        </Pane>
        <Link to={'/new'}>
          <Button
            height={35}
            iconBefore="add"
          >
            New note
          </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notes: state.app.notes,
});

export default connect(mapStateToProps, {
  fetchNotes,
  onDeleteNote,
})(Notes);

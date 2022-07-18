import React from 'react';
import { addNote, swapNote } from 'actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

interface NavigationProps {
  addNote: Function
  swapNote: Function
}

const Navigation: React.FC<NavigationProps> = ({ addNote, swapNote }) => {

  return (
    <nav className="navigation">
      <button
        onClick={() => {
          const note = { id: uuid(), text: 'New note', created: '', lastUpdated: '' };
          addNote(note);
          swapNote(note.id);
        }}
      >
        + New Note
      </button>
    </nav>
  );
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  swapNote: noteId => dispatch(swapNote(noteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
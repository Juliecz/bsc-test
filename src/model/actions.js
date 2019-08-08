import fetchData from '../helpers/fetchData';
import config from '../config';

export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const FETCH_NOTE_BY_ID_SUCCESS = 'FETCH_NOTE_BY_ID_SUCCESS';
export const ON_CHANGE_NOTE = 'ON_CHANGE_NOTE';
export const ON_SAVE_NOTE_SUCCESS = 'ON_SAVE_NOTE_SUCCESS';
export const ON_CREATE_NEW = 'ON_CREATE_NEW';
export const ON_DELETE_NOTE_SUCCESS = 'ON_DELETE_NOTE_SUCCESS';

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchError = () => ({
  type: FETCH_ERROR,
});

export const fetchNotes = () =>
  (dispatch) => {
    dispatch(fetchLoading());
    fetchData({
      url: `${config.baseURL}/notes`,
    })
      .then((res) => res.json())
      .then((res) => dispatch(fetchNotesSuccess(res)))
      .catch(() => dispatch(fetchError()));
  };

export const fetchNoteById = (id) =>
  (dispatch) => {
    dispatch(fetchLoading());
    fetchData({
      url: `${config.baseURL}/notes/${id}`,
    })
      .then((res) => res.json())
      .then((res) => dispatch(fetchNoteByIdSuccess(res)))
      .catch(() => dispatch(fetchError()));
  };

export const fetchNotesSuccess = (value) => ({
  type: FETCH_NOTE_SUCCESS,
  payload: value,
});

export const fetchNoteByIdSuccess = (value) => ({
  type: FETCH_NOTE_BY_ID_SUCCESS,
  payload: value,
});

export const changeNote = (value) => ({
  type: ON_CHANGE_NOTE,
  payload: value,
});

export const saveNoteSuccess = () => ({
  type: ON_SAVE_NOTE_SUCCESS,
});

export const cleanUpNote = () => ({
  type: ON_CREATE_NEW,
});

export const saveNote = (id) =>
  (dispatch, getState) => {
    dispatch(fetchLoading());
    fetchData({
      url: `${config.baseURL}/notes/${id}`,
      method: 'PUT',
      body: {
        title: getState().app.note.title,
      },
    })
      .then(() => dispatch(saveNoteSuccess()))
      .catch(() => dispatch(fetchError()));
  };

export const createNote = () =>
  (dispatch, getState) => {
    dispatch(fetchLoading());
    fetchData({
      url: `${config.baseURL}/notes`,
      method: 'POST',
      body: {
        title: getState().app.note.title,
      },
    })
      .then(() => dispatch(saveNoteSuccess()))
      .catch(() => dispatch(fetchError()));
  };

export const deleteNoteSuccess = () => ({
  type: ON_DELETE_NOTE_SUCCESS,
});

export const onDeleteNote = (id) =>
  (dispatch) => {
    dispatch(fetchLoading());
    fetchData({
      url: `${config.baseURL}/notes/${id}`,
      method: 'DELETE',
    })
      .then(() => dispatch(deleteNoteSuccess()))
      .catch(() => dispatch(fetchError()));
  };

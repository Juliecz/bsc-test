import fetchData from '../helpers/fetchData';
import config from '../config';

export const FETCH_NOTES_LOADING = 'FETCH_NOTES_LOADING';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';

export const FETCH_NOTE_BY_ID_SUCCESS = 'FETCH_NOTE_BY_ID_SUCCESS';

export const fetchNotes = () =>
  (dispatch) => {
    dispatch(fetchNotesLoading());
    fetchData({
      url: `${config.baseURL}/notes`,
    })
      .then((res) => res.json())
      .then((res) => dispatch(fetchNotesSuccess(res)))
      .catch(() => dispatch(fetchNotesError()));
  };

export const fetchNoteById = (id) =>
  (dispatch) => {
    dispatch(fetchNotesLoading());
    fetchData({
      url: `${config.baseURL}/notes/${id}`,
    })
      .then((res) => res.json())
      .then((res) => dispatch(fetchNoteByIdSuccess(res)))
      .catch(() => dispatch(fetchNotesError()));
  };

export const fetchNotesLoading = () => ({
  type: FETCH_NOTES_LOADING,
});

export const fetchNotesSuccess = (value) => ({
  type: FETCH_NOTES_SUCCESS,
  payload: value,
});

export const fetchNotesError = () => ({
  type: FETCH_NOTES_ERROR,
});

export const fetchNoteByIdSuccess = (value) => ({
  type: FETCH_NOTE_BY_ID_SUCCESS,
  payload: value,
});

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  FETCH_LOADING,
  FETCH_ERROR,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_BY_ID_SUCCESS,
  ON_CHANGE_NOTE,
  ON_SAVE_NOTE_SUCCESS,
  ON_CREATE_NEW, ON_DELETE_NOTE_SUCCESS,
} from './actions';

const defaultState = {
  notes: [],
  note: {},
  state: 'unset', // unset, loading, success, error
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LOADING: {
      return {
        ...state,
        state: 'loading',
      }
    }

    case FETCH_NOTE_SUCCESS: {
      return {
        ...state,
        notes: action.payload,
        state: 'success',
      };
    }

    case FETCH_ERROR: {
      return {
        ...state,
        state: 'error',
      }
    }

    case FETCH_NOTE_BY_ID_SUCCESS: {
      return {
        ...state,
        note: action.payload,
        state: 'success',
      }
    }

    case ON_CHANGE_NOTE: {
      return {
        ...state,
        note: {
          ...state.note,
          title: action.payload,
        },
      }
    }

    case ON_SAVE_NOTE_SUCCESS: {
      return {
        ...state,
        state: 'success',
      };
    }

    case ON_CREATE_NEW: {
      return {
        ...state,
        note: {},
      };
    }

    case ON_DELETE_NOTE_SUCCESS: {
      return {
        ...state,
        state: 'success',
      };
    }

    default:
      return state;
  }
};


const rootReducer =
  combineReducers({
    app,
    routing: routerReducer,
  });

export default rootReducer;

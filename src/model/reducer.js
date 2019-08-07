import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  FETCH_NOTES_LOADING,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
  FETCH_NOTE_BY_ID_SUCCESS,
} from './actions';

const defaultState = {
  notes: [],
  note: {},
  state: 'unset', // unset, loading, success, error
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTES_LOADING: {
      return {
        ...state,
        state: 'loading',
      }
    }

    case FETCH_NOTES_SUCCESS: {
      return {
        ...state,
        notes: action.payload,
        state: 'success',
      };
    }

    case FETCH_NOTES_ERROR: {
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

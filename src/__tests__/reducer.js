import reducer from '../model/reducer';
import * as actions from '../model/actions';

describe('reducer', () => {
  const defaultState = {
    app: {
      notes: [],
      note: {},
      state: 'unset',
    },
    routing: {
      locationBeforeTransitions: null,
    }
  };
  
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });
  
  it('should handle FETCH_LOADING', () => {
    const state = {
      ...defaultState,
      app: {
        ...defaultState.app,
        state: 'loading'
      }
    };
    
    const action = {
      type: actions.FETCH_LOADING,
    };

    expect(reducer(defaultState, action)).toEqual(state);
  });

  it('should handle FETCH_NOTE_SUCCESS', () => {
    const state = {
      ...defaultState,
      app: {
        ...defaultState.app,
        state: 'success',
        notes: ['1', '2'],
      }
    };
    
    const action = {
      type: actions.FETCH_NOTE_SUCCESS,
      payload: ['1', '2'],
    };
    
    expect(reducer(defaultState, action)).toEqual(state);
  });
});

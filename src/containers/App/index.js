import React from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../../model/actions';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

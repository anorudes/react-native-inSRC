import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react/native';
import connect from '@mobx/connect';

class Notes extends Component {
  render() {
    const { notes } = this.props;

    return (
      <div />
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.object,
};

export default connect(observer(Notes));

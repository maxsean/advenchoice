import React from 'react';

class TogglesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch({type: "TOGGLE_ON", toggle: e.target.name});
  };


  render() {
    return(
      <div className="toggles-container">
        <button
          className="hvr-back-pulse"
          onClick={this.handleClick}
          name="revelations">
          Revelations
        </button>
      </div>
    );
  };
};

export default TogglesContainer;

import React from 'react';
import Encounter from '../connectors/Encounter';
import Welcome from '../components/Welcome';
import Revelations from '../connectors/Revelations'

class DisplayContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'SWITCH_USER', user: data.user})
    });
  };

  render() {
    let display;
    let overlay;

    if(this.props.user.id) {
      display = <Encounter />
    } else {
      display = <Welcome />
    };

    if(this.props.toggles.includes("revelations")) {
      overlay = <Revelations />
    }

    return(
      <div>
        {display}
        {overlay}
      </div>
    );
  };
};

export default DisplayContainer;

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
    let dclass;

    if(this.props.user.id) {
      display = <Encounter />
    } else {
      display = <Welcome />
    };

    if(this.props.toggles.includes("revelations")) {
      overlay = <Revelations />
      dclass = "blur"
    }

    return(
      <div>
        <div className={dclass}>
          {display}
        </div>
        {overlay}
      </div>
    );
  };
};

export default DisplayContainer;

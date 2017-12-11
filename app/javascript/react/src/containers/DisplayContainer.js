import React from 'react'
import Encounter from '../connectors/Encounter'
import Welcome from '../components/Welcome'

class DisplayContainer extends React.Component {
  constructor(props) {
    super(props)
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
    })
  }

  render() {
    let display;
    debugger;
    if(this.props.user.id){
      display = <Encounter />
    } else {
      display = <Welcome />
    }
    return(
      <div>
        {display}
      </div>
    )
  }
}

export default DisplayContainer

import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Loading from './Loading'

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScroll: []
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/home");
    const result = await response.json();
    this.setState({ homeScroll: result.homeList })
  }
  render() {

    const c2style = {
      color: 'orange',
      margin: 20,
      fontSize: 34
    }
    if (this.state.homeScroll.length === 0) {
      return <Loading />
    } else {
      return (
        <>
          {this.state.homeScroll.slice(0, 1).map((home, index) =>
            <Spring
              key={index}
              from={{ opacity: 0, marginLeft: -600 }}
              to={{ opacity: 1, marginLeft: 0 }}
              config={{ delay: 4400, duration: 700 }}
            >
              {props => (
                <div style={props}>
                  <div style={c2style}>
                    <h3>{home.description}</h3>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </>
      )
    }
  }
}

export default Scroll

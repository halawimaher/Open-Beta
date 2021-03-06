import React from "react";
import { Spring } from "react-spring/renderprops";
import "./Scroll2.css";
import Loading from "./Loading";

class Scroll2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeInfo: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/home/");

    const result = await response.json();
    // console.log(result.homelist);
    this.setState({ homeInfo: result.homeList });
    console.log(this.state.homeInfo);

  render() {
    const c1style = {
      marginTop: 250,
    };
    // if (this.state.homeInfo.length === 0) {
    //   return <Loading />;
    // } else {
    return (
      <>
        {this.state.homeInfo.slice(0, 1).map((home, index) => (
          <Spring
            key={index}
            from={{ opacity: 0, marginTop: -600 }}
            to={{ opacity: 1, marginTop: -200 }}
            config={{ delay: 4000, duration: 300 }}
          >
            {(props) => (
              <div style={props}>
                <div style={c1style}>
                  <h1>{home.title}</h1>
                </div>
              </div>
            )}
          </Spring>
        ))}
      </>
    );
  }
}
//}

export default Scroll2;

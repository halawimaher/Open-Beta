import React from "react";
import "./About.css";
import { Link, useParams, withRouter } from "react-router-dom";

class Editabout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutup: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateAbout = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const about_text = e.target.about_text.value;
    // const image = e.target.image.files[0];
    // const body = new FormData();
    // body.append("title", title);
    // body.append("description", description);
    // body.append("image", image);

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        about_text: about_text,
        // image: image,
      }),
    };

    const url = `http://localhost:8000/about/update/${this.state.aboutup.id}`;
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    console.log(result);

    e.target.title.value = "";
    e.target.about_text.value = "";
    // e.target.image.value = "";
  };
  componentDidMount = (e) => {
    // const { id,title, description, image } = this.props.location.state.about;
    // console.log(this.props.location.state);
    // console.log(id, description, image);
    this.setState({ aboutup: this.props.location.state.about });
  };

  handleInputChange(e) {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.updateAbout} className="fr">
        <label className="lab1">Edit about me </label>
        <div>
          {" "}
          <label className="lab2">Title</label>
        </div>
        <div>
          <input
            name="title"
            onChange={this.handleInputChange}
            defaultValue={this.state.aboutup.title}
            className="te1"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleInputChange}
            defaultValue={this.state.aboutup.about_text}
            name="about_text"
            className="te0"
          />
        </div>
        {/* <label className="lab2"> Edit image</label> */}
        {/* <div>
          <input
            type="file"
            id="img"
            onChange={this.handleInputChange}
            defaultValue={this.state.aboutup.image}
            name="image"
            accept="imade/*"
          ></input>
        </div> */}
        <div>
          <input type="submit" value="Edit about" name="save" className="s" />
          <Link to="/about">
            <input type="button" value="Cancel"></input>
          </Link>
        </div>
      </form>
    );
  }
}

export default withRouter(Editabout);

import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

class Addabout extends React.Component {
  createAbout = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const about_text = e.target.about_text.value;
    // const image = e.target.image.value;
    // const image = e.target.image.files[0];
    // console.log(title, description);
    // const body = new FormData();
    // body.append("title", title);
    // body.append("description", about_text);
    // body.append("image", image);

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        about_text: about_text,
      }),
    };
    // console.log(title, description, image);
    const url = `http://localhost:8000/about/new`;
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    console.log(result);
    e.target.title.value = "";
    e.target.about_text.value = "";
    // e.target.image.value = "";
  };
  render() {
    return (
      <form onSubmit={this.createAbout} className="fr">
        <label className="lab1"> Add about me </label>
        <div>
          <label className="lab1">Title</label>
        </div>
        <div>
          <input name="title" className="te1" />
        </div>
        <div>
          <textarea name="about_text" className="te1" />
        </div>

        <div>
          <input name="save" type="submit" value="Add about" className="s" />
          <Link to="/about">
            <input type="button" value="Cancel"></input>
          </Link>
        </div>
      </form>
    );
  }
}
export default Addabout;

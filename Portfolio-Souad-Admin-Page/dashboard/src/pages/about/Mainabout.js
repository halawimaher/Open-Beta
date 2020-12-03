import React from "react";
import "./Mainabout.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Editabout from "./Editabout";
//import Axios from "./";

export default class Mainabout extends React.Component {
  state = {
    about: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/about");
    const result = await response.json();
    /*console.log(result.homelist[0].title);*/
    this.setState({ about: result.about });
    console.log("hi", this.state.about);
  }
  deleteAbout = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const url = `http://localhost:8000/about/delete/${id}`;
    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      const refrechAbout = this.state.about.filter((about) => about.id !== id);
      this.setState({ about: refrechAbout });
      //console.log(this.state.home);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div class="tbl">
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>title</th>
                <th>description</th>
                {/* <th>Image</th> */}
                <th>
                  <div>
                    <span> Add About </span>
                    <Link to="/about/add">
                      <FaIcons.FaPlus class="icon" />
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {this.state.about.map((about, index) => (
                <tr key={index}>
                  <td>{about.title}</td>
                  <td>{about.about_text}</td>
                  {/* <td>
                    <img
                      width="50px"
                      height="50px"
                      src={`http://localhost:8000/images/${about.image}`}
                    />
                  </td> */}
                  <td>
                    <div>
                      <Link
                        to={{
                          pathname: `/about/edit/${about.id} `,
                          state: { about },
                        }}
                      >
                        <FaIcons.FaEdit />
                      </Link>
                      <Link class="icon">
                        <FaIcons.FaMinusCircle
                          onClick={() => this.deleteAbout(about.id)}
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

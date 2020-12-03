import React from "react";
import "./Mainexperience.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Experience from "./Experience";

export default class Mainexperience extends React.Component {
  state = {
    experience: [],
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:8000/experience");
    const result = await response.json();
    // console.log(result);
    /*console.log(result.homelist[0].title);*/
    this.setState({ experience: result.expList });
    // console.log(this.state.experience);
  }

  deleteExperience = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const url = `http://localhost:8000/experience/delete/${id}`;
    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      const refrechExperience = this.state.experience.filter(
        (experience) => experience.id !== id
      );
      this.setState({ experience: refrechExperience });
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
                <th>Role</th>
                <th>Company</th>
                <th>start</th>
                <th> End</th>
                <th>Image</th>

                <th>
                  <div>
                    <span> Add experience</span>
                    <Link to="/experience/new">
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
              {this.state.experience.map((exp, index) => (
                <tr key={index}>
                  <td>{exp.role} </td>
                  <td>{exp.company}</td>
                  <td>{exp.start} </td>
                  <td>{exp.end} </td>
                  <td>
                    <img
                      width="60px"
                      height="60px"
                      src={`http://localhost:8000/images/${exp.image}`}
                    />
                  </td>

                  <td>
                    <div>
                      <Link
                        to={{
                          pathname: `/experience/update/${exp.id}`,
                          state: { exp },
                        }}
                      >
                        <FaIcons.FaEdit />
                      </Link>
                      <Link class="icon">
                        <FaIcons.FaMinusCircle
                          onClick={() => this.deleteExperience(exp.id)}
                        />
                      </Link>
                      {/* <button onclick={()=> this.deleteexperience(experience.id)}>x</button> */}
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

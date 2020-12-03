import React from "react";
import "./Experience.css";
import { Link, useParams, withRouter } from "react-router-dom";
class Editexperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceup: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateexperience = async (e) => {
    e.preventDefault();
    const role = e.target.role.value;
    const company = e.target.company.value;
    const start = e.target.start.value;
    const end = e.target.end.value;
    const image = e.target.image.files[0];
    const body = new FormData();
    body.append("role", role);
    body.append("company", company);
    body.append("start", start);
    body.append("end", end);
    body.append("image", image);
    // console.log(role, company, start, end, image);

    // const requestOptions = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     company_name: company_name,
    //     from_date: from_date,
    //     to_date: to_date,
    //     description: description,
    //   }),
    // };
    // console.log(this.state.experienceup.id);
    const url = `http://localhost:8000/experience/update/${this.state.experienceup.id}`;
    const response = await fetch(url, { method: "PATCH", body });
    const result = await response.json();
    console.log(result);
    // e.target.role.value = "";
    // e.target.start.value = "";
    // e.target.end.value = "";
    // e.target.image.value = "";
  };
  componentDidMount = (e) => {
    // const { id,title, description, image } = this.props.location.state.about;
    // console.log(this.props.location.state);
    // console.log(id, description, image);
    this.setState({ experienceup: this.props.location.state.exp });
    console.log({ experienceup: this.props.location.state.exp });
  };

  handleInputChange(e) {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.updateexperience} className="fr1">
        <div className="cc2">
          <input
            type="text"
            name="role"
            placeholder="Role"
            className="f3"
            onChange={this.handleInputChange}
            defaultValue={this.state.experienceup.role}
          />
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="f1"
              onChange={this.handleInputChange}
              defaultValue={this.state.experienceup.company}
            />
          </div>
          <div>
            <input
              type="date"
              name="start"
              placeholder=" Start"
              className="f2"
              onChange={this.handleInputChange}
              defaultValue={this.state.experienceup.start}
            />
          </div>
          <div>
            <input
              type="date"
              name="end"
              placeholder=" End"
              className="f2"
              onChange={this.handleInputChange}
              defaultValue={this.state.experienceup.end}
            />
          </div>
          <div>
            <input
              type="file"
              name="image"
              placeholder=" Image"
              className="f2"
              onChange={this.handleInputChange}
              defaultValue={this.state.experienceup.image}
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            name="save"
            value="Add Experince"
            className="f4"
          />
          <Link to="/experience">
            <input type="button" name="Cancel" value="Cancel" className="f4" />
          </Link>
        </div>
      </form>
    );
  }
}

export default Editexperience;

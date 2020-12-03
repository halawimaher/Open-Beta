import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
class Addexperience extends React.Component {
  createExperience = async (e) => {
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
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     company_name: company_name,
    //     from_date: from_date,
    //     to_date: to_date,
    //     description: description,
    //   }),
    // };
    // console.log(company_name, from_date, to_date, description);
    try {
      const url = `http://localhost:8000/experience/new`;
      const response = await fetch(url, { method: "POST", body });
      const result = await response.json();
    } catch (error) {
      console.log(error);
    }

    // console.log(result);

    e.target.role.value = "";
    e.target.company.value = "";
    e.target.start.value = "";
    e.target.end.value = "";
    e.target.image.value = "";
  };

  render() {
    return (
      <form onSubmit={this.createExperience} className="fr1">
        <div className="cc2">
          <input type="text" name="role" placeholder="Role" className="f3" />
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="f1"
            />
          </div>
          <div>
            <input
              type="date"
              name="start"
              placeholder=" Start"
              className="f2"
            />
          </div>
          <div>
            <input type="date" name="end" placeholder=" End" className="f2" />
          </div>
          <div>
            <input
              type="file"
              name="image"
              placeholder=" Image"
              className="f2"
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

export default Addexperience;

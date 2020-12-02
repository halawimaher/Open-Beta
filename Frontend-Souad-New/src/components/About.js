import React from 'react'
import './About.css'
import Loading from './Loading'
//blah
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutTable: []
        };
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8000/about");
        const result = await response.json();
        this.setState({ aboutTable: result.about })
    }

    render() {
        if (this.state.aboutTable.length === 0) {
            return <Loading />
        } else {
            return (
                <div className="About-Section" id="About">
                    <div className="announcement">
                        <div className="test"> {this.state.aboutTable[0].title} </div>
                        <p>{this.state.aboutTable[0].about_text}</p>
                    </div>
                </div>
            )
        }
    }
}

export default About

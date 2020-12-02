import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Experience.css'
import Loading from './Loading'

class slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: []
        };
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8000/experience");
        const result = await response.json();
        this.setState({ experience: result.expList })
    }

    render() {
        if (this.state.experience.length === 0) {
            return <Loading />
        } else {
            return (
                <div className="main-wrapper">
                    <h1 id="Experience">My Experience</h1>
                    <div className="exp-slider">
                        <Carousel
                            horizontalMode
                            easing="cubic-bezier(0.110,1,1.000,0.210)"
                            tiltEasing="cubic-bezier(1,0.15,0.55,1.54)"
                            transitionMs={500}
                        >
                            {this.state.experience.map((exp, index) =>
                                <div key={index}>
                                    <div className="card-avatar">
                                        <img src={exp.image} alt="company logo"></img>
                                    </div>
                                    <div className="card-details">
                                        <div className="name">{exp.role}</div>
                                        <div className="occupation">{exp.company}</div>

                                        <div className="card-about">
                                            <div className="item">
                                                <span className="value">{exp.start}</span>
                                                <span className="separator"> | </span>
                                                <span className="value">{exp.end}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div >

            )
        }
    }
}
export default slider
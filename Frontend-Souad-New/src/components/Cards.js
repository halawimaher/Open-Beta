import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Loading from './Loading'

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8000/skill");
        const result = await response.json();
        this.setState({ cards: result.skillList })
    }

    render() {
        if (this.state.cards.length === 0) {
            return <Loading />
        } else {
            return (
                <>
                    <div className="cards" id="Skills">
                        <h1>My Skill Set</h1>
                        <div className="all--cards">
                            <div className="cards--container">
                                <div className="cards--wrapper">
                                    <ul className="cards--items">
                                        {this.state.cards.map((skill, index) =>
                                            <CardItem
                                                key={index}
                                                src={skill.image}
                                                text={skill.description}
                                                label={skill.label}
                                                path="/"
                                            />
                                        )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Cards

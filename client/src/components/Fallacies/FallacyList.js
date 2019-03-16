import React, { Component } from 'react';

import FallacyCard from './FallacyCard';
import fallacies from './data';

class FallacyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fallacies: []
        }
    }

    componentDidMount() {
        this.setState({fallacies})
    }

    renderFallacies = () => {
        const alphabetically = this.state.fallacies.sort((a, b) => {
            if (a.fallacy < b.fallacy) { return -1}
            if (a.fallacy > b.fallacy) { return 1}
            return 0
        });

        return alphabetically.map((fallacy, i) => {
            return <FallacyCard fallacy={fallacy} key={i} />
        })
    }

    render() {
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'top'}}>
                {this.renderFallacies()}
            </div>
        )
    }
}

export default FallacyList;
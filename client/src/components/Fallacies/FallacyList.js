import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import FallacyCard from './FallacyCard';
import fallacies from './data';

class FallacyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fallacies: [],
            query: ""
        }
    }

    componentDidMount() {
        this.setState({ fallacies })
    }

    renderFallacies = () => {
        const { query, fallacies } = this.state;
        let newFallacies;
        if (query === "") {
            newFallacies = fallacies.sort((a, b) => {
                if (a.fallacy < b.fallacy) { return -1 }
                if (a.fallacy > b.fallacy) { return 1 }
                return 0
            });
        } else {
            newFallacies = fallacies.filter((a) => {
                let returnIt;
                if (a.fallacy.includes(query) || a.translation.includes(query) || a.description.includes(query) ||
                    a.similar.find(x => x.includes(query) === true)) {
                    returnIt = true
                }

                return returnIt ? a : null;
            })
        }

        return newFallacies.map((fallacy, i) => {
            return <FallacyCard fallacy={fallacy} key={i} />
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value, });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.query)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
                    <TextField
                        id="outlined-search"
                        label="Search field"
                        type="search"
                        value={this.state.query}
                        onChange={this.handleChange('query')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'top' }}>
                    {this.renderFallacies()}
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

FallacyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FallacyList);
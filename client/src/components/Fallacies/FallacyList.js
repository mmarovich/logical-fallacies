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
        const q = query.toLowerCase();
        let newFallacies;
        if (q === "") {
            newFallacies = fallacies.sort((a, b) => {
                if (a.fallacy < b.fallacy) { return -1 }
                if (a.fallacy > b.fallacy) { return 1 }
                return 0
            });
        } else {
            newFallacies = fallacies.filter((a) => {
                let returnIt;
                if (a.fallacy.includes(q) || a.translation.includes(q) || a.description.includes(q) ||
                    a.similar.find(x => x.includes(q) === true)) {
                    returnIt = true
                }

                return returnIt ? a : null;
            })
        }
        if (newFallacies.length > 0) {
            return newFallacies.map((fallacy, i) => {
                return <FallacyCard fallacy={fallacy} key={i} />
            })
        } else {
            return <div style={{maxWidth: 400, margin: '10px', textAlign: 'center'}}>
                <h4>Either I haven't added that fallacy yet, or you made up your own fallacy. 
                    Or maybe you <i>are</i> a fallacy.  Either way, I can't help you.</h4>
            </div>
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value, });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.query)
    }

    render() {
        const { classes, height } = this.props;
        return (
            <div style={{minHeight: height}}>
                <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
                    <TextField
                        id="outlined-search"
                        label="Search field"
                        type="search"
                        value={this.state.query}
                        onChange={this.handleChange('query')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }
                        }}
                        InputProps={{
                            classes: {
                                input: classes.multilineColor
                            }
                        }}
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
    multilineColor: {
        color: 'lightblue'
    },
    cssLabel: {
        '&$cssFocused': {
            color: 'lightblue',
        },
        color: 'lightblue'
    },
    cssFocused: {},
});

FallacyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FallacyList);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Videos from './Videos';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import definitions from './definitions';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: '10px',
    backgroundColor: "rgba(225,225,225,1)"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(90deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize'
  },
  customWidth: {
    maxWidth: 300,
  }
});

class FallacyCard extends React.Component {
  state = {
    examplesExpanded: false,
    videosExpanded: false
  };

  handleExpandClick = toggle => {
    this.setState(state => ({ [toggle]: !state[toggle] }));
  };

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  renderToolTip = (fallacy) => {
    let array = []
    fallacy.type.forEach((type, i) => {
      if (Object.keys(definitions).includes(type)) {
        array.push(definitions[type])
      }
    })
    return array.map((def, i) => {
      return <p key={i}>{def}</p>
    })
  }

  render() {
    const { classes, fallacy } = this.props;
    const terms = Object.keys(definitions)

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Tooltip
              disableFocusListener
              disableTouchListener
              TransitionComponent={Zoom}
              title={this.renderToolTip(fallacy)}
              placement="right-start"
              classes={{ tooltip: classes.customWidth }}
            >
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {fallacy.type[0] === "informal" ? `I` : `F`}
              </Avatar>
            </Tooltip>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={fallacy.fallacy}
          subheader={fallacy.translation ? `or "${fallacy.translation}"` : null}
          classes={{ title: classes.title }}
        />
        <CardMedia
          className={classes.media}
          image={fallacy.image}
          title={fallacy.fallacy}
        />
        <CardContent>
          <Typography component="p">
            {fallacy.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.examplesExpanded,
            })}
            onClick={() => this.handleExpandClick("examplesExpanded")}
            aria-expanded={this.state.examplesExpanded}
            aria-label="Show more"
          >
            <SpeakerNotesIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.videosExpanded,
            })}
            onClick={() => this.handleExpandClick("videosExpanded")}
            aria-expanded={this.state.videosExpanded}
            aria-label="Show more"
          >
            <LiveTvIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.examplesExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardHeader
              title="Similar"
              classes={{ title: classes.title }}
            />
            <Typography paragraph><i>{fallacy.similar.join(",  ")}</i></Typography>

            <CardHeader
              title="Brief Examples"
              classes={{ title: classes.title }}
            />

            {fallacy.examples.map((quote, i) => {
              return <div key={i}>
                <i>{quote.split("|").map((line) => <Typography key={i} paragraph>{line}</Typography>)}</i>
                {fallacy.examples.length !== i + 1 ? <hr /> : null}
              </div>
            })}

          </CardContent>
        </Collapse>
        <Collapse in={this.state.videosExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardHeader
              title="Explanations"
              classes={{ title: classes.title }}
            />

            <Videos videoType={fallacy.explained} />

            <CardHeader
              title="Examples"
              classes={{ title: classes.title }}
            />

            <Videos videoType={fallacy.real_life} />

          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

FallacyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FallacyCard);
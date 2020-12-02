import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loading from './Loading'
import ReadMoreReact from 'read-more-react';

const styles = theme => ({
  root: {
    maxWidth: 500,
    minWidth: 300,
    margin: 10,
    color: "#007CC7",
    background: '#b6d1e2',
    borderRadius: 0,
  },
  text: {
    color: "#242424",
  },
  media: {
    height: 140,
    cursor: "default"
  },
  link: {
    textDecoration: "none",
  }
})

class MediaCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectsInfo: []
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/project");
    const result = await response.json();
    this.setState({ projectsInfo: result.projList })
  }


  render() {
    const { classes } = this.props
    if (this.state.projectsInfo.length === 0) {
      return <Loading />
    } else {
      return (
        <>
          {this.state.projectsInfo.slice(0, 3).map((info, index) =>
            <Card key={index} className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={info.image} title="Contemplative Reptile" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                  </Typography>
                  <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                    <ReadMoreReact text={info.description} min={20} ideal={50} max={10000} readMoreText="Read More" />
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  <a className={classes.link} href={info.github_link} target="_blank" rel="noreferrer">Source Code</a>
                </Button>
                <Button size="small" color="secondary">
                  <a className={classes.link} href={info.demo_link} target="_blank" rel="noreferrer">Live Demo</a>
                </Button>
              </CardActions>

            </Card>
          )}
        </>
      );
    }
  }
}

export default withStyles(styles, { withTheme: true })(MediaCard);
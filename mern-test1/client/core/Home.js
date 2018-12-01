import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import seashellIMG from "./../assets/images/seashell.jpg"
import {Link} from 'react-router-dom'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px 
      ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className={classes.title}>
            Home Page
          </Typography>
          <CardMedia
            className={classes.media}
            image={seashellIMG}
            title="Unicorn Shells"
          />
          <CardContent>
            <Typography type="body1" component="p">
              Welcome to the Mern Skeleton home page
              <Link to="/users">Users</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

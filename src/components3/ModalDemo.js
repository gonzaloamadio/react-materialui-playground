import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DemoStyle from "./DemoStyle";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class ModalDemo extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        {/* ---------- MODAL ----------- */}

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Modal Pop-up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is an example of modal pop-up
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* ---------- CONTENT ---------- */}

        <Typography variant="h3" gutterBottom>
          Material-UI Demo
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Example Project
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          Show Pop-Up
        </Button>
      </div>
    );
  }
}

ModalDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default DemoStyle(withStyles(styles)(ModalDemo));

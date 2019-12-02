import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   DatePicker,
//   TimePicker
// } from "material-ui-pickers";

const styles = {
  grid: {
    width: "60%"
  }
};

class MaterialUIPickersDemo extends React.Component {
  state = {
    selectedDate: new Date("2019-03-31T21:11:54")
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return null;
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <Grid container className={classes.grid} justify="space-around">
    //     <DatePicker
    //       margin="normal"
    //       label="Date picker"
    //       value={selectedDate}
    //       onChange={this.handleDateChange}
    //     />
    //     <TimePicker
    //       margin="normal"
    //       label="Time picker"
    //       value={selectedDate}
    //       onChange={this.handleDateChange}
    //     />
    //   </Grid>
    // </MuiPickersUtilsProvider>
  }
}

MaterialUIPickersDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialUIPickersDemo);

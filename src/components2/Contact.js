import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

// Here we first imported the FormControl,InputLabel,Input,Button and
// TextField components from the material UI framework.

// FormControlComponent: In FormControl component we passed margin prop value
// to normal so that it maintains the distance between input fields,
// we also passed fullWidth it means to occupy the available space.

// InputLabel : The InputLabel component helps us to display the label for our input field.

// Input: The Input component helps us display the HTML input field.

// if we pass multiline prop to the Input component it will render
// textarea element instead of input field.

// rows prop is used to increase the rows in textarea element.

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="email" multiline rows={10} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Contact;

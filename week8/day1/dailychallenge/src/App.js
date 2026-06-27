import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      lactoseFree: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  render() {
    return (
      <div>
        <FormComponent
          handleChange={this.handleChange}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
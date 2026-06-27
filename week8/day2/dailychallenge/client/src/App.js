import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
    input: "",
    response: "",
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/hello");
    const data = await res.text();

    this.setState({ message: data });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: this.state.input,
      }),
    });

    const data = await res.text();

    this.setState({ response: data });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
          <button type="submit">Send</button>
        </form>

        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

export default App;
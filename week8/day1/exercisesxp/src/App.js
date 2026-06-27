import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
   <h1 onClick={this.handleClick}>
      {this.state.counter}
      </h1>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Child is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      favoriteColor: "red",
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow"
      });
    }, 3000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue"
    });
  };

  deleteChild = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div>

        <h1>Exercise 1</h1>

        <h2>Simulation 1</h2>

        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <hr />

        <h2>Simulation 2</h2>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <hr />

        <h2>Simulation 3</h2>

        <BuggyCounter />

        <hr />

        <h1>Exercise 2</h1>

        <h2>
          My favorite color is {this.state.favoriteColor}
        </h2>

        <button onClick={this.changeColor}>
          Change color
        </button>

        <hr />

        <h1>Exercise 3</h1>

        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>
          Delete Header
        </button>

      </div>
    );
  }
}

export default App;
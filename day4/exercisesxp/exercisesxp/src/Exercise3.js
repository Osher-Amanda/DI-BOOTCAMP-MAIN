import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {

  render() {

    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>

        <h1 style={style_header}>This is a Header</h1>

        <p className="para">This is a paragraph styled with CSS</p>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          Visit React Website
        </a>

        <form>
          <input type="text" placeholder="Enter something" />
          <button type="submit">Submit</button>
        </form>

        <img 
          src="https://via.placeholder.com/150" 
          alt="placeholder" 
        />

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

      </div>
    );
  }
}

export default Exercise;
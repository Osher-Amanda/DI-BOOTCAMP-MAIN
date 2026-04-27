import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    return (
      <ul>
        {this.props.animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
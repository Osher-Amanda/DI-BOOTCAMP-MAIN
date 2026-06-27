import React from "react";

function FormComponent(props) {
  return (
    <div>
      <form method="GET">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />

        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />

        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={props.handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={props.handleChange}
          />
          Female
        </label>

        <br />

        <select
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">-- Choose Destination --</option>
          <option value="Japan">Japan</option>
          <option value="Thailand">Thailand</option>
          <option value="Brazil">Brazil</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            onChange={props.handleChange}
          />
          Lactose Free
        </label>

        <hr />

        <h2>Entered Information:</h2>

        <p>
          Name: {props.data.firstName} {props.data.lastName}
        </p>

        <p>Age: {props.data.age}</p>

        <p>Gender: {props.data.gender}</p>

        <p>Destination: {props.data.destination}</p>

        <p>
          Lactose Free:
          {props.data.lactoseFree ? " Yes" : " No"}
        </p>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
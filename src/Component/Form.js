import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  return (
    <div className="w-50 shadow-lg p-5 m-auto mt-5 rounded">
      <form action="">
        <div className="row g-2">
          <div className="col-md-3">
            <select
              id="inputState"
              className="form-select"
              name="gender"
              defaultValue=""
              required
              onChange={handleOnChange}
            >
              <option defaultValue="">Choose...</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder=" Username"
              aria-label="Username"
              name="name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

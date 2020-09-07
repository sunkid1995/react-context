/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';

// context
import { useConnect } from '../../context/store';

// type
import { createUser, getUser } from '../../context/store/actions';

function App(props) {
  const { getAllusers, users, createNewUser } = props;

  const [user, setUser] = useState({});

  useEffect(() => {
    getAllusers();
  }, []);

  const handleInputChange = (key, event) => {
    return setUser({
      ...user,
      [key]: event.target.value
    })
  };

  const onCreate = () => {
    return createNewUser(user);
  };

  const renderTable = useMemo(() => {
    if (!users.data) return null;

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {users.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }, [users]);

  return (
    <div className="App">
      <div style={{ width: 300, margin: '20px auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Name:</label>
          <input
            onChange={e => handleInputChange('name', e)}
          />
          <label>Age:</label>
          <input
            onChange={e => handleInputChange('age', e)}
          />
          <label>City:</label>
          <input
            onChange={e => handleInputChange('city', e)}
          />
        </form>
        <button
          style={{ marginTop: 10, float: 'right' }}
          onClick={onCreate}
        >
          Create
        </button>
      </div>

      <div>
        {renderTable}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users.dataList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllusers: () => dispatch(getUser()),
    createNewUser: payload => dispatch(createUser(payload))
  }
}

export default useConnect(mapStateToProps, mapDispatchToProps)(App);

import React, { useContext, useState, useMemo } from 'react';

// context
import { StoreContext } from '../../context/store';

// type
import { createUser } from '../../context/store/actions';

function App() {
  const [state, dispatch] = useContext(StoreContext);
  const [user, setUser] = useState({});

  const handleInputChange = (key, event) => {
    return setUser({
      ...user,
      [key]: event.target.value
    })
  };

  const onCreate = () => {
    return dispatch(createUser(user))
  };

  const renderTable = useMemo(() => {
    if (!state.users.dataList.data.length) return null;

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
          {state.users.dataList.data.map((item, index) => {
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
  }, [state.users.dataList]);

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

export default App;

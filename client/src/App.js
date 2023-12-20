import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
//handles the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser('');
  };
//handles the delete button
  const handleDelete = (index) => {
    const Delete = [...users];
    Delete.splice(index, 1);
    setUsers(Delete);
  };
//if you no users are in the list it displays "no users added"
  const rendering = () => {
    if (users.length === 0) {
      return <p>No Users added</p>;
    }

    return (
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
    );
    
  };

  return (
    <div>
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a User"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      {rendering()}
    </div>
  );
}

export default App;

import Form from './Component/Form';
import Table from './Component/Table';

import { useState } from 'react';
function App() {
  const [userList, setUserList] = useState([]);
  const addUser = (userObj) => {
    setUserList([...userList, userObj]);
  };
  console.log(userList);
  return (
    <div className="container pt-5">
      <h2 className="text-center">UserList</h2>
      <hr />
      {/* Form Component */}
      <Form addUser={addUser} />
      {/* Table Component */}
      <Table />
    </div>
  );
}

export default App;

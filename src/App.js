import Form from './Component/Form';
import Table from './Component/Table';

function App() {
  return (
    <div className="container pt-5">
      <h2 className="text-center">UserList</h2>
      <hr />
      {/* Form Component */}
      <Form />
      {/* Table Component */}
      <Table />
    </div>
  );
}

export default App;

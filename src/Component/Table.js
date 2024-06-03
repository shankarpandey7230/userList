import React from 'react';
import { MaleAvatar, FemaleAvatar } from './Avatar';

const Table = ({ userList }) => {
  return (
    <div className="mt-5 shadow-lg p-2 rounded">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td style={{ color: user.gender === 'm' ? 'blue' : 'pink' }}>
                {user.name}
              </td>
              <td>{user.gender}</td>
              <td>{user.gender === 'm' ? <MaleAvatar /> : <FemaleAvatar />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

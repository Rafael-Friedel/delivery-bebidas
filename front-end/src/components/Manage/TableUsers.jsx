import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import THeadAdminTable from './THeadAdminTable';
import deleteUser from '../../fetchs/deleteUsers';
import myContext from '../../context/myContext';

function TableUsers({ user }) {
  const testId = 'admin_manage__element-user-table';
  const { users, setUsers } = useContext(myContext);

  const rmvUsers = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <table className="w-full shadow-xl">
      <THeadAdminTable />
      <tbody className="bg-gray-50 border-b-2 border-gray-200">
        {user.map((u, index) => (
          <tr key={ index }>
            <td
              className="p-3 text-sm text-gray-700 text-center"
              data-testId={ `${testId}-item-number-${u.id}` }
            >
              {u.id}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center"
              data-testid={ `${testId}-name-${u.id}"` }
            >
              {u.name}
            </td>
            <td
              className={ `p-3 text-sm text-gray-700 text-center
          hover:text-white hover:bg-blue-600` }
              data-testid={ `${testId}-email-${u.id}` }
            >
              {u.email}
            </td>
            <td
              className={ `p-3 text-sm text-gray-700 text-center
          hover:text-white hover:bg-blue-600` }
              data-testid={ `${testId}-role-${u.id}` }
            >
              {u.role}
            </td>
            <td
              className={ `p-3 text-sm text-gray-700 text-center 
                hover:bg-red-600 hover:text-white` }
            >
              <button
                type="button"
                onClick={ () => rmvUsers(u.id) }
                data-testid={ `${testId}-remove-${u.id}` }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableUsers.propTypes = {
  user: PropTypes.instanceOf(Array).isRequired,
};

export default TableUsers;

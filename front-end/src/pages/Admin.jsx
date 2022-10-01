import React, { useContext, useEffect } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import TableUsers from '../components/Manage/TableUsers';
import AdminRegister from '../components/Register/AdminRegister';
import myContext from '../context/myContext';
import usersList from '../fetchs/listUsers';

function Admin() {
  const { alertRegister, users, setUsers } = useContext(myContext);

  const getUsers = async () => {
    const allUsers = await usersList();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <section>
      <HeaderAdmin />
      <section className="px-20 py-5">
        <h2 className="py-5">Cadastrar novo usuário</h2>
        <AdminRegister />
        {alertRegister && (
          <p
            data-testid="admin_manage__element-invalid-register"
            className="text-center"
          >
            Não foi possível criar sua conta, tente outro nome ou e-mail.
          </p>
        )}
      </section>
      <section className="px-20 py-5">
        <h2 className="px-5 py-2">Lista de Usuários</h2>
        <TableUsers user={ users } />
      </section>
    </section>
  );
}

export default Admin;

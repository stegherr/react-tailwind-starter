import { Card, CardHeader, Button, CardContent } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import React, { useEffect } from "react";
import { getUsers } from "../users/user-api-services";
import "./Users.module.css";
import useHttp from "../../hooks/use-http";
const Users = (props) => {
  const [totalRecords, setTotalRecords] = React.useState(10);
  const [search, setSearch] = React.useState({ size: 10, page: 0, search: "" });
  const [users, setUsers] = React.useState([]);

  const { sendRequest, status, data, apiError } = useHttp(getUsers);

  const handleChangePage = (event, newPage) => {
    setSearch({ ...search, page: newPage });
  };
  useEffect(async () => {
    console.log(search);

    // const usersData = await getUsers(search);
    const usersData = await sendRequest(search);
    setUsers(usersData.users);
  }, [search]);

  const handleChangeRowsPerPage = (event) => {
    setSearch((prev) => {
      return { ...prev, page: 0, size: +event.target.value };
    });
  };
  return (
    <div className=" bg-white rounded-xl shadow-lg">
      <div className="flex justify-between px-4 pt-4">
        <h1 className="text-2xl inline-flex items-center">All users</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:bg-gradient-to-br focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2 text-center "
        >
          Add User
        </button>
      </div>
      <div className="flex flex-col mt-3 mx-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 pt-0 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center ">
                <thead className="border-b bg-slate-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 w-1"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Last Login
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr className="bg-white border-b" key={user.userId}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1">
                        {search.page * search.size + index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                        {user.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                        {user.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                        {user.lastLogin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={totalRecords}
                rowsPerPage={search.size}
                page={search.page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;

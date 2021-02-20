import { useDispatch } from "react-redux";
import actionsTask from "../../redux/currentTask/actions";
import userActions from "../../redux/users/actions";
import DeleteModal from "../deleteModal/DeleteModal";
import { Table, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const FetchedUsers = ({ users, setEditingUser }) => {
  const [sorting, setSorting] = useState("id_asc");
  const dispatch = useDispatch();

  const setEditing = (id) => {
    setEditingUser(true);
    dispatch(actionsTask.currentTask(users.filter((user) => user.id === id)));
  };

  const handleSort = (e) => {
    if (sorting === `${e.target.innerText.toLowerCase()}_asc`) {
      setSorting(`${e.target.innerText.toLowerCase()}_desc`);
      dispatch(
        userActions.sortUsers(`${e.target.innerText.toLowerCase()}_desc`)
      );
    } else if (sorting !== `${e.target.innerText.toLowerCase()}_asc`) {
      setSorting(`${e.target.innerText.toLowerCase()}_asc`);
      dispatch(
        userActions.sortUsers(`${e.target.innerText.toLowerCase()}_asc`)
      );
    }
  };

  return users.length > 0 ? (
    <Table responsive className="border">
      <thead>
        <tr className="table-secondary">
          <th
            className="cursor-pointer"
            role="button"
            onClick={(e) => handleSort(e)}
          >
            ID
          </th>
          <th
            onClick={(e) => handleSort(e)}
            className="cursor-pointer"
            role="button"
          >
            Name
          </th>
          <th
            onClick={(e) => handleSort(e)}
            className="cursor-pointer"
            role="button"
          >
            Username
          </th>
          <th
            onClick={(e) => handleSort(e)}
            className="cursor-pointer"
            role="button"
          >
            City
          </th>
          <th
            onClick={(e) => handleSort(e)}
            className="cursor-pointer"
            role="button"
          >
            Email
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map(
            ({ id, name, username, email, address: { city } = "" }, index) => (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{city}</td>
                <td>{email}</td>
                <td>
                  <Button variant="warning" onClick={() => setEditing(id)}>
                    edit
                  </Button>
                </td>
                <td>
                  <DeleteModal data={{ id, name }} />
                </td>
              </tr>
            )
          )}
      </tbody>
    </Table>
  ) : (
    <Alert variant="danger">User list is empty!</Alert>
  );
};

export default FetchedUsers;

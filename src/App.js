import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./redux/users/actions";
import fetchNewData from "./utils/fetchUsers";
import AddUser from "./components/addUser/AddUser";
import FetchedUsers from "./components/fetchedUsers/FetchedUsers";
import EditUser from "./components/editUser/EditUser";
import Layout from "./components/layout/Layout";

const App = () => {
  const [addingUser, setAddingUser] = useState(false);
  const [editingUser, setEditingUser] = useState(false);
  const fetchedUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNewData((users) => dispatch(actions.fetchUsers(users)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      addingUser={addingUser}
      editingUser={editingUser}
      setAddingUser={setAddingUser}
    >
      {addingUser && <AddUser setAddingUser={setAddingUser} />}
      {editingUser && <EditUser setEditingUser={setEditingUser} />}
      {!addingUser && !editingUser && (
        <FetchedUsers users={fetchedUsers} setEditingUser={setEditingUser} />
      )}
    </Layout>
  );
};

export default App;
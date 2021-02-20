import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/users/actions";
import { Button, Modal } from "react-bootstrap";
import deleteUserRequest from "../../utils/deleteUserRequest";

const DeleteModal = ({ data: { id, name } }) => {
  
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteUser = () => {
    handleClose();
    dispatch(actions.deleteUser(id))
    deleteUserRequest(id);
  };
  

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete user: {id}-{name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;

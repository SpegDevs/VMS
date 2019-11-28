import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

export const ModalFetch = ({ isOpen, toggle, data }) => {
  return (
    <Modal isOpen={isOpen} toggle={() => toggle()}>
      <ModalHeader>OUTPUT</ModalHeader>
      <ModalBody>
        <h3>{data}</h3>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => { 
          toggle();
        }}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

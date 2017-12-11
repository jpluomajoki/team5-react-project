import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { CLOSE_INDICATOR } from "constants/InformationHTML";

const InformationModal = ({
  informationModal,
  onToggleInformationModalClick
}) => (
    <Modal show={informationModal.showModal}>
      <Modal.Header>
        <Modal.Title>{informationModal.data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: informationModal.data.content }}></Modal.Body>
      <Modal.Footer>
        <Button name={CLOSE_INDICATOR} onClick={onToggleInformationModalClick}>
          Close
      </Button>
      </Modal.Footer>
    </Modal>
  );

InformationModal.propTypes = {
  informationModal: PropTypes.object.isRequired,
  onToggleInformationModalClick: PropTypes.func.isRequired
};

InformationModal.defaultProps = {
  // Empty
};

export default InformationModal;

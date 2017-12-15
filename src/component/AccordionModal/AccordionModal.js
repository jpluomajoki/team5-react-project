import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Accordion, Panel } from 'react-bootstrap'
import _ from 'lodash'
import * as FormControlNames from 'constants/FormControls'

const AccordionModal = ({
  accordionModal,
  onToggleAccordionModalClick,
  onCloseAccordionModalClick
}) => {
  let actualModal
  // If there's more nested array's, expand this to a switch.
  const subArrayName = FormControlNames.INDICATORS

  if (accordionModal.hasGroups) {
    actualModal =
      <Modal show={accordionModal.showModal} onHide={onCloseAccordionModalClick}>
        <Modal.Header closeButton>
          <Modal.Title> {accordionModal.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion>
            {_.map(accordionModal.data, array => {
              return [
                <h4>{array.name}</h4>,
                _.map(array[subArrayName], subArray => {
                  return (
                    <Panel key={subArray.id} header={subArray.name} eventKey={subArray.id}>
                      {subArray.description}
                    </Panel>
                  )
                })]
            })}
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseAccordionModalClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  } else {
    actualModal =
      <Modal show={accordionModal.showModal} onHide={onCloseAccordionModalClick}>
        <Modal.Header closeButton>
          <Modal.Title> {accordionModal.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion>
            {_.map(accordionModal.data, (array) => {
              return (
                <Panel key={array.id} header={array.name} eventKey={array.id}>
                  {array.description}
                </Panel>
              )
            })}
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseAccordionModalClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  }
  return (actualModal)
}

AccordionModal.propTypes = {
  accordionModal: PropTypes.object.isRequired,
  onToggleAccordionModalClick: PropTypes.func.isRequired,
  onCloseAccordionModalClick: PropTypes.func.isRequired
}

AccordionModal.defaultProps = {
  // Empty
}

export default AccordionModal

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'




export const Window = ({
    title,description, show, showModal,closeModal,language,created_at
}) =>   {
   
    
 return(
    <>
    {
        <React.Fragment>
             <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Descripción</h4>
                <p>{description}</p>
            <hr />
            <h4>Desarrollado en </h4>
                <ul>
                  <li><p>{language}</p></li>
                </ul>
            <h4>Fecha </h4>
                <ul>
                  <li><p>{created_at}</p></li>
                </ul>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
    }
    </>
 );
  
}

Window.propTypes = {
    title: PropTypes.string,
    description:PropTypes.string,
    show:PropTypes.bool,
    showModal:PropTypes.func,
    closeModal: PropTypes.func,
    language : PropTypes.string,
    created_at : PropTypes.string
    
  };
  Window.defaultProps = {
    title: 'Modal title',
    description:'',
    show: false,
    showModal:() => {},
    closeModal: () => {},
    language : '',
    created_at : ''
   
  };
export default Window;
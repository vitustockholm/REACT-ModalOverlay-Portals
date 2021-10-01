import PropTypes from 'prop-types';
import React, { useEffect } from 'react'; //for esc button management
import ReactDOM from 'react-dom';

//Styles
import {
  Overlay,
  ModalWrapper,
  StyledModal,
  CloseButtonWrapper,
  CloseButton,
} from './ModalRegister.style';

const ModalRegister = ({ children, onClose }) => {
  //Hooks
  //--side effects
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);
  //
  // Custom Functions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };
  return ReactDOM.createPortal(
    //created portal
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='modalWrapper'>
        <StyledModal>
          <CloseButtonWrapper>
            <CloseButton onClick={onClose}>✕</CloseButton>
          </CloseButtonWrapper>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

// PropTypes

ModalRegister.propTypes = {
  children: PropTypes.node, //everythink for render on screen to client
  onClose: PropTypes.func.isRequired,
};

export default ModalRegister;

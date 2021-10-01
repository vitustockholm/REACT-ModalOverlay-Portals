import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  max-width: 100%;
  background-color: white;

  padding: 555px;
`;

// export const Separator = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: #000;
//   margin: 3px auto;
// `;

// export const CloseButton = styled.span`
// &::after{
//     display: inline-block;
//     content: "\00d7";
// }
// `;

export const CloseButtonWrapper = styled.div`
  display: flex;

  justify-content: right;
  margin-top: 10px;
`;

export const CloseButton = styled.span`
  font-weight: red;
  &:hover {
    cursor: pointer;
  }
`;

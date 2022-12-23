import styled from 'styled-components';

export const LoaderContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  box-shadow: 0px 0px 10px #bbbbbb;
  padding: 16px;
`;

export const LoaderImage = styled.img`
  width: 80px;
`;

export const LoaderTypography = styled.p`
  margin: 0;
  margin-top: 16px;
`;

import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const Logo = styled.img`
  @media (max-width: 720px) {
    width: 150px;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
`;

export const UserLogo = styled.img`
  margin-top: 2rem !important;
  padding-bottom: 0.5rem;
  display: block;
  width: 2rem;
  margin: 0 auto;

  @media (max-width: 720px) {
    /* width: 150px;
      margin-top: 5rem;
      margin-bottom: 2rem; */
  }
`;

export const NavigateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px;
  transition: 0.2s ease-in-out;

  cursor: pointer;
  :hover {
    border: 1px solid #bdbdbd;
    box-shadow: 0px 0px 10px #dddddd;
  }
  p {
    font-size: 24px;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const NavigateButton = styled.button`
  position: relative;
  padding: 100px;
  width: 400px;
  width: 350px;
  border: 1px solid #bdbdbd;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  margin: 14px;
  color: white;
  background-image: url(${(props) => props.img});
  background-size: cover;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  border: 1px solid #2796ce;
  @media (max-width: 720px) {
    width: 100%;
    margin: 0;
  }
`;

export const PageContainer = styled.div`
  padding: 16px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 720px) {
    width: 95%;
  }
`;

export const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000087;
  cursor: pointer;
`;

export const BoldTypography = styled.p`
  font-family: lato-bold;
  font-size: 22px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 1rem;
  border: 1px solid #18a9e0;
  background: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 600;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const AddButton = styled.button`
  background-color: #18a9e0;
  color: white;
  font-weight: 600;
  padding: 6px 4px;
  cursor: pointer;
  width: 100%;
  border: 1px solid #bdbdbd;
  margin-bottom: 1rem;
`;

export const EmptyTableMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 16px;
`;

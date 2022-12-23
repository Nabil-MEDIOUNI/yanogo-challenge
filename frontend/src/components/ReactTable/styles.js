import styled from 'styled-components';

export const ReactTableStyles = styled.div`
  @media (max-width: 720px) {
    overflow: auto;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border: 0.5px solid #bdbdbd;

    tr {
      text-align: center;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #bdbdbd;
      border-right: 1px solid #bdbdbd;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowButton = styled.button`
  padding: 8px;
  background-color: #18a9e0;
  color: white;
  border-radius: 4px;
  margin: 0 2px;
  border: 1px solid #b1b1b1;
  font-weight: 400;
  cursor: pointer;
`;

export const EditButton = styled.button`
  padding: 8px;
  background-color: yellow;
  border-radius: 4px;
  margin: 0 2px;
  border: 1px solid #b1b1b1;
  font-weight: 400;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 8px;
  background-color: red;
  color: white;
  border-radius: 4px;
  margin: 0 2px;
  border: 1px solid #b1b1b1;
  font-weight: 400;
  cursor: pointer;
`;

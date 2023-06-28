import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;
  gap: 10px;

  &:active {
    color: #e84a5f;
  }

  .btn {
    cursor: pointer;
    width: 70px;
    height: 28px;
    margin-top: 10px;
    font-size: 16px;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
    margin: auto;
    border-radius: 4px;
    border: #ccc;
    &:hover {
      background-color: orange;
      border-radius: 4px;
      border: #ccc;
      height: 28px;
    }
  }
`;

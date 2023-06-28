import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  width: 320px;
  margin: 20px auto 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);

  .label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .input-form {
    height: 24px;
    padding-left: 8px;
    &::placeholder {
      color: #ccc;
    }
  }
  .form__btn {
    cursor: pointer;
    width: 150px;
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

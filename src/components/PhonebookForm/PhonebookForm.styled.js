import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 490px;
  width: 100%;
  margin: 20px auto 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  gap: 10px;

  .form-title {
    font-size: 30px;
    margin: inherit;
    text-transform: uppercase;
  }

  .form-label {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    width: 60%;
  }
  .input-form {
    height: 24px;
    padding-left: 8px;
    &::placeholder {
      color: #ccc;
    }
  }

  .form-label_name {
    font-size: 18px;
    padding-bottom: 4px;
  }

  .form-btn {
    cursor: pointer;
    justify-content: center;
    width: 150px;
    height: 28px;
    margin-top: 10px;
    font-size: 16px;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
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

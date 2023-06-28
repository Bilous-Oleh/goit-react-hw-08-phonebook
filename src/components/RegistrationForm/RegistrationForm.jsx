import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FormStyled } from './RegistrationForm ';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Username
        <input
          className="input-form"
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
      </label>
      <label className="label">
        Email
        <input
          className="input-form"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </label>
      <label className="label">
        Password
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>
      <button className="form__btn" type="submit">
        Register
      </button>
    </FormStyled>
  );
};

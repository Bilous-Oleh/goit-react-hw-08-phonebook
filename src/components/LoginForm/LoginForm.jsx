import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { LoginFormStyled } from './LoginFormStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
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
        Log In
      </button>
    </LoginFormStyled>
  );
};

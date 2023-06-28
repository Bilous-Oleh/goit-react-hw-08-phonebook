import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLink to="/register">Register</NavLink>

      <NavLink to="/login">Log In</NavLink>
    </AuthNavStyled>
  );
};

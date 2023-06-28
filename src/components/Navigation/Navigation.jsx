import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { NavigationStyled } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavigationStyled>
  );
};

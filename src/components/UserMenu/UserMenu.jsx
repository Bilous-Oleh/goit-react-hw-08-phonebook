import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import { UserMenuStyled } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <p>Welcome, {user.name}</p>
      <button className="btn" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuStyled>
  );
};

import { useAuth } from '../../hooks';
import { AuthNav } from '../AthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AppBarStyled } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarStyled>
  );
};

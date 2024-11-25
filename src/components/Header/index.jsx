import { Container, Brand, Profile, Logout } from './styles';
import { Input } from '../Input'
import { Button } from '../Button'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
      <Container>
        <Brand to="/">
          <h1>RocketMovies</h1>
        </Brand>

        <Input placeholder="Search by title" />

        

        
         <div id="spaces">
           <div id="space">
             <Profile to="/profile">
                <strong>{user.name}</strong>
              </Profile>

              <Logout onClick={signOut}>Log out</Logout>
            </div>

           <Profile to="/profile">
            <img 
            src={avatarUrl} 
            alt="imagem do usuario" 
            />

           </Profile>
        </div>
      </Container>
    )
}
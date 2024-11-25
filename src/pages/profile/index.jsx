import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

export function Profile(){
   const { user, updateProfile } = useAuth();

   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [newPassword, setNewPassword] = useState();
   const [oldPassword, setOldPassword] = useState();
   
   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

   const [avatar, setAvatar] = useState(avatarUrl);
   const [avatarFile, setAvatarFile] = useState(null);

   async function handleUpdate(){
      const user = {
         name,
         email,
         Password: newPassword,
         old_Password: oldPassword
      }
      await updateProfile({ user, avatarFile });
   }

   function handleChangeAvatar(event){
      const file = event.target.files[0];
      setAvatarFile(file);

      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview)
   }
    return(
        <Container>
            <header>
              <Link to="/">
                 <FiArrowLeft /> Return
              </Link>
            </header>
           <Form>
              <Avatar>
                 <img 
                 src={avatar}
                 alt="user's image" 
                 />

              <label htmlFor="avatar">
                    <FiCamera />

                    <input 
                       id="avatar"
                       type="file"
                       onChange={handleChangeAvatar}
                    />
                </label>
              </Avatar>

              <Input 
              icon={FiUser}  
              placeholder="User name"
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)}/>

              <Input 
              icon={FiMail}  
              placeholder="Email"
              type="text" 
              value={email}
              onChange={e => setEmail(e.target.value)}/>

              <Input icon={FiLock}  
              placeholder="New password"
              type="password" 
              onChange={e => setOldPassword(e.target.value)}/>
              
              <Input icon={FiLock} 
              placeholder="Old password"
              type="password" 
              onChange={e => setNewPassword(e.target.value)}/>

             <Button title="Save" onClick={handleUpdate}/>
           </Form>
        </Container>
    )
}
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background, Titles, Inputs } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
     if(!name || !email || !password){
      return alert("Do all the fields!");
     }

     api.post("/users", { name, email, password })
     .then(() => {
      alert("account created");
      navigate("/")
     })
     .catch((error => {
      if(error.response){
         alert(error.response.data.message);
      }else{
         alert("not possible to create an account :(")
      }
     }))


    }


    return(
        <Container>
           <Form>
              <Titles>
                <h1>RocketMovies</h1>
                <p>an aplication to keep tracking your movies</p>
                <h2>Create your account</h2>
              </Titles>

              <Inputs>
                <Input 
                icon={FiUser} 
                placeholder="Name" 
                onChange={e => setName(e.target.value)}
                />

                <Input 
                icon={FiMail} 
                placeholder="E-mail" 
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                icon={FiLock} 
                type="password" 
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Create account" onClick={handleSignUp} />
              </Inputs>

              <Link to="/">
                 <FiArrowLeft /> Return to login
              </Link>
           </Form>

           <Background />

        </Container>
    )
}
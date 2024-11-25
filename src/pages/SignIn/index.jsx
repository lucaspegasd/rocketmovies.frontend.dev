import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background, Titles, Inputs } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
      signIn({ email, password });
    }

    return(
        <Container>
           <Form>
              <Titles>
                <h1>RocketMovies</h1>
                <p>an aplication to keep tracking your movies</p>
                <h2>will you Log In me?</h2>
              </Titles>

              <Inputs>
                <Input icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <Input icon={FiLock} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>


                <Button title="Enter" onClick={handleSignIn} />
              </Inputs>

              <Link to="/register">
                Create account
              </Link>
           </Form>

           <Background />

        </Container>
    )
}
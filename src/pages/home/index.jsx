import { FiPlus } from 'react-icons/fi'

import { Container, Notes, Main, AddButton } from './styles';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'


export function Home(){
    return(
        <Container>
            <Header />

            <Main>
             <header>
                 <h1>My movies</h1>

                 <AddButton to="/create" ><FiPlus />Add movie</AddButton>
             </header>

             <Notes>
                <Note data={
                    { title: 'Interestellar', 
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro placeat dolores accusamus esse similique ab asperiores beatae corrupti, blanditiis, temporibus natus quas quo necessitatibus officiis sapiente laborum et voluptatem.',
                    tags: [{id: '1', name: 'Ficção Científica'}, {id: '2', name: 'Drama'}, {id: '3', name: 'Família'}]
                    }}/>

                <Note data={
                    { title: 'Interestellar', 
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro placeat dolores accusamus esse similique ab asperiores beatae corrupti, blanditiis, temporibus natus quas quo necessitatibus officiis sapiente laborum et voluptatem.',
                    tags: [{id: '1', name: 'Ficção Científica'}, {id: '2', name: 'Drama'}, {id: '3', name: 'Família'}]
                    }}/>
                    
                <Note data={
                    { title: 'Interestellar', 
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro placeat dolores accusamus esse similique ab asperiores beatae corrupti, blanditiis, temporibus natus quas quo necessitatibus officiis sapiente laborum et voluptatem.',
                    tags: [{id: '1', name: 'Ficção Científica'}, {id: '2', name: 'Drama'}, {id: '3', name: 'Família'}]
                    }}/>
             </Notes>

            </Main>
        </Container>
    )
}

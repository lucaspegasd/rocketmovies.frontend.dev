import { FiArrowLeft } from 'react-icons/fi';

import { Container, Form, Inputs, Buttons } from './styles';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function CreateMovie(){
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
    
  }

  async function handleNewNote(){
    
    console.log(rating);

    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    });
    

    alert("note created!");
    navigate("/")

  }
    return(
        <Container>
           <Header />

           <Form>
             <header>
                  <Link to="/">
                     <FiArrowLeft /> Return
                  </Link>

                  <h1>
                    New Movie
                  </h1>
            </header>

            <Inputs>
              <div id="inputs">
                <Input 
                placeholder="Title" 
                onChange={e => setTitle(e.target.value)}
                />

                <Input 
                placeholder="Your rate (1 to 5 only)" 
                type="number" 
                onChange={e => setRating(e.target.value)}
                />
              </div>

              <TextArea 
              placeholder="Observations"
              onChange={e => setDescription(e.target.value)}
              />
            
            </Inputs>

            <Buttons>
                <h2>Markers</h2>

                <div id="tags">
                  {
                    tags.map((tag, index) => (
                      <NoteItem 
                      key={String(index)}
                      value={tag} 
                      onClick={() => handleRemoveTag(tag)}/>
                    ))
                  }
                    <NoteItem 
                    isNew 
                    placeholder="New tag"
                    onChange={e => setNewTag(e.target.value)}
                    value={newTag} 
                    onClick={handleAddTag}/>
                </div>

                <div id="buttons">
                  <Button id="delete" title="Delete movie" />
                  <Button id="add" title="Save changes" onClick={handleNewNote} />
                </div>



            </Buttons>
           </Form>
        </Container>
    )
}
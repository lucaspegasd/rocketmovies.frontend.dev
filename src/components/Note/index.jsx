import { Container } from './styles';

import { Tag } from '../Tag'
import { Stars } from '../Stars'

export function Note({ data, ...rest }){
    return(
        <Container {...rest}>
            <header>
              <div>
                 <h1>{data.title}</h1>
                 <Stars />
              </div>
            
            </header>

            <p>{data.content}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} content={tag.text}/>)
                    }
                </footer>
            }


        </Container>
    )
}
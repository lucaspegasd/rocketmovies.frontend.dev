import { Container } from './styles';
import { MdStarBorder, MdStar } from "react-icons/md";

export function Stars(){
    return(
        <Container>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarBorder />
        </Container>
    )
}
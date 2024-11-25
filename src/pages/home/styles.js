import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;
  }




`;

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    background-color: red;
  }
  gap: 26px;
  max-height: 316px;
  padding-right: 8px;
  
  svg {
    gap: 30px;
  }


`;

export const Main = styled.div`
   margin-left: 123px;
   margin-right: 106px;
   margin-top: 50px;
   margin-bottom: 58px;

   Button {
    height: 48px;
    width: 207px;
    gap: 8px;
    
   }
`;

export const AddButton = styled(Link)`
  height: 48px;
  width: 207px;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  place-content: center;


  border: 0;
  padding: 0 16px;

  border-radius: 10px;
  font-weight: 500;

  &:disabled {
   opacity: 0.5;
  }
`;
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 64px;
  height: 116px;

  padding: 24px 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.TEXT_100};

  #spaces {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const Brand = styled(Link)`
  background: none;
  border: none;
    
  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;



  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;

  }

  strong {
  font-size: 14px;
  font-weight: bold;

  white-space: nowrap;




  color: ${({ theme }) => theme.COLORS.WHITE};
      
  }

  #space {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;


  }

`;

export const Logout = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  background: transparent;
  border: none;
`;
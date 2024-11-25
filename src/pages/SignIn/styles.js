import styled from 'styled-components';
import backgroundimg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;

  align-items: stretch;

`;

export const Form = styled.form`
  font-size: 16px;
  padding: 100px 160px 0px 135px;

  > a {
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;

`;

export const Inputs = styled.div`
  width: 100%;
  Button {
    padding-top: 16px;
    padding-bottom: 16px;
    margin-top: 16px;
    margin-bottom: 42px;
  }

  svg {
    width: 20px;
    height: 18px;
    margin-left: 8px;

    color: ${({ theme }) => theme.COLORS.TEXT_200};
   }

`;

export const Titles = styled.div`
  width: 100%;

  margin-bottom: 48px;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.TEXT_200};
    margin-bottom: 48px;
  }

  h2 {
    font-size: 24px;
    font-weight: regular;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
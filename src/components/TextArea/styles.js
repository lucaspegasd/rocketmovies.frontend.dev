import styled from 'styled-components';

export const Container = styled.textarea`
   width: 100%;
   height: 272px;

   padding: 19px 16px;

   border: none;
   border-radius: 10px;
   resize: none;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
   color: ${({ theme }) => theme.COLORS.WHITE };

   &::placeholder {
     color: ${({ theme }) => theme.COLORS.TEXT_100 };
    }
`;
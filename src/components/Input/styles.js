import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    padding-left: 12px;


   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT };
   color: ${({ theme }) => theme.COLORS.WHITE };

   margin-bottom: 8px;
   border-radius: 10px;


    > input {
        padding: 19px 24px;
        width: 100%;
        height: 56px;
        border: none;

        
       
        border-radius: 10px;

       background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT };
       color: ${({ theme }) => theme.COLORS.WHITE };

       &::placeholder {
         color: ${({ theme }) => theme.COLORS.TEXT_100 };
       }

       > svg {
         margin-left: 16px;
       }
   }
`;
import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   color: ${({ theme }) => theme.COLORS.PINK};
   gap: 8px;
  
   svg {
    width: 19px;
    height: 19px;
   }
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Form = styled.div`

    margin: 40px 106px 85px 123px;
    overflow-y: scroll;
    padding-right: 8px;
    height: 401px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 400;
    }

    header {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    a svg {
        width: 20px;
        height: 20px;
    }
  
    #title {
        display: flex;
        align-items: center;
        gap: 19px;

        h1 {
            font-size: 36px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 500;
        }


    }

    #subtitle {
        display: flex;
        gap: 8px;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        svg {
            width: 18px;
            height: 18px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        #author, #time, #times {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        
    }

    
`;
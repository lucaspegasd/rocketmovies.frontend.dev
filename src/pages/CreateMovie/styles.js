import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    overflow-y: hidden;




`;

export const Form = styled.form`
       
    margin: 40px 106px 85px 123px;
    overflow-y: scroll;
    padding-right: 8px;
    height: 401px;


   header {
    display: flex;
    flex-direction: column;
    gap: 24px;
   }

   svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
    }


    header h1 {
        font-size: 36px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Inputs = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 32px;



    #inputs {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        width: 100%;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    h2 {
        color: ${({theme}) => theme.COLORS.TEXT_200};
        font-size: 20px;
        margin-bottom: 24px;
    }

    #tags {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        display: flex;
        gap: 24px;
        padding: 16px 16px 8px 16px;
        border-radius: 10px;

    }

    #buttons {
        display: flex;
        margin-top: 40px;

        gap: 40px;

    }

    #buttons Button {
        padding-top: 17.5px;
        padding-bottom: 17.5px;


    }

    #add {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    #delete {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PINK};

    }
`;
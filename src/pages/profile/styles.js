import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};

    display: flex;
    align-items: center;
  

    padding: 0 124px;
    font-size: 16px;


    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 20px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 64px;

  width: 186px;
  height: 186px;

  > img {
      width: 186px;
      height: 186px;
      border-radius: 50%;
    }


    > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
        display: none
    }

    svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;

export const Form = styled.form`
   max-width: 340px;
   margin: 30px auto 0;

   > div:nth-child(4) {
      margin-top: 24px;
   }
   > div:nth-child(3) {
      margin-top: 8px;
   }
   > div:nth-child(2) {
      margin-top: 8px;
   }
   > div:nth-child(5) {
      margin-top: 8px;
   }

   Button {
    padding-top: 14px;
    padding-bottom: 14px;
   }


`;
import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #efefef;
        --orange: #ed8e53;
        --black: #000000;
        --green: #2a9718;
        --grey: #8d8888;


        --text-label: #050505;

        --text-title: #363F5F;
        --text-body: #969cb3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px ) {
            font-size: 90.75%; // 15px
        }

        @media (max-width: 720px ) {
            font-size: 87.5%; // 14px
        }
    }

    html, body, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        background-color: var(--background);
        padding: 5px;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
        color: var(--black);
    }

    #page-title{
        text-align: center;
    }

    input:focus, textarea:focus, select:focus{
        outline: none;
    }
`;


export const Container = styled.main`
    display: flex;
    gap: 2em;
    width: 90%;
    margin: 0 auto;

    
    @media (max-width: 600px ) {
        flex-direction: column-reverse;
        order: 1;
    }
`;
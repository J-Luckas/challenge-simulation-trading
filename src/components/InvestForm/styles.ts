import { transparentize } from "polished";
import styled from "styled-components";

interface LabelOptionsType {
    readonly isActive: boolean;
}
interface LabelType {
    readonly isWrong: boolean;
}

interface ButtonSubmitType {
    readonly isValidate: boolean;
}

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    max-width: 680px;
    width: 100%;    
    padding: 2.5em 1em;

    @media (max-width: 720px ) {
        padding: 0;
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1.8em;
    margin-top: 2em;

    #reset-simulator-form-mobile {
        display: none;
    }

    .form-group{
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        
        label {
            font-size: 0.9em;
            /* color: var(--text-label); */
            margin-bottom: 0.5em;
            font-weight: bold;
        }

        input {
            border: none;
            background-color: transparent;
            height: 2em;
            border-bottom: 2px solid var(--grey);
            padding: 0.5em;
            color: var(--text-label);                
        }
        small {
            height: 20px;
        }

        .currency-input{
            input {
                width: 90%;
                border: none;
            }
            border-bottom: 2px solid var(--grey);
        }
    }

    .form-group-radio {
        
        display: flex;
        justify-content: space-evenly;
        margin: 0 0 2em 0;
        height: 4em;
        align-items: center;
        background-color: #ffff;

        border: 2px solid var(--black);
        border-radius: 0.5em;
        

        .inner{
            height: 100%;
            width: 2px;
            background-color: var(--black);
        }

        svg{
            margin-right: 0.5em;
        }

        input {
            border: none;
            appearance: none;
            background-color: transparent;

            &:checked {
                background-color: var(--orange);
            }
        }


    }

    button {
        width: 100%;
        border: 2px solid var(--black);
        border-radius:0.8em;
        font-size: 1.5em;
        font-weight: bold;
        padding: 0.8em;
        &:nth-child(1){
            background-color: var(--orange);
            border: none;
        }
    }

    @media (max-width: 600px ) {
        #reset-simulator-form-mobile {
            display: block;
            margin: 2em auto;
        }

        #reset-simulator-form {
            display: none;
        }


    }
`;

export const LabelOptions = styled.label<LabelOptionsType>`

    text-transform: uppercase;
    font-size: 1em;
    font-weight: 500;
    color: ${(props) => props.isActive 
        ? '#ffff' 
        : 'var(--text-label)'};
    cursor: pointer;

    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.isActive 
        ? 'var(--orange)' 
        : 'transparent'};

    &:hover{
        background: ${(props) => !props.isActive && transparentize(0.6, '#ed8e53')};
    }

`;

export const Label = styled.label<LabelType>`
    color: ${(props) => props.isWrong 
        ? '#ff0000' 
        : ''};
`;

export const InfoYieldDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonSubmit = styled.button<ButtonSubmitType>`
    background: ${(props) => props.isValidate 
        ? 'var(--orange)' 
        : 'var(--grey)'};
`;
        
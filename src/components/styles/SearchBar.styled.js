import styled from 'styled-components';

export const SearchBarStyled = styled.div`
    border: 1px solid #D1D5DB;
    border-radius: 5px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 7.5%;
    width: 85%;
    transform: translateY(50%);

    i { 
        color: #9CA3AF;
        margin: 0 .75em;
        width: 5%;
    }

    input {
        width: 70%;
        border: none;
        outline: none;
        color: #6B7280;
        font-size: 1rem;
        height: 100%;
    }

    div {
        width: 25%;
        padding: .25em 1em;
        background-color: #F9FAFB;
        color: #374151;
        text-align: center;
        border-left: 1px solid#D1D5DB;
        cursor: pointer;
    }

    i, input {
        padding: .5em 0;
    }
`
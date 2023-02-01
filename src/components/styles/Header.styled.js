import styled from "styled-components";


export const StyledHeader = styled.div`
    position: relative;
    background-color: #404040;
    background-image: url('/images/header-img.jpg');
    background-size: cover;
    background-position: 0% 20%;
    color: whitesmoke;
    background-blend-mode: overlay;
    padding: 5em 2em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span, 
    .fa-film {
        font-size: 2rem;
        font-weight: bold;
    }

    .fa-film {
        margin-right: .25em;
    }
    nav {
        margin-top: 2em;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: end;
        gap: 1em;
        font-weight: bold;
        letter-spacing: 1px;
    }

    li i {
        margin-right: .25em;
    }

    a {
        color: whitesmoke;
        transition: color 500ms;
    }

    ul a:hover {
        color: #ffbe0b;
    }

    @media (max-width: 450px) {
        padding: 3em 1em 1.5em;
        align-items: center;

        nav {
            margin-top: 0;
        }

        ul {
            font-size: .8rem;
            justify-content: space-between;
            padding: 0;
        }
    }
`


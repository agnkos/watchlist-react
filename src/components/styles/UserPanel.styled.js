import styled from "styled-components";

export const UserPanelStyled = styled.span`
    grid-column: 1 / 3;
    display:flex;
    gap: 2em;
    padding: .5em 0;

    span {
        cursor: pointer;
    }

    i {
        margin-right: .25em;
    }

    i.favorited {
        color: orange;
    }

    @media (max-width: 450px) {
        font-size: .8rem;
        gap: 1em;
    }
`
import styled from "styled-components";

export const ContentContainer = styled.div`
    padding: 2em;
    padding-top: 3em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media (max-width: 450px) {
        padding: 1em;
        padding-top: 2em;
    }
`
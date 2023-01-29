import styled from 'styled-components';

export const MovieCardStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-teplate-rows: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: 1em;
    padding: 2em 0;
    border-bottom: 1.5px solid #E5E7EB;

    &:last-child {
        border: 0;
    }

    img {
        width: 100px;
        max-width: 100px;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    small {
        font-size: .8rem;
        display: flex;
    }

    small img {
        height: 14px;
        width: 14px;
        margin-left: .25em;
        margin-bottom: 2px;
    }

    p {
        font-size: .9rem;
        max-height: 100px;
        overflow: hidden;
    }
`
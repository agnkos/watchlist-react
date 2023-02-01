import styled from 'styled-components';

export const MovieCardStyled = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-teplate-rows: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: 1em;
    padding: 2em 0;
    border-bottom: 1.5px solid #E5E7EB;

    &:last-of-type {
        border: 0;
        padding-bottom: 0;
    }
    .overview {
        grid-column: 2 / 3;
        // grid-row: 1 / 2;
    }
    img {
        width: 100px;
        max-width: 100px;
        grid-row: 1 / 3;
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

    p:last-of-type {
        font-size: .9rem;
    }

    .show {
        margin-left: .5em;
        font-size: .8rem;
        font-style: italic;
        cursor: pointer;
        font-weight: 500;
        color: #9CA3AF;
    }

    @media(max-width: 450px) {
        padding: 1em 0;
        grid-template-rows: repeat(3, auto);
        gap: .5em;

        .overview {
            grid-column: 1 / span 2;
        }

        > div {
            grid-row: 1 / 3;
        }
    }
`
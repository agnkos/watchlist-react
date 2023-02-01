import styled from 'styled-components';

export const ButtonUpStyled = styled.i`
    font-size: 3rem;
    color: #9CA3AF;
    margin-left: auto;
    margin-right: 15px;
    // margin-bottom: 10px;
    position: sticky;
    bottom: 20px;
    cursor: pointer;
    display: ${({ opacity }) => opacity === 1 ? 'block' : 'none'};
    opacity: ${({ opacity }) => opacity || 0};
    transition: opacity 500ms;
`
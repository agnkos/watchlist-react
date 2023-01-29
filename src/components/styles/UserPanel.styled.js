import styled from "styled-components";

export const UserPanelStyled = styled.span`
grid-column: 1 / 3;
display:flex;
gap: 2em;
padding: .5em 0;

i {
    margin-right: .25em;
    cursor: pointer;
}

i.favorited {
    color: orange;
}
`
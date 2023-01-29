import { FooterStyled } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <FooterStyled>
            <p>Built with <a href="https://www.themoviedb.org/" target="_blank">The Movie Database API</a></p>
            <p>Header photo <a
                href="https://unsplash.com/photos/THJJRUhNlEc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                target="_blank">
                by Andre Tan</a></p>
        </FooterStyled>
    )
}
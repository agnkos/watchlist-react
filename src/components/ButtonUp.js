import { useState, useEffect } from 'react';
import { ButtonUpStyled } from './styles/ButtonUp.styled';

export default function ButtonUp() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        function setButtonUp() {
            if (window.scrollY >= 320) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        }
        window.addEventListener('scroll', setButtonUp);

        return function() {
            window.removeEventListener('scroll', setButtonUp);
        }
    }, []);

    function goToTop() {
        window.scrollTo({ top: 0, behaviour: 'smooth' });
    }

    return (
        <>
            <ButtonUpStyled className="fa-solid fa-circle-arrow-up" opacity={opacity} onClick={goToTop}></ButtonUpStyled>
        </>
    )
}
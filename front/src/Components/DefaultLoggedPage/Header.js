import styled from "styled-components";
import { HeaderSection } from "../../Styles/GlobalStyles.js";

export default function Header() {
    const session = JSON.parse(localStorage.getItem('session'));

    return (
        <HeaderSection>
            Bem-vindo(a) {session.socialName}!
        </HeaderSection>
    );
}

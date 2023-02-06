import { Body, Page, MenuWrapper } from "../../Styles/GlobalStyles.js";
import Menu from "./Menu.js";
import Auth from "../../Api/Auth.js";
import Header from "../DefaultLoggedPage/Header.js";

export default function DefaultLoggedPage({ children }) {
    const auth = Auth();

    return (
        <>
            {auth ?
                <Body>
                    <MenuWrapper><Menu /></MenuWrapper>
                    <Page>
                        <Header />
                        <div className="backgroundImage">
                            {children}
                        </div>
                    </Page>
                </Body> :
                <></>}

        </>
    );
}
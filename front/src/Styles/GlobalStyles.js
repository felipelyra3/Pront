import styled from "styled-components";
import Logo from "../Assets/LogoProntWhiteBackground.png";

export const Body = styled.div`
    display: flex;
    height: 100vh;
    padding: 5px 0px 5px 80px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,152,185,1) 0%, rgba(66,178,203,1) 53%, rgba(168,239,255,1) 100%);
`;

export const Page = styled.div`
    height: 100%;
    width: 100%;
    background-color: #F8F8F8;
    font-family: 'Roboto', sans-serif;
    //padding: 80px 24px 24px 24px;
    padding: 24px;
    border-radius: 40px;
    overflow-y:auto;

    /* .backgroundImage {
        background-image: url(${Logo});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        opacity: 0.5;
    } */
`;

export const MenuWrapper = styled.div`
    display: flex;
    //justify-content: space-around;
    justify-content: center;
    flex-direction: column;
    width: 50px;
    height: 80%;
    margin: 80px -5px -5px -70px;
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;

    .susNumberSearch, .cpfSearch {
        display: flex;
        justify-content: center;
        margin: 0px 0px 8px 0px;
    }
`;

export const SearchButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SearchButton = styled.button`
    cursor: pointer;
`;

export const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 80px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,119,144,1) 0%, rgba(185,242,255,1) 0%, rgba(255,255,255,1) 100%);
    border: 1px solid rgba(185,242,255,1);
    border-radius: 20px;
    margin: 24px;
    cursor: pointer;

    :hover {
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,242,255,1) 0%, rgba(158,238,255,1) 0%, rgba(229,250,255,1) 100%);
    }
`;

export const ResetPasswordButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 110px;
    height: 50px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,119,144,1) 0%, rgba(185,242,255,1) 0%, rgba(255,255,255,1) 100%);
    border: 1px solid #0599BA;
    border-radius: 20px;
    margin: 24px;
    cursor: pointer;
    font-size: 12px;

    :hover {
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,242,255,1) 0%, rgba(158,238,255,1) 0%, rgba(229,250,255,1) 100%);
    }
`;

export const OutterFieldset = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 2px solid rgba(3,152,185,1);
    border-radius: 1em;
    margin: -24px 0px 24px 0px;
    padding: 0 1em 1em;
    //background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,242,255,1) 0%, rgba(158,238,255,1) 0%, rgba(229,250,255,1) 100%);
    background: #A0EEFF;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(196,244,255,1) 0%, rgba(159,238,255,1) 0%, rgba(248,248,248,1) 50%);
        margin: 26px 0px 12px 0px;
    }
`;

export const InnerFieldset = styled.fieldset`
    border: 2px solid rgba(66,178,203,1);
    border-radius: 1em;
    margin: -12px 0px 24px 0px;
    padding:0 1em 1em;
    width: fit-content;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(196,244,255,1) 0%, rgba(226,250,255,1) 0%, rgba(229,250,255,1) 100%);

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(196,244,255,1) 0%, rgba(228,250,255,1) 0%, rgba(174,240,255,1) 50%);

        margin: 26px 0px 12px 0px;
    }
`;

export const NewsFieldSet = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 2px solid rgba(3,152,185,1);
    border-radius: 1em;
    margin: -24px 0px 24px 0px;
    padding: 0 1em 1em;
    height: 300px;
    width: 300px;
    background: #A0EEFF;
    overflow-y: auto;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(196,244,255,1) 0%, rgba(159,238,255,1) 0%, rgba(248,248,248,1) 50%);
        margin: 26px 0px 12px 0px;
    }
`;

export const HeaderSection = styled.div`
    //background-color: #e9faff;
    margin: -18px 0px 24px 0px;
    padding: 12px;
    border-radius: 20px;
`;

export const Centeralize = styled.div`
    display: flex;
    justify-content: center;
`;
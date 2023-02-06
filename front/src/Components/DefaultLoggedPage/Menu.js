import styled from "styled-components";
import { BsPersonPlusFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiUserSearchFill, RiLogoutBoxFill } from "react-icons/ri";
import { FaSearchPlus, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logout from "../../Api/Logout";

export default function Menu() {
    const navigate = useNavigate();

    const session = JSON.parse(localStorage.getItem('session'));

    function handleLogout() {
        Logout();
        navigate('/');
    }

    return (
        <>
            <MenuWrapper onClick={() => { navigate('/homepage'); }}><FillHome /></MenuWrapper>

            {session.loginType === "admin" || session.loginType === "doctor" || session.loginType === "nurse" || session.loginType === "recepcionist" ?
                <><MenuWrapper onClick={() => { navigate('/searchbycpf'); }}><UserSearchFill /></MenuWrapper>
                    <MenuWrapper onClick={() => { navigate('/searchbysusnumber'); }}><SearchPlus /></MenuWrapper>
                    <MenuWrapper onClick={() => { navigate('/registeruser'); }}><PersonPlusFill /></MenuWrapper></> :
                <></>}

            {session.loginType === "patient" ?
                <MenuWrapper onClick={() => { navigate('/getpatientinformation'); }}><UserAlt /></MenuWrapper> :
                <></>}

            <MenuWrapper onClick={() => { handleLogout(); }}><LogoutBoxFill /></MenuWrapper>
        </>
    );
}

const MenuWrapper = styled.div`
    margin: 0px 0px 24px 0px;
    padding: 13px;
    height: 50px;
    width: 50px;

    h1 {

    }

    img {
        width: 30px;
        height: 30px;
    }

    :hover {
        cursor: pointer;
        background-color: #047790;
    }
`;

const PersonPlusFill = styled(BsPersonPlusFill)`
    color: #FFFFFF;
    transform: scale(2);    
`;

const FillHome = styled(AiFillHome)`
    color: #FFFFFF;
    transform: scale(2);
`;

const UserSearchFill = styled(RiUserSearchFill)`
    color: #FFFFFF;
    transform: scale(2);
`;

const SearchPlus = styled(FaSearchPlus)`
    color: #FFFFFF;
    transform: scale(2);
`;

const LogoutBoxFill = styled(RiLogoutBoxFill)`
    color: #FFFFFF;
    transform: scale(2);
`;

const UserAlt = styled(FaUserAlt)`
    color: #FFFFFF;
    transform: scale(2);
`;
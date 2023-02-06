import DefaultLoggedPage from "../DefaultLoggedPage/DefaultLoggedPage.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Centeralize, InnerFieldset, SearchButton, SearchButtonWrapper, SearchForm } from "../../Styles/GlobalStyles.js";

export default function BuscaPorCPF() {
    const navigate = useNavigate();
    const [cpfSearch, setCpfSearch] = useState('');

    function handleForm(e) {
        e.preventDefault();

        if (cpfSearch.length !== 11) {
            alert("Entre com um CPF válido");
            return;
        }

        const body = {
            cpfSearch,
            susNumberSearch: false,
            back: "searchbycpf"
        }
        navigate('/getuser', { state: body });
    }

    return (
        <DefaultLoggedPage>
            <Centeralize>
                <InnerFieldset>
                    <legend><div className="legend">Busca por CPF</div></legend>
                    <SearchForm onSubmit={handleForm}>
                        <div className="cpfSearch"><input type="text" id="cpfSearch" placeholder="CPF" value={cpfSearch} onChange={(e) => { setCpfSearch(e.target.value) }} required /></div>
                        <SearchButtonWrapper><SearchButton>Buscar</SearchButton></SearchButtonWrapper>
                    </SearchForm>
                </InnerFieldset>
            </Centeralize>
        </DefaultLoggedPage>
    );
}
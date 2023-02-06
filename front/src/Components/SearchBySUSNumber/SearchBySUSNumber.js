import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Centeralize, InnerFieldset, SearchButton, SearchButtonWrapper, SearchForm } from "../../Styles/GlobalStyles";
import DefaultLoggedPage from "../DefaultLoggedPage/DefaultLoggedPage";

export default function SearchBySUSNumber() {
    const navigate = useNavigate();
    const [susNumberSearch, setSusNumberSearch] = useState('');

    function handleForm(e) {
        e.preventDefault();

        if (susNumberSearch.length < 3) {
            alert("Entre com um número de carterinha do SUS válido");
            return;
        }

        const body = {
            cpfSearch: false,
            susNumberSearch,
            back: "searchbysusnumber"
        }
        navigate('/getuser', { state: body });
    }

    return (
        <DefaultLoggedPage>
            <Centeralize>
                <InnerFieldset>
                    <legend><div className="legend">Busca pela carteirinha do SUS</div></legend>
                    <SearchForm onSubmit={handleForm}>
                        <div className="susNumberSearch"><input type="text" id="susNumberSearch" placeholder="Número da carteidinha do SUS" value={susNumberSearch} onChange={(e) => { setSusNumberSearch(e.target.value) }} required /></div>
                        <SearchButtonWrapper><SearchButton>Buscar</SearchButton></SearchButtonWrapper>
                    </SearchForm>
                </InnerFieldset>
            </Centeralize>
        </DefaultLoggedPage>
    );
}

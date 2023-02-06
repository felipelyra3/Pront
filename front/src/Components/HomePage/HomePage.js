import DefaultLoggedPaged from "../DefaultLoggedPage/DefaultLoggedPage";
import { NewsFieldSet, OutterFieldset } from "../../Styles/GlobalStyles.js";
import styled from "styled-components";
import Banner from "../../Assets/Banner.png";
import Logo from "../../Assets/LogoProntWhiteBackground.png";

export default function HomePage() {
    return (
        <DefaultLoggedPaged>
            <BannerNews>
                <img src={Banner} alt="Pront" />

                <NewsFieldSet>
                    <legend><div className="legend">Novidades</div></legend>

                    <ul>
                        <li>-Adicionada opção de editar informações do paciente</li><br />
                        <li>-Adicionada opção de busca por CPF</li><br />
                        <li>-Adicionada opção de busca pelo número do SUS</li>
                    </ul>
                </NewsFieldSet>

            </BannerNews>

            <OutterFieldset>
                <legend><div className="legend">Pront</div></legend>
                <ProntDescription>
                    <div className="Logo"><img src={Logo} alt="logo" /></div>
                    <p>Pront é uma plataforma com o objetivo de unir prontuários de pacientes do país inteiro em um só local!</p>
                    <p>Por alguns anos, vi minha mãe precisando buscar vários profissionais de saúde. Além de toda
                        pressão psicológica, todos os dias minha mãe precisava carregar uma pasta enorme com todos
                        exames que ela realizou nos últimos anos. Cada ida ao hospital, cada visita a um profissional diferente,
                        lá estava a famosa pasta de exames.<br />
                        Dessa necessidade, acabou surgindo a ideia: E se existisse um sistema unificado e online com
                        todas as informações do paciente onde os médicos e enfermeiros conseguem consultar os
                        exames realizados por aquele paciente? Um verdadeiro prontuário online. E dessa ideia
                        surgiu o Pront.
                    </p>
                    <p>Aqui, um(a) médico(a), enfermeiro(a) ou recepcionista consegue adicionar um(a) paciente
                        que ainda não tenha cadastro no sistema.<br />
                        Uma vez cadastrado, um(a) médico(a), enfermeiro(a) ou recepcionista pode Cadastrar
                        um exame que tenha sido realizado por aquele paciente. Também é possível cadastrar
                        alergias descobertas sobre aquele paciente e até as vacinas tomadas, tendo assim
                        uma carteira de vacinação online também dentro da plataforma!</p>

                    <p>Pacientes também não ficaram de fora, porém, suas contas têm bem menos recursos.
                        Caso sua conta seja do tipo paciente, você conseguirá ver apenas as informações do seu
                        cadastro, sem opção de buscar outros pacientes, cadastrar ou editar.
                    </p>
                    <p> Senhas são geradas automaticamente no cadastro. A combinação será sempre:<br />

                        <center><br /><p><span className="darkblue">Quatro primeiros números do CPF</span> + <span className="darkgreen">segunda e terceira letra do seu nome/nome social</span> + <span className="darkpurple">ano completo do nascimento.</span></p><br /></center>

                        No futuro, haverá o recurso de sempre que o sistema detectar o login pela primeira vez, será
                        preciso criar uma nova senha.<br />
                        Administradores(as), médicos(as), enfermeiros(as) e recepcionistas têm o poder de resetar a senha
                        de usuários, assim, a senha volta a ter o mesmo padrão descrito acima.
                    </p>
                    <p>Todo e qualquer feedback será muito bem-vindo!</p>

                    <p><div className="author">-Felipe Lyra</div></p>
                </ProntDescription>
            </OutterFieldset>
        </DefaultLoggedPaged>
    );
}

const BannerNews = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0px 0px 24px 0px;
`;

const ProntDescription = styled.div`

    .Logo {
        display: flex;
        float: left;
        //margin: 0px 0px 24px 0px;
    }

    img {
        height: 200px;
        width: 200px;
        margin: 0px 8px 0px 0px;
    }

    p {
        margin: 4px 0px 0px 0px;
    }

    .author {
        margin: 12px 0px 0px 0px;
        text-align: right;
        font-style: italic;
    }

    .darkblue {
        color: #0c99b9;
    }

    .darkgreen {
        color: #004eb8;
    }

    .darkpurple {
        color: #4a00b8;
    }
`;
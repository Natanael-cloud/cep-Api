const cepElement = document.querySelector("#cep span");
const ruaElement = document.querySelector("#rua span");
const bairroElement = document.querySelector("#bairro span");
const localidadeElement = document.querySelector("#localidade span");
const ufElement = document.querySelector("#uf span");
const consultarButton = document.querySelector("#consultar");
const inputCep = document.querySelector("#inputCep");

// Elementos de resultado e carregamento
const loadingElement = document.querySelector("#loading");
const resultadosElement = document.querySelector("#resultados");
const resultCep = document.querySelector("#resultCep");
const resultRua = document.querySelector("#resultRua");
const resultBairro = document.querySelector("#resultBairro");
const resultLocalidade = document.querySelector("#resultLocalidade");
const resultUf = document.querySelector("#resultUf");

// Função para buscar os dados de CEP
const consultarCep = () => {
    const cep = inputCep.value.replace(/\D/g, '');  // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
    }

    // Exibir a mensagem de carregamento
    loadingElement.style.display = 'block';
    resultadosElement.style.display = 'none';

    // Fazendo a requisição ao ViaCEP com o CEP inserido
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                cepElement.textContent = "CEP não encontrado!";
                ruaElement.textContent = "-";
                bairroElement.textContent = "-";
                localidadeElement.textContent = "-";
                ufElement.textContent = "-";
            } else {
                cepElement.textContent = data.cep;
                ruaElement.textContent = data.logradouro;
                bairroElement.textContent = data.bairro;
                localidadeElement.textContent = data.localidade;
                ufElement.textContent = data.uf;

                // Atualizando os resultados na lista
                resultCep.textContent = data.cep;
                resultRua.textContent = data.logradouro;
                resultBairro.textContent = data.bairro;
                resultLocalidade.textContent = data.localidade;
                resultUf.textContent = data.uf;
            }

            // Ocultar a mensagem de carregamento e exibir os resultados
            loadingElement.style.display = 'none';
            resultadosElement.style.display = 'block';
        })
        .catch(error => {
            cepElement.textContent = "Erro ao consultar CEP";
            ruaElement.textContent = "-";
            bairroElement.textContent = "-";
            localidadeElement.textContent = "-";
            ufElement.textContent = "-";
            console.error("Erro:", error);

            loadingElement.style.display = 'none';
        });
};

// Evento para o botão consultar
consultarButton.addEventListener("click", consultarCep);

// Carregar a página com campos vazios para o usuário preencher
window.onload = () => {
    cepElement.textContent = "-";
    ruaElement.textContent = "-";
    bairroElement.textContent = "-";
    localidadeElement.textContent = "-";
    ufElement.textContent = "-";
};

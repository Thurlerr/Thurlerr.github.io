// Seleciona elementos
const inputTexto = document.querySelector("#input-texto");
const output = document.querySelector("#output");
const inputProcurar = document.querySelector("#input-procurar");
const inputSubstituir = document.querySelector("#input-substituir");

// Funções para cada exercício
const inverterTexto = (texto) => texto.split("").reverse().join("");

const marcarVogais = (texto) => 
    texto.replace(/[aeiouáéíóúãõâêîôûäëïöüAEIOUÁÉÍÓÚÃÕÂÊÎÔÛÄËÏÖÜ]/g, (vogal) => `<b>${vogal}</b>`);

const contarPalavras = (texto) => {
    const palavras = texto.toLowerCase().match(/\b\w+\b/g) || [];
    const contagem = palavras.reduce((mapa, palavra) => {
        mapa[palavra] = (mapa[palavra] || 0) + 1;
        return mapa;
    }, {});
    let tabela = "<table border='1'><tr><th>Palavra</th><th>Ocorrências</th></tr>";
    Object.entries(contagem).forEach(([palavra, ocorrencias]) => {
        tabela += `<tr><td>${palavra}</td><td>${ocorrencias}</td></tr>`;
    });
    tabela += "</table>";
    return tabela;
};

const maiorOcorrencia = (texto) => {
    const palavras = texto.toLowerCase().match(/\b\w+\b/g) || [];
    const contagem = palavras.reduce((mapa, palavra) => {
        mapa[palavra] = (mapa[palavra] || 0) + 1;
        return mapa;
    }, {});
    let maiorPalavra = "";
    let maiorOcorrencia = 0;
    Object.entries(contagem).forEach(([palavra, ocorrencias]) => {
        if (ocorrencias > maiorOcorrencia) {
            maiorPalavra = palavra;
            maiorOcorrencia = ocorrencias;
        }
    });
    return `A palavra com maior ocorrência é "${maiorPalavra}" e apareceu ${maiorOcorrencia} vezes.`;
};

const substituirTexto = (texto, procurar, substituir) => 
    texto.replace(new RegExp(procurar, "g"), substituir);

const calcularDiasVida = (dataNascimento) => {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    const diffMs = hoje - nascimento;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

const dataPorExtenso = (data) => {
    const [dia, mes, ano] = data.split("/");
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return `${dia} de ${meses[parseInt(mes, 10) - 1]} de ${ano}`;
};

const diferencaSemanas = (data1, data2) => {
    const d1 = new Date(data1);
    const d2 = new Date(data2);
    const diffMs = Math.abs(d2 - d1);
    return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
};

const classificarSenha = (senha) => {
    if (/^[a-z]+$|^[A-Z]+$/.test(senha)) return "Fraca (vermelho)";
    if (/^[a-zA-Z0-9]+$/.test(senha)) return "Moderada (laranja)";
    if (/^[a-zA-Z0-9@#!$%&*()-+=.]+$/.test(senha)) return "Forte (verde)";
    return "Senha inválida";
};

const codificarTENISPOLAR = (texto) => {
    const mapeamento = { T: "P", P: "T", E: "O", O: "E", N: "L", L: "N", I: "A", A: "I", S: "R", R: "S" };
    return texto.replace(/[TENISPOLAR]/gi, (letra) => mapeamento[letra.toUpperCase()] || letra);
};

// Adiciona eventos aos botões
document.querySelector("#btn-inverter").addEventListener("click", () => {
    const texto = inputTexto.value.trim();
    output.innerHTML = texto ? inverterTexto(texto) : "Por favor, insira um texto.";
});

document.querySelector("#btn-marcar-vogais").addEventListener("click", () => {
    const texto = inputTexto.value.trim();
    output.innerHTML = texto ? marcarVogais(texto) : "Por favor, insira um texto.";
});

document.querySelector("#btn-contar-palavras").addEventListener("click", () => {
    const texto = inputTexto.value.trim();
    output.innerHTML = texto ? contarPalavras(texto) : "Por favor, insira um texto.";
});

document.querySelector("#btn-maior-ocorrencia").addEventListener("click", () => {
    const texto = inputTexto.value.trim();
    output.innerHTML = texto ? maiorOcorrencia(texto) : "Por favor, insira um texto.";
});

document.querySelector("#btn-substituir").addEventListener("click", () => {
    const texto = inputTexto.value.trim();
    const procurar = inputProcurar.value.trim();
    const substituir = inputSubstituir.value.trim();
    output.innerHTML = texto && procurar ? substituirTexto(texto, procurar, substituir) : "Por favor, insira o texto e os campos de substituição.";
});

document.querySelector("#btn-dias-vida").addEventListener("click", () => {
    const data = inputTexto.value.trim();
    output.innerHTML = data ? `${calcularDiasVida(data)} dias de vida.` : "Por favor, insira sua data de nascimento (aaaa-mm-dd).";
});

document.querySelector("#btn-data-extenso").addEventListener("click", () => {
    const data = inputTexto.value.trim();
    output.innerHTML = data ? dataPorExtenso(data) : "Por favor, insira a data (dd/mm/aaaa).";
});

document.querySelector("#btn-diferenca-semanas").addEventListener("click", () => {
    const datas = inputTexto.value.split(" ");
    output.innerHTML = datas.length === 2 ? 
        `${diferencaSemanas(datas[0], datas[1])} semanas.` : 
        "Por favor, insira as duas datas separadas por espaço.";
});

document.querySelector("#btn-classificar-senha").addEventListener("click", () => {
    const senha = inputTexto.value.trim();
    output.innerHTML = senha ? classificarSenha(senha) : "Por favor, insira uma senha.";
});

document.querySelector("#btn-tenis-polar").addEventListener("click", () => {
    const texto = inputTexto.value.trim();
    output.innerHTML = texto ? codificarTENISPOLAR(texto) : "Por favor, insira um texto.";
});

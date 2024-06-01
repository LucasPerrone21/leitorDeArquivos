const fs = require("fs");
const arquivo = "./arquivos/texto.txt";

async function contaPalavras(arquivo) {
    return new Promise((resolve, reject) => {
        let palavras = 0;
        const caminhoArquivo = `${arquivo}`;
        const conteudo = fs.readFileSync(caminhoArquivo, "utf-8");
        palavras += conteudo.split(" ").length;
        resolve({ palavras });
    });
}

async function main() {
    const quantidade = await contaPalavras(arquivo);
    console.log(`Quantidade de palavras: ${quantidade.palavras}`);
}

main();

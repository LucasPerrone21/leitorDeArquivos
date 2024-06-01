const fs = require("fs");
const arquivo = "./arquivos/texto.txt";

fs.readFile(arquivo, "utf-8", (err, conteudo) => {
    const quantidade = conteudo.split(" ").length;
    console.log(`Quantidade de palavras: ${quantidade}`);
});

const { exec } = require("child_process");
const path = require("path");

const inputFile = path.join(__dirname, "input.pdf");
const outputFile = path.join(__dirname, "output.pdf");
const userPassword = "senha_visualizacao";
const ownerPassword = "senha_administrador";

// Comando qpdf para proteger o PDF
const command = `qpdf "${inputFile}" --encrypt ${userPassword} ${ownerPassword} 256 --no-warn --permissions none -- "${outputFile}"`;

// Executando o comando
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error("Erro ao proteger o PDF:", stderr);
    return;
  }
  console.log("PDF protegido com sucesso!");
});
"C:\Program Files\qpdf 11.9.1\bin\qpdf.exe" input.pdf --encrypt "" "12345" 256 --modify=none --extract=n -- output.pdf

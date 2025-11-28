const fundo = document.getElementById("fundo");

const btnTemaPreto = document.getElementById("tema-preto-btn");
const btnTemaBranco = document.getElementById("tema-branco-btn");

var tema = localStorage.getItem("tema");
console.log(`Tema selecionado ${tema}`)

const alterarTema = (temaEscolhido) => {
    console.log(`Tema definido como ${tema}`)
    localStorage.setItem("tema", temaEscolhido);
    fundo.className = temaEscolhido;
}

btnTemaBranco.addEventListener("click", () => alterarTema("branco"));
btnTemaPreto.addEventListener("click", () => alterarTema("preto"));

if(!tema){
    alterarTema("branco");
}





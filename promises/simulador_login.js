const USERNAME = "Lucas";
const PASSWORD = "Lucas#113";


const verificarLogin = ((name, password) => {
    return new Promise((resolver, reject) => {
        const sucesso = name == USERNAME && password == PASSWORD;

        if (sucesso) resolver("Usuário logado com sucesso");

        reject("Credencias invalidas");
    });

});

const realizarLogin = async usuario => {
    await verificarLogin(usuario.name, usuario.password)
        .then(resposta => console.log(resposta))
        .catch(erro => console.log(erro));
};

function Usuario(name, password) {
    this.name = name;
    this.password = password;
}

const usuarioVerdadeiro = new Usuario("Lucas", "Lucas#113");
const usuarioFalso = new Usuario("Lucas", "Lucas#1133");

realizarLogin(usuarioVerdadeiro);
realizarLogin(usuarioFalso);


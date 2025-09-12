function veriquePermissaoEmprestimo(salario, prestacao){
    let porMes = salario * 0.2;

    if(porMes < prestacao){
        console.log("Emprestimo não pode ser concedido");
        return;
    }

    console.log("Emprestimo pode ser concebido");

}

veriquePermissaoEmprestimo(1000, 201);
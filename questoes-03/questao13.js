function informarRetornoInvestimento(capitalInicial, tempo, juros){
    return capitalInicial * ( (1 + juros) * tempo);
}

console.log(informarRetornoInvestimento(12, 3, 0.2));
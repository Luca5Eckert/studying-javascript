const elementoContadorVisita = document.getElementById("contador-visita");

var contadorVisita = localStorage.getItem("contador-visita");

const aumentarContador = () => {
    elementoContadorVisita.textContent = ++contadorVisita;
    localStorage.setItem("contador-visita", contadorVisita);
};

aumentarContador();
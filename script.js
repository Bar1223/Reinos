// Variables globales para el estado del juego
let puntuaciones = {
    matematicas: 0,
    ciencias: 0,
    espanol: 0,
    historia: 0,
};

let reinoActual = "";
let desafioActual = 0;

// Contenidos de los reinos y desafíos
const reinos = {
    matematicas: {
        titulo: "Reino de las Matemáticas",
        descripcion: "Explora los misterios de las fracciones, geometría y álgebra.",
        desafios: [
            {
                pregunta: "Resuelve: 3/4 + 2/5 = ?",
                opciones: ["19/20", "23/20", "7/9"],
                respuesta: 1,
                explicacion: "La suma de fracciones se realiza encontrando un denominador común.",
            },
            {
                pregunta: "Encuentra el área de un triángulo con base 6 cm y altura 4 cm.",
                opciones: ["12 cm²", "24 cm²", "10 cm²"],
                respuesta: 0,
                explicacion: "El área de un triángulo se calcula como base × altura / 2.",
            },
        ],
    },
    ciencias: {
        titulo: "Reino de las Ciencias",
        descripcion: "Descubre los secretos de la física, química y biología.",
        desafios: [
            {
                pregunta: "¿Cuál es el símbolo químico del agua?",
                opciones: ["O2", "H2O", "CO2"],
                respuesta: 1,
                explicacion: "H2O representa dos átomos de hidrógeno y uno de oxígeno.",
            },
        ],
    },
    espanol: {
        titulo: "Reino de Español",
        descripcion: "Explora las reglas gramaticales y la riqueza del lenguaje.",
        desafios: [
            {
                pregunta: "¿Cuál es un sinónimo de 'felicidad'?",
                opciones: ["Tristeza", "Alegría", "Odio"],
                respuesta: 1,
                explicacion: "Alegría es un sinónimo directo de felicidad.",
            },
        ],
    },
    historia: {
        titulo: "Reino de Historia",
        descripcion: "Revive momentos clave del pasado.",
        desafios: [
            {
                pregunta: "¿En qué año llegó Colón a América?",
                opciones: ["1492", "1500", "1498"],
                respuesta: 0,
                explicacion: "Cristóbal Colón llegó a América en 1492.",
            },
        ],
    },
};

// Función para mostrar la introducción
function mostrarHistoria() {
    document.getElementById("introduccion").classList.add("hidden");
    document.getElementById("primera-parte").classList.remove("hidden");
}

// Función para mostrar el menú de reinos
function mostrarReinos() {
    document.getElementById("primera-parte").classList.add("hidden");
    document.getElementById("menu-reinos").classList.remove("hidden");
}

// Función para iniciar un reino
function iniciarReino(reino) {
    reinoActual = reino;
    desafioActual = 0;
    mostrarDesafio();
}

// Función para mostrar un desafío
function mostrarDesafio() {
    const reino = reinos[reinoActual];
    const desafio = reino.desafios[desafioActual];

    document.getElementById("titulo-reino").innerText = reino.titulo;
    document.getElementById("descripcion-reino").innerText = desafio.pregunta;

    const opciones = desafio.opciones.map(
        (opcion, index) =>
            `<button onclick="verificarRespuesta(${index})">${opcion}</button>`
    );

    document.getElementById("opciones").innerHTML = opciones.join("");
    document.getElementById("menu-reinos").classList.add("hidden");
    document.getElementById("desafios").classList.remove("hidden");
}

// Función para verificar respuesta
function verificarRespuesta(opcionElegida) {
    const desafio = reinos[reinoActual].desafios[desafioActual];

    if (opcionElegida === desafio.respuesta) {
        alert("¡Correcto!");
        puntuaciones[reinoActual]++;
    } else {
        alert(`Incorrecto. ${desafio.explicacion}`);
    }

    desafioActual++;
    if (desafioActual < reinos[reinoActual].desafios.length) {
        mostrarDesafio();
    } else {
        alert(`Has completado el ${reinos[reinoActual].titulo}.`);
        volverAlMenu();
    }

    actualizarPuntuaciones();
}

// Función para volver al menú
function volverAlMenu() {
    document.getElementById("desafios").classList.add("hidden");
    document.getElementById("menu-reinos").classList.remove("hidden");
}

// Actualizar puntuaciones en el pie
function actualizarPuntuaciones() {
    document.getElementById("puntos-matematicas").innerText = `Matemáticas: ${puntuaciones.matematicas}`;
    document.getElementById("puntos-ciencias").innerText = `Ciencias: ${puntuaciones.ciencias}`;
    document.getElementById("puntos-espanol").innerText = `Español: ${puntuaciones.espanol}`;
    document.getElementById("puntos-historia").innerText = `Historia: ${puntuaciones.historia}`;
}


Bienvenida(); //

function Bienvenida() {
    // Verificar si ya hay un nombre guardado en el almacenamiento
    let nombre = localStorage.getItem("nombre");

    if (!nombre) {
        // Pedir el nombre si no está almacenado
        nombre = prompt("Por favor, ingresa tu nombre:");
        if (nombre) {
            // Guardar el nombre en localStorage
            localStorage.setItem("nombre", nombre);
            alert(`Hola ${nombre}, bienvenidx a la Asociación Civil de Disciplinas Orientales`);
        } else {
            alert("Hola, bienvenidx a la Asociación Civil de Disciplinas Orientales");
        }
    } else {
        // Si ya existe un nombre en localStorage
        alert(`Hola de nuevo, ${nombre}, bienvenidx a la Asociación Civil de Disciplinas Orientales`);
    }

}

// Llamar a la función
Bienvenida();



//Se agrega en cada disciplina la descripcion si se hace click en boton Ver Descripcion
   
 // Objeto con las descripciones de las disciplinas
 const descripciones = {
    ChiKung: "Cultiva, equilibra y dirige la energía vital en el cuerpo para mejorar la salud, la vitalidad y el bienestar general.",
    kempo: "Se caracteriza por su enfoque en técnicas de golpeo, patadas, bloqueos y movimientos fluidos.",
    yoga: "Tiene como objetivo promover la salud física, mental y espiritual.",
    yogadeportivo: "Combina posturas (asanas), técnicas de respiración (pranayama) y métodos de relajación diseñados para aumentar la fuerza, flexibilidad, resistencia y enfoque mental."
};

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los botones con la clase .addDescripcion
    const botones = document.querySelectorAll(".addDescripcion");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Seleccionar el contenedor de la disciplina
            const disciplina = boton.parentElement;

            // Obtener la clase de la disciplina (ejemplo: ChiKung, kempo)
            const clase = disciplina.classList[0];

            // Buscar si ya existe un párrafo de descripción
            const descripcionParrafo = disciplina.querySelector(".Descripcion");

            if (descripcionParrafo) {
                // Si la descripción ya existe, se elimina
                descripcionParrafo.remove();
            } else {
                // Si no existe, se crea y se añade
                const nuevoParrafo = document.createElement("p");
                nuevoParrafo.textContent = descripciones[clase];
                nuevoParrafo.classList.add("Descripcion");

                // Agregar el párrafo al contenedor de la disciplina
                disciplina.appendChild(nuevoParrafo);
            }
        });
    });
});

//Se agrega en cada disciplina la descripcion si se hace click en boton Ver Descripcion
   
 // Objeto con las descripciones de las disciplinas
 const descripciones1 = {
    Masajes: "Tratamientos para la ansiedad,constipacion,estres,cefaleas,migrañas,etc.",
    Acupuntura: "Tratamientos para la ansiedad,constipacion,estres,cefaleas,migrañas,etc.",
    Auriculoterapia: "Tratamientos para la ansiedad,constipacion,estres,cefaleas,migrañas,etc.",
    AsesoriaAlimentacion: "Desintoxicacion con hierbas y alimentacion natural."
};

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los botones con la clase .addDescripcion
    const botones = document.querySelectorAll(".addDescripcion1");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Seleccionar el contenedor de la disciplina
            const tratamiento = boton.parentElement;

            // Obtener la clase de la disciplina (ejemplo: ChiKung, kempo)
            const clase = tratamiento.classList[0];

            // Buscar si ya existe un párrafo de descripción
            const descripcionParrafo = tratamiento.querySelector(".Descripcion1");

            if (descripcionParrafo) {
                // Si la descripción ya existe, se elimina
                descripcionParrafo.remove();
            } else {
                // Si no existe, se crea y se añade
                const nuevoParrafo = document.createElement("p");
                nuevoParrafo.textContent = descripciones1[clase];
                nuevoParrafo.classList.add("Descripcion1");

                // Agregar el párrafo al contenedor de la disciplina
                tratamiento.appendChild(nuevoParrafo);
            }
        });
    });
});


//------------------------------------------------------------------------



//Movimientos para los divs 

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los divs en la página
    const divs = document.querySelectorAll('div');

    // Función para agregar movimiento
    function agregarMovimiento(event) {
        const div = event.target;
        div.style.transition = 'transform 0.3s ease'; // Animación suave
        div.style.transform = 'translateY(-10px)'; // Mueve hacia arriba
    }

    // Función para quitar el movimiento
    function quitarMovimiento(event) {
        const div = event.target;
        div.style.transition = 'transform 0.3s ease';
        div.style.transform = 'translateY(0)'; // Vuelve al estado original
    }

    // Añadimos los eventos a cada div
    divs.forEach(function(div) {
        div.addEventListener('mouseover', agregarMovimiento);
        div.addEventListener('mouseout', quitarMovimiento);
    });
});

// se inicia  el array de usuarios desde localStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Función para registrar un nuevo usuario
function registrarUsuario() {
    // Si ya existe un nombre en localStorage, se usa ese
    const nombreGuardado = localStorage.getItem("nombre");

    if (nombreGuardado) {
        alert(`¡Bienvenido nuevamente, ${nombreGuardado}!`);
        // Agregar al array de usuarios si no está previamente registrado
        const usuarioExistente = usuarios.find(usuario => usuario.nombre === nombreGuardado);
        if (!usuarioExistente) {
            const nuevoUsuario = {
                nombre: nombreGuardado,
                fechaIngreso: new Date().toLocaleString()
            };
            usuarios.push(nuevoUsuario);
            guardarUsuarios();
        }
    } else {
        // Solicita el nombre si no está guardado
        const nombre = prompt("Por favor, ingrese su nombre:");
        if (nombre) {
            // Guarda el nombre en localStorage
            localStorage.setItem("nombre", nombre);

            // Crea un objeto de usuario y lo agrega al array
            const nuevoUsuario = {
                nombre: nombre,
                fechaIngreso: new Date().toLocaleString()
            };
            usuarios.push(nuevoUsuario);
            guardarUsuarios();

            alert(`¡Bienvenido, ${nombre}!`);
        } else {
            alert("No ingresaste un nombre. Intenta nuevamente.");
        }
    }
}

// Función para guardar el array de usuarios en localStorage
function guardarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log("Usuarios registrados:", usuarios);
}

// Ejecuta cuando se carga la página
window.onload = function() {
    registrarUsuario();
};
function Bienvenida(saludo){
    alert("Hola Bienvenidx a Asociacion Civil de Disciplinas Orientales ")

}



Bienvenida()

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

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los divs con la clase "disciplinas"
    const disciplinasDivs = document.querySelectorAll('.disciplinas');
    
    // Función para agregar movimiento
    function agregarMovimiento(event) {
        // Este es el div que tiene la clase "disciplinas"
        const div = event.target;

        // Aplicamos un efecto de movimiento usando transform
        div.style.transition = 'transform 0.3s ease'; // Asegura una animación suave
        div.style.transform = 'translateY(-10px)'; // Desplaza el div hacia arriba al pasar el mouse
    }

    // Función para quitar el movimiento
    function quitarMovimiento(event) {
        const div = event.target;
        div.style.transition = 'transform 0.3s ease'; // La transición sigue siendo suave
        div.style.transform = 'translateY(0)'; // Vuelve al lugar original
    }

    // Recorremos todos los divs con la clase "disciplinas"
    disciplinasDivs.forEach(function(div) {
        // Añadimos los eventos "mouseover" y "mouseout" a cada div
        div.addEventListener('mouseover', agregarMovimiento);
        div.addEventListener('mouseout', quitarMovimiento);
    });
});
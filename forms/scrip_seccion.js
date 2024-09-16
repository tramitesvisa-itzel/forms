// #Visualización Condicional (Información de Renovación): Si el bloque de "Información Para Renovación" debe aparecer solo cuando se selecciona la opción "Renovación" en el select de "Tipo de Solicitud", necesitarás agregar un script de JavaScript para manejar esta visualización condicional. Algo como:

document.getElementById('tipo_solicitud').addEventListener('change', function () {
    var renovacionSection = document.querySelector('.section_renovacion');
    if (this.value === 'renovacion') {
        renovacionSection.style.display = 'block';
    } else {
        renovacionSection.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const estadoCivilRadios = document.getElementsByName('estado_civil');

    const sectionCasado = document.querySelector('.section_casado');
    const sectionDivorciado = document.querySelector('.section_divorciado');
    const sectionUnionLibre = document.querySelector('.section_union_libre');

    estadoCivilRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'Casado') {
                sectionCasado.style.display = 'block';
                sectionDivorciado.style.display = 'none';
                sectionUnionLibre.style.display = 'none';
            } else if (this.value === 'Divorciado') {
                sectionCasado.style.display = 'none';
                sectionDivorciado.style.display = 'block';
                sectionUnionLibre.style.display = 'none';
            } else if (this.value === 'Unión Libre') {
                sectionCasado.style.display = 'none';
                sectionDivorciado.style.display = 'none';
                sectionUnionLibre.style.display = 'block';
            } else {
                sectionCasado.style.display = 'none';
                sectionDivorciado.style.display = 'none';
                sectionUnionLibre.style.display = 'none';
            }
        });
    });
});





// #botones siguiente,atras de secciones todas iguales 
type = "module" >
    document.addEventListener("DOMContentLoaded", () => {
        let currentSection = 0;
        const sections = document.querySelectorAll(".section");
        const prevButton = document.querySelector("#prev");
        const nextButton = document.querySelector("#next");

        function showSection(index) {
            sections.forEach((section, i) => {
                section.classList.toggle("active", i === index);
            });
            prevButton.style.display = index === 0 ? "none" : "inline";
            nextButton.style.display = index === sections.length - 1 ? "none" : "inline";
        }

        prevButton.addEventListener("click", () => {
            if (currentSection > 0) {
                currentSection--;
                showSection(currentSection);
            }
        });

        nextButton.addEventListener("click", () => {
            if (currentSection < sections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        });

        showSection(currentSection);
    });


//  <!-- Información Adicional -->
// Para hacer que la sección div  con la clase section_tiene_familiares_estados_unidos_si se muestre solo cuando se seleccione la opción "Si" en el <select> correspondiente, puedes usar un poco de JavaScript. Aquí te dejo un ejemplo de cómo podrías implementar esto:

function toggleSection(selectId, valueToShow, sectionClass) {
    const selectElement = document.getElementById(selectId);
    const sectionElement = document.querySelector(`.${sectionClass}`);
    sectionElement.style.display = selectElement.value === valueToShow ? 'block' : 'none';
}

function toggleSectionRadio(radioName, valueToShow, sectionClass) {
    const radios = document.getElementsByName(radioName);
    const sectionElement = document.querySelector(`.${sectionClass}`);
    radios.forEach(radio => {
        if (radio.checked && radio.value === valueToShow) {
            sectionElement.style.display = 'block';
        } else if (radio.checked) {
            sectionElement.style.display = 'none';
        }
    });
}

// <!-- Script para manejar la lógica de la escolaridad y el empleo actual -->

document.addEventListener("DOMContentLoaded", function () {
    // Manejo de la lógica de escolaridad
    document.getElementById("escolaridad").addEventListener("change", function () {
        var seleccion = this.value;
        var camposEscolaridad = document.getElementById("campos_escolaridad");

        if (seleccion !== "") {
            camposEscolaridad.style.display = "block";
        } else {
            camposEscolaridad.style.display = "none";
        }
    });

    // Manejo de la lógica de empleo actual
    document.getElementById("ocupacion_actual_empleo").addEventListener("change", function () {
        var seleccion = this.value;
        var camposEmpleoActual = document.getElementById("campos_empleo_actual");

        if (seleccion === "empleado" || seleccion === "freelance" || seleccion === "estudiante" || seleccion === "ama_de_casa" || seleccion === "jubilado" || seleccion === "autonomo") {
            camposEmpleoActual.style.display = "block";
        } else {
            camposEmpleoActual.style.display = "none";
        }
    });
});











// document.getElementById('next').addEventListener('click', function () {
//     const currentSection = document.querySelector('.section.active');
//     const nextSection = currentSection.nextElementSibling;
//     if (nextSection) {
//         currentSection.classList.remove('active');
//         nextSection.classList.add('active');
//         document.getElementById('prev').style.display = 'block';
//         if (!nextSection.nextElementSibling) {
//             this.style.display = 'none';
//             document.getElementById('submit').style.display = 'block';
//         }
//     }
// });

// document.getElementById('prev').addEventListener('click', function () {
//     const currentSection = document.querySelector('.section.active');
//     const prevSection = currentSection.previousElementSibling;
//     if (prevSection) {
//         currentSection.classList.remove('active');
//         prevSection.classList.add('active');
//         document.getElementById('next').style.display = 'block';
//         document.getElementById('submit').style.display = 'none';
//         if (!prevSection.previousElementSibling) {
//             this.style.display = 'none';
//         }
//     }
// });

// document.getElementById('tipo_solicitud').addEventListener('change', function () {
//     const tipoSolicitud = this.value;
//     if (tipoSolicitud === 'renovacion') {
//         document.querySelector('.section_renovacion').style.display = 'block';
//     } else {
//         document.querySelector('.section_renovacion').style.display = 'none';
//     }
// });
// </script>

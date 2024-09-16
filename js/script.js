document.getElementById('btn-continuar').addEventListener('click', function(event) {
    var checkbox = document.getElementById('check');
    
    if (!checkbox.checked) {
        alert('Debes aceptar los términos para continuar.');
        event.preventDefault(); // Evita la acción predeterminada si el checkbox no está marcado.
    } else {
        window.location.href = "forms/form.html"; // Cambia la ruta según sea necesario.
    }
});
// document.getElementById('btn-continuar').addEventListener('click', function(event) {
//     var checkbox = document.getElementById('check');
    
//     if (!checkbox.checked) {
//         alert('Debes aceptar los términos para continuar.');
//         event.preventDefault(); // Evita la acción predeterminada si el checkbox no está marcado.
//     } else {
//         window.location.href = "https://tramitesvisa-itzel.github.io/formulario/"; // Cambia la ruta según sea necesario.
//     }
// });

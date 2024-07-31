// Obtener el elemento canvas y su contexto
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Limpiar el canvas para asegurarse de que no haya gráficos antiguos
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Eliminar cualquier dibujo del canvas
// (Este paso es opcional si solo deseas asegurarte de que no haya gráficos visibles)

// Manejar la visibilidad del campo de detalles
document.getElementById('service').addEventListener('change', function() {
    const detailsContainer = document.getElementById('details-container');
    if (this.value === 'otros') {
        detailsContainer.style.display = 'block';
    } else {
        detailsContainer.style.display = 'none';
    }
});

// Manejar el envío del formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value;
    const dateTime = document.getElementById('dateTime').value;
    const payment = document.getElementById('payment').value;

    // Mostrar una alerta con la información del formulario
    alert(`Reserva realizada con éxito:\nNombre: ${name}\nEmail: ${email}\nServicio: ${service}\nDetalles: ${details}\nFecha y Hora: ${dateTime}\nMétodo de pago: ${payment}`);
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('consultaForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const consulta = document.getElementById('consulta');

        if (nombre.value.trim() === "") {
            nombre.classList.add('is-invalid');
            isValid = false;
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

    

        if (consulta.value.trim() === "") {
            consulta.classList.add('is-invalid');
            isValid = false;
        } else {
            consulta.classList.remove('is-invalid');
            consulta.classList.add('is-valid');
        }

        if (isValid) {
            alert('Formulario enviado correctamente');
            form.submit();
        }
    });
});

function openModal(tipo) {
    const modal = document.getElementById('reservaModal');
    const terapiaFields = document.getElementById('terapiaFields');
    const publicidadFields = document.getElementById('publicidadFields');
    const modalTitle = document.getElementById('modalTitle');
    const tipoReserva = document.getElementById('tipoReserva');
    
    modal.style.display = 'block';
    tipoReserva.value = tipo;
    
    if (tipo === 'terapia') {
        modalTitle.textContent = 'Reservar Sesión de Terapia';
        terapiaFields.style.display = 'block';
        publicidadFields.style.display = 'none';
    } else if (tipo === 'publicidad') {
        modalTitle.textContent = 'Solicitar Colaboración';
        terapiaFields.style.display = 'none';
        publicidadFields.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('reservaModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('reservaModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('reservaForm');
    const formData = new FormData(form);
    let reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    reservas.push({
        tipo: formData.get('tipoReserva'),
        datos: Object.fromEntries(formData),
        fecha: new Date().toISOString()
    });
    localStorage.setItem('reservas', JSON.stringify(reservas));
    alert('¡Gracias! Tu solicitud ha sido registrada. Pronto nos pondremos en contacto contigo.');
    form.reset();
    closeModal();
}

let currentModalType = 'therapy';

function openModal(type) {
    currentModalType = type;
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalTitle');
    const therapyFields = document.getElementById('therapyFields');
    const advertisingFields = document.getElementById('advertisingFields');
    
    if (type === 'therapy') {
        modalTitle.textContent = 'Agendar Sesión';
        therapyFields.style.display = 'block';
        advertisingFields.style.display = 'none';
    } else {
        modalTitle.textContent = 'Publicidad & Colaboraciones';
        therapyFields.style.display = 'none';
        advertisingFields.style.display = 'block';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.getElementById('bookingForm').reset();
}

function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    let message = '';
    
    if (currentModalType === 'therapy') {
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const reason = document.getElementById('reason').value;
        
        message = `Nueva reserva de terapia:\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nFecha: ${date}\nHora: ${time}\nMotivo: ${reason}`;
    } else {
        const instagramUser = document.getElementById('instagramUser').value;
        const collaborationDetails = document.getElementById('message').value;
        
        message = `Nueva solicitud de publicidad:\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nUsuario Instagram: ${instagramUser}\nDetalles: ${collaborationDetails}`;
    }
    
    // Simular envío (en producción, esto iría a un servidor)
    console.log(message);
    
    // Mostrar confirmación
    alert('¡Solicitud enviada! Te contactaremos pronto.');
    
    closeModal();
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

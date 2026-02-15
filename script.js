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

function showContacto() {
    const contactoDiv = document.createElement('div');
    contactoDiv.id = 'contactoModal';
    contactoDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 2000; text-align: center; max-width: 400px;">
            <h2 style="font-family: 'Playfair Display', serif; color: #333; margin-bottom: 2rem;">Contactame</h2>
            <div style="display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 1.5rem;">
                <a href="https://wa.me/541137796812" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #25D366; color: white; border-radius: 50%; text-decoration: none; font-size: 1.5rem; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    WhatsApp
                </a>
                <a href="https://instagram.com/martinezbuffaok" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #E4405F; color: white; border-radius: 50%; text-decoration: none; font-size: 1.5rem; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    Instagram
                </a>
            </div>
            <p style="color: #666; margin-bottom: 1.5rem; font-size: 0.95rem;">Elige tu medio de contacto preferido</p>
            <button onclick="cerrarContacto()" style="background: #f4a6c1; color: white; border: none; padding: 0.8rem 2rem; border-radius: 50px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#e88ba8'" onmouseout="this.style.background='#f4a6c1'">Cerrar</button>
        </div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1999;" onclick="cerrarContacto()"></div>
    `;
    document.body.appendChild(contactoDiv);
}

function cerrarContacto() {
    const contactoModal = document.getElementById('contactoModal');
    if (contactoModal) {
        contactoModal.remove();
    }
}

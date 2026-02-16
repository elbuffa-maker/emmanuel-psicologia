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
    // Formspree maneja el envío automáticamente
    // Solo guardamos en localStorage como respaldo
    const form = document.getElementById('reservaForm');
    const formData = new FormData(form);
    let reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    reservas.push({
        tipo: formData.get('tipoReserva'),
        datos: Object.fromEntries(formData),
        fecha: new Date().toISOString()
    });
    localStorage.setItem('reservas', JSON.stringify(reservas));
}

function showContacto() {
    const contactoDiv = document.createElement('div');
    contactoDiv.id = 'contactoModal';
    contactoDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 2000; text-align: center; max-width: 400px;">
            <h2 style="font-family: 'Playfair Display', serif; color: #333; margin-bottom: 2rem;">Contactame</h2>
            <div style="display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 1.5rem;">
                <a href="https://wa.me/541137796812" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #25D366; color: white; border-radius: 50%; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.05 22l6.03-1.98C10.19 21.89 11.06 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.89 0-1.76-.14-2.6-.4l-.18-.06-1.88.62.64-1.92-.08-.19C4.86 16.55 4 14.35 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.89-9.01c-.18 0-.33.15-.33.33v1.62c0 .18.15.33.33.33h.67c.18 0 .33-.15.33-.33v-1.62c0-.18-.15-.33-.33-.33h-.67zm-3.3 0c-.18 0-.33.15-.33.33v1.62c0 .18.15.33.33.33h.67c.18 0 .33-.15.33-.33v-1.62c0-.18-.15-.33-.33-.33h-.67zm3.3-1.62c-.18 0-.33.15-.33.33v.67c0 .18.15.33.33.33h.67c.18 0 .33-.15.33-.33v-.67c0-.18-.15-.33-.33-.33h-.67zm-3.3 0c-.18 0-.33.15-.33.33v.67c0 .18.15.33.33.33h.67c.18 0 .33-.15.33-.33v-.67c0-.18-.15-.33-.33-.33h-.67z"/></svg>
                </a>
                <a href="https://instagram.com/martinezbuffaok" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #E4405F; color: white; border-radius: 50%; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
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

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
                <a href="https://wa.me/541137796812" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #25D366; color: white; border-radius: 50%; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.493.821-2.712 2.306-2.712 4.661 0 1.414.505 2.755 1.43 3.885L5 21l4.248-1.11c1.053.572 2.215.886 3.510.886 4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
                </a>
                <a href="https://instagram.com/martinezbuffaok" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #E4405F; color: white; border-radius: 50%; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
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

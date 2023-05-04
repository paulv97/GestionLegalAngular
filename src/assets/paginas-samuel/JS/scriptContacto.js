function validarFormulario() {
    const nombre = document.getElementById("nombreC").value.trim();
    const email = document.getElementById("emailC").value.trim();
    const telefono = document.getElementById("telefonoC").value.trim();
    const mensaje = document.getElementById("mensajeC").value.trim();
  
    // Validar que los campos no estén vacíos
    if (!nombre || !email || !telefono || !mensaje) {
      alert("Por favor complete todos los campos.");
      return;
    }
  
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return;
    }
  
    // Validar formato de teléfono
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
      alert("Por favor ingrese un número de teléfono válido.");
      return;
    }
  
    // Enviar formulario si todos los campos son válidos
    alert("Formulario enviado correctamente.");
    document.querySelector("form").reset();
  }
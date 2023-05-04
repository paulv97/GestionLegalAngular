const imagenLike = document.getElementById("megusta");
const Nlikes = document.getElementById("Nmegusta");

const imagenDislike = document.getElementById("nomegusta");
const Ndislikes = document.getElementById("Nnomegusta");

imagenLike.addEventListener("click", function() {
  // Obtener el valor actual del likes y sumar 1
  let valorActual = parseInt(Nlikes.innerHTML);
  let nuevoValor = valorActual + 1;
  // Asignar el nuevo valor al contador
  Nlikes.innerHTML = nuevoValor;
});

imagenDislike.addEventListener("click", function() {
  // Obtener el valor actual del contador y sumar 1
  let valorActual = parseInt(Ndislikes.innerHTML);
  let nuevoValor = valorActual + 1;
  // Asignar el nuevo valor al contador
  Ndislikes.innerHTML = nuevoValor;
});


function validarFormulario() {
    
    const comentario = document.getElementById("comentarioBI").value.trim();
    const nombre = document.getElementById("nombreBI").value.trim();
    const email = document.getElementById("emailBI").value.trim();
  
    // Validar que los campos no estén vacíos
    if (!nombre || !email || !comentario) {
      alert("Por favor complete todos los campos.");
      return;
    }
  
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return;
    }
    
    // Enviar formulario si todos los campos son válidos
    alert("Comentario enviado correctamente.");
    document.querySelector("form").reset();
  }

  
  const comentarios = [
    {
        img:"../Imagen/usuario.svg",
        autor: "Autor1",
        fecha: "Abril 22, 2023 11:52:12 PM",
        coment: "Contenido del comentario, este es un excelnete blog.........................",

    },
    {
      img:"../Imagen/usuario.svg",
      autor: "Autor 2",
      fecha: "Abril 22, 2023 11:52:12 PM",
      coment: "Contenido del comentario, este es un excelnete blog.........................",

  },

  {
    img:"../Imagen/usuario.svg",
    autor: "Autor X",
    fecha: "Abril 22, 2023 11:52:12 PM",
    coment: "Contenido del comentario, este es un excelnete blog.........................",

},
]

let comment = document.getElementById("seccionComentarios");

comentarios.map ((x) =>{
  comment.innerHTML += `
  <div class="comment">
  <div class="comment-header">
    <img src="${x.img}" alt="Avatar del autor">
    <h4 class="comment-author">${x.autor}</h4>
    <span class="comment-date">${x.fecha}</span>
  </div>
  <div class="comment-body">
    <p>${x.coment}</p>
  </div>
</div>
  `;
}

);
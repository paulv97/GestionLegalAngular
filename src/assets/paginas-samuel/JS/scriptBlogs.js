const blogs = [
  {
      autor: "Autor1",
      titulo: "Blog post Title 1",
      img:"../Imagen/imagenBlog.jpg",
      fecha: "Abril 22, 2023 11:52:12 PM",
  },

  {
      autor: "Autor2",
      titulo: "Blog post Title 2",
      img:"../Imagen/imagenBlog2.webp",
      fecha: "Abril 22, 2023 11:52:12 PM",
  },

  {
    autor: "Autor3",
    titulo: "Blog post Title 3",
    img:"../Imagen/imagenBlog.jpg",
    fecha: "Abril 22, 2023 11:52:12 PM",
  },

  {
      autor: "Autor4",
      titulo: "Blog post Title 4",
      img:"../Imagen/imagenBlog2.webp",
      fecha: "Abril 22, 2023 11:52:12 PM",
  },
  {
    autor: "Autor5",
    titulo: "Blog post Title 5",
    img:"../Imagen/imagenBlog.jpg",
    fecha: "Abril 22, 2023 11:52:12 PM",
  },

  {
    autor: "Autor6",
    titulo: "Blog post Title 6",
    img:"../Imagen/imagenBlog2.webp",
    fecha: "Abril 22, 2023 11:52:12 PM",
  },

];

let card = document.getElementById("seccionBlogs");

blogs.map ((x) =>{
  card.innerHTML += `
      <div class="card">
      <h2>${x.autor} - ${x.titulo}</h2>
      <img src="${x.img}" alt="Descripción de la imagen 1">
      <p>${x.fecha}</p>
      <button class="card-button">
          <a href="BlogIndividual.html">Ver</a>
      </button>
      
      </div> 
  `;
}

);

let searchInput = document.getElementById("buscarBlog");

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let searchValue = event.target.value.toLowerCase();
        let cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            let cardTitle = card.querySelector('h2').textContent.toLowerCase();
            if (cardTitle.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
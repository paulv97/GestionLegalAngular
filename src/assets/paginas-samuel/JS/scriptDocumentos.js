const documentos = [
    {
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna euismod, pretium lacus et, bibendum velit." +
        "Duis at ante lectus. Sed porttitor, odio ac lobortis gravida, sapien eros sodales odio, vel luctus libero arcu at mi." +
        "Nulla facilisi.",
        titulo: "Document Title 1",
        fecha: "Abril 22, 2023 11:52:12 PM",
    },
  
    {
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna euismod, pretium lacus et, bibendum velit." +
        "Duis at ante lectus. Sed porttitor, odio ac lobortis gravida, sapien eros sodales odio, vel luctus libero arcu at mi." +
        "Nulla facilisi.",
        titulo: "Document Title 2",
        fecha: "Abril 22, 2023 11:52:12 PM",
    },
  
    {
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna euismod, pretium lacus et, bibendum velit." +
        "Duis at ante lectus. Sed porttitor, odio ac lobortis gravida, sapien eros sodales odio, vel luctus libero arcu at mi." +
        "Nulla facilisi.",
        titulo: "Document Title 3",
        fecha: "Abril 22, 2023 11:52:12 PM",
    },
  
    {
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna euismod, pretium lacus et, bibendum velit." +
        "Duis at ante lectus. Sed porttitor, odio ac lobortis gravida, sapien eros sodales odio, vel luctus libero arcu at mi." +
        "Nulla facilisi.",
        titulo: "Document Title 4",
        fecha: "Abril 22, 2023 11:52:12 PM",
    },
    {
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna euismod, pretium lacus et, bibendum velit." +
        "Duis at ante lectus. Sed porttitor, odio ac lobortis gravida, sapien eros sodales odio, vel luctus libero arcu at mi." +
        "Nulla facilisi.",
        titulo: "Document Title 5",
        fecha: "Abril 22, 2023 11:52:12 PM",
    },
  
    {
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna euismod, pretium lacus et, bibendum velit." +
        "Duis at ante lectus. Sed porttitor, odio ac lobortis gravida, sapien eros sodales odio, vel luctus libero arcu at mi." +
        "Nulla facilisi.",
        titulo: "Document Title 6",
        fecha: "Abril 22, 2023 11:52:12 PM",
    },
  
  ];

let doc = document.getElementById("seccionDocs");

documentos.map ((x, i) =>{
    doc.innerHTML += `
        <div class="document-preview">
            <div class="document-info">
            <p class="document-description">${x.contenido}</p>
            <h3 class="document-title">${x.titulo}</h3>
            <p class="document-date">${x.fecha}</p>
                                    
            </div>
            
            <button id="botonD${i}" class="document-button">:</button>
            <div id="menuF${i}" class="menuFlot">
                <ul>
                    <li><a href="#">Cambiar nombre</a></li>
                    <li><a href="#">Descargar</a></li>
                    <li><a href="#">Borrar</a></li>
                </ul>
            </div> 
        </div>
    `;
}
);

let botonesD = document.querySelectorAll(".document-button");
let menusFlotantes = document.querySelectorAll(".menuFlot");

document.addEventListener("click", function (event) {
    // Ocultar el menú flotante si el evento de clic no es originado por el botón o el menú flotante
    if (!event.target.classList.contains("document-button") && !event.target.classList.contains("menuFlot")) {
      menusFlotantes.forEach((menu) => {
        menu.style.display = "none";
      });
    }
  });

for (let i = 0; i < botonesD.length; i++) {
  botonesD[i].addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    let menuFlotante = menusFlotantes[i];

    // Ocultar todos los menús flotantes antes de mostrar el correspondiente
    for (let j = 0; j < menusFlotantes.length; j++) {
      if (j !== i) {
        menusFlotantes[j].style.display = "none";
      }
    }

    // Mostrar el menú flotante correspondiente
    if (menuFlotante.style.display === "block") {
      menuFlotante.style.display = "none";
    } else {
      menuFlotante.style.display = "block";
      menuFlotante.style.top = botonesD[i].offsetTop - menuFlotante.offsetHeight + "px";
      menuFlotante.style.left = botonesD[i].offsetRight + "px";
    }
  });

}

let searchInput = document.getElementById("buscarDoc");

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let searchValue = event.target.value.toLowerCase();
        let docs = document.querySelectorAll('.document-preview');

        docs.forEach(doc => {
            let docTitle = doc.querySelector('h3').textContent.toLowerCase();
            if (docTitle.includes(searchValue)) {
                doc.style.display = 'block';
            } else {
                doc.style.display = 'none';
            }
        });
    }
});
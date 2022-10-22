const images = [
  { titulo: "Alto Valle Río Negro", archivo: "Alto Valle Río Negro" },
  { titulo: "Buenos Aires - Nordeste", archivo: "Buenos Aires - Nordeste" },
  { titulo: "Buenos Aires - Noroeste", archivo: "Buenos Aires - Noroeste" },
  { titulo: "Buenos Aires - Sudeste", archivo: "Buenos Aires - Sudeste" },
  { titulo: "Buenos Aires - Sudoeste", archivo: "Buenos Aires - Sudoeste" },
  { titulo: "Catamarca", archivo: "Catamarca" },
  { titulo: "Chaco", archivo: "Chaco" },
  { titulo: "Chubut", archivo: "Chubut" },
  { titulo: "Córdoba - Norte", archivo: "Córdoba - Norte" },
  { titulo: "Córdoba - Sur", archivo: "Córdoba - Sur" },
  { titulo: "Corrientes", archivo: "Corrientes" },
  { titulo: "Entre Ríos", archivo: "Entre Ríos" },
  { titulo: "Formosa", archivo: "Formosa" },
  { titulo: "Gran Córdoba y Punilla", archivo: "Gran Córdoba y Punilla" },
  { titulo: "Gran Rosario", archivo: "Gran Rosario" },
  { titulo: "Jujuy", archivo: "Jujuy" },
  { titulo: "La Pampa", archivo: "La Pampa" },
  { titulo: "La Rioja", archivo: "La Rioja" },
  { titulo: "Mendoza", archivo: "Mendoza" },
  { titulo: "Mendoza - Uco y San Rafael", archivo: "Mendoza - Uco y San Rafael" },
  { titulo: "Mendoza - Valle", archivo: "Mendoza - Valle" },
  { titulo: "Misiones", archivo: "Misiones" },
  { titulo: "Neuquén", archivo: "Neuquén" },
  { titulo: "Resistencia - Corrientes", archivo: "Resistencia - Corrientes" },
  { titulo: "Río Negro", archivo: "Río Negro" },
  { titulo: "Salta", archivo: "Salta" },
  { titulo: "San Juan", archivo: "San Juan" },
  { titulo: "San Juan - Valle", archivo: "San Juan - Valle" },
  { titulo: "San Luis", archivo: "San Luis" },
  { titulo: "Santa Cruz", archivo: "Santa Cruz" },
  { titulo: "Santa Fe Norte", archivo: "Santa Fe Norte" },
  { titulo: "Santa Fe - Paraná", archivo: "Santa Fe - Paraná" },
  { titulo: "Santa Fe Sur", archivo: "Santa Fe Sur" },
  { titulo: "Santiago del Estero", archivo: "Santiago del Estero" },
  { titulo: "Tierra del Fuego", archivo: "Tierra del Fuego" },
  { titulo: "Tucumán", archivo: "Tucumán" },
  { titulo: "Valles de Lerma y Jujuy", archivo: "Valles de Lerma y Jujuy" },
  { titulo: "Valles río Neuquén y Limay - Bariloche", archivo: "Valles río Neuquén y Limay - Bariloche" }
];

function getElement ({type, id, classList, attributes, innerText}) {
    let elem = document.createElement(type);
    id ? elem.id = id: null;
    classList ? elem.classList = classList : null;
    if(attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            elem.setAttribute(key, value);
        }
    }
    innerText ? elem.innerText = innerText : null;
    return elem;
}

images.forEach( imagen => {
    const uri = "mapas/" + window.encodeURI(imagen.archivo) + ".png";
    const thumb = "mapas/thumbs/" + window.encodeURI(imagen.archivo) + ".webp";
    const container = getElement({type: "div", classList: "responsive"});
    const galleryItem = getElement({type: "div", classList: "gallery"});
    const imageLink = getElement({type: "a", attributes: {target: "_blank", href: uri}});
    const img = getElement({type: "img", attributes: {src: thumb, title: "mapa de " + imagen.titulo, alt: "mapa de " + imagen.titulo, loading: "lazy", width: "600", height: "400"}});
    const description = getElement({type: "div", classList: "desc", innerText: imagen.titulo });
    
    imageLink.appendChild(img);
    galleryItem.appendChild(imageLink);
    galleryItem.appendChild(description);
    container.appendChild(galleryItem);

    document.getElementById("gallery").appendChild(container);
});
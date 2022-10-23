const imagenes = [
  { titulo: "Alto Valle Río Negro", archivo: "Alto Valle Río Negro", fecha: "22-10-2021", osm: "10/-38.9856/-67.6579" },
  { titulo: "Buenos Aires - Nordeste", archivo: "Buenos Aires - Nordeste", fecha: "22-10-2021", osm: "10/-34.5806/-58.6038" },
  { titulo: "Buenos Aires - Noroeste", archivo: "Buenos Aires - Noroeste", fecha: "22-10-2021", osm: "8/-35.158/-61.672" },
  { titulo: "Buenos Aires - Sudeste", archivo: "Buenos Aires - Sudeste", fecha: "22-10-2021", osm: "8/-36.943/-58.354" },
  { titulo: "Buenos Aires - Sudoeste", archivo: "Buenos Aires - Sudoeste", fecha: "22-10-2021", osm: "8/-38.731/-61.749" },
  { titulo: "Catamarca", archivo: "Catamarca", fecha: "22-10-2021", osm: "7/-27.747/-67.033" },
  { titulo: "Chaco", archivo: "Chaco", fecha: "22-10-2021", osm: "7/-26.210/-60.606" },
  { titulo: "Chubut", archivo: "Chubut", fecha: "22-10-2021", osm: "7/-44.044/-68.384" },
  { titulo: "Córdoba - Norte", archivo: "Córdoba - Norte", fecha: "22-10-2021", osm: "8/-30.791/-63.789" },
  { titulo: "Córdoba - Sur", archivo: "Córdoba - Sur", fecha: "22-10-2021", osm: "8/-33.172/-63.526" },
  { titulo: "Corrientes", archivo: "Corrientes", fecha: "22-10-2021", osm: "8/-28.722/-57.473" },
  { titulo: "Entre Ríos", archivo: "Entre Ríos", fecha: "22-10-2021", osm: "8/-32.159/-59.208" },
  { titulo: "Formosa", archivo: "Formosa", fecha: "22-10-2021", osm: "8/-25.230/-59.969" },
  { titulo: "Gran Córdoba y Punilla", archivo: "Gran Córdoba y Punilla", fecha: "22-10-2021", osm: "10/-31.2474/-64.3449" },
  { titulo: "Gran Rosario", archivo: "Gran Rosario", fecha: "22-10-2021", osm: "10/-32.9401/-60.6850" },
  { titulo: "Jujuy", archivo: "Jujuy", fecha: "22-10-2021", osm: "8/-23.275/-65.544" },
  { titulo: "La Pampa", archivo: "La Pampa", fecha: "22-10-2021", osm: "7/-37.191/-65.627" },
  { titulo: "La Rioja", archivo: "La Rioja", fecha: "22-10-2021", osm: "8/-29.692/-67.353" },
  { titulo: "Mendoza", archivo: "Mendoza", fecha: "22-10-2021", osm: "7/-34.634/-68.431" },
  { titulo: "Mendoza - Uco y San Rafael", archivo: "Mendoza - Uco y San Rafael", fecha: "22-10-2021", osm: "10/-34.6084/-68.3209" },
  { titulo: "Mendoza - Valle", archivo: "Mendoza - Valle", fecha: "22-10-2021", osm: "10/-33.0806/-68.6268" },
  { titulo: "Misiones", archivo: "Misiones", fecha: "22-10-2021", osm: "8/-26.890/-54.693" },
  { titulo: "Neuquén", archivo: "Neuquén", fecha: "22-10-2021", osm: "7/-38.921/-69.966" },
  { titulo: "Resistencia - Corrientes", archivo: "Resistencia - Corrientes", fecha: "22-10-2021", osm: "10/-27.4823/-58.8631" },
  { titulo: "Río Negro", archivo: "Río Negro", fecha: "22-10-2021", osm: "7/-39.880/-67.209" },
  { titulo: "Salta", archivo: "Salta", fecha: "22-10-2021", osm: "7/-24.232/-65.121" },
  { titulo: "San Juan", archivo: "San Juan", fecha: "22-10-2021", osm: "7/-30.529/-68.780" },
  { titulo: "San Juan - Valle", archivo: "San Juan - Valle", fecha: "22-10-2021", osm: "10/-31.6773/-68.4702" },
  { titulo: "San Luis", archivo: "San Luis", fecha: "22-10-2021", osm: "7/-33.930/-66.154" },
  { titulo: "Santa Cruz", archivo: "Santa Cruz", fecha: "22-10-2021", osm: "6/-49.059/-67.841" },
  { titulo: "Santa Fe Norte", archivo: "Santa Fe Norte", fecha: "22-10-2021", osm: "8/-29.413/-60.515" },
  { titulo: "Santa Fe - Paraná", archivo: "Santa Fe - Paraná", fecha: "22-10-2021", osm: "10/-31.6715/-60.6219" },
  { titulo: "Santa Fe Sur", archivo: "Santa Fe Sur", fecha: "22-10-2021", osm: "8/-33.144/-61.559" },
  { titulo: "Santiago del Estero", archivo: "Santiago del Estero", fecha: "22-10-2021", osm: "7/-27.825/-63.155" },
  { titulo: "Tierra del Fuego", archivo: "Tierra del Fuego", fecha: "22-10-2021", osm: "8/-54.129/-66.942" },
  { titulo: "Tucumán", archivo: "Tucumán", fecha: "22-10-2021", osm: "9/-27.0432/-65.3453" },
  { titulo: "Valles de Lerma y Jujuy", archivo: "Valles de Lerma y Jujuy", fecha: "22-10-2021", osm: "10/-24.5140/-65.3364" },
  { titulo: "Valles río Neuquén y Limay - Bariloche", archivo: "Valles río Neuquén y Limay - Bariloche", fecha: "22-10-2021", osm: "10/-38.9113/-67.8788" },
];

/* (function search () {
    const searched  = document.getElementById("searchText").value.toLowerCase();;
    search.addEventListener("keyup", (e) => {
        const res = imagenes.filter(img => Object.entries((k,v) => {
            img.titulo.toLowerCase()
        }).some(val => val.includes(string)
        ));
        console.log(res);
    });
})(); */

function getElement({ type, id, classList, attributes, innerHTML }) {
  let elem = document.createElement(type);
  id ? (elem.id = id) : null;
  classList ? (elem.classList = classList) : null;
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      elem.setAttribute(key, value);
    }
  }
  innerHTML ? (elem.innerHTML = innerHTML) : null;
  return elem;
}

imagenes.forEach((imagen) => {
  const uri = "mapas/" + window.encodeURI(imagen.archivo) + ".png";
  const thumb = "mapas/thumbs/" + window.encodeURI(imagen.archivo) + ".webp";
  const osm = "https://www.openstreetmap.org/#map=" + imagen.osm;
  const container = getElement({ type: "div", classList: "responsive" });
  const galleryItem = getElement({ type: "div", classList: "gallery" });
  const imageLink = getElement({
    type: "a", attributes: { target: "_blank", href: uri },
  });
  const img = getElement({
    type: "img",
    attributes: {
      src: thumb,
      title: "mapa de " + imagen.titulo,
      alt: "mapa de " + imagen.titulo,
      loading: "lazy",
      width: "600",
      height: "400",
    },
  });
  const desc = imagen.titulo + " " + imagen.fecha;
  const osmLink = getElement({
    type: "a",
    classList: "open-in-osm",
    attributes: { target: "_blank", href: osm },
  });
  const description = getElement({
    type: "div",
    classList: "desc",
    innerHTML: desc,
  });

  osmLink.innerHTML = `Ver en OSM <i class="open-new-icon"></i>`;

  imageLink.appendChild(img);
  description.appendChild(osmLink);
  galleryItem.appendChild(imageLink);
  galleryItem.appendChild(description);
  container.appendChild(galleryItem);

  document.getElementById("gallery").appendChild(container);
});
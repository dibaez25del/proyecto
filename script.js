const perros = [
  {
    nombre: "Pastor Blanco",
    descripcion: "Amigable y perfecto para familias.",
    imagen: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8"
  },
  {
    nombre: "Golden Retriever",
    descripcion: "Peludo, juguetón y cariñoso.",
    imagen: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
  },
  {
    nombre: "Pug negro",
    descripcion: "Son conocidos por ser muy sociables, cariñosos, juguetones y encantadores.",
    imagen: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },
  {
    nombre: "Bulldog Francés ",
    descripcion: "Pequeño y muy adorable.",
    imagen: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a"
  }
];

const contenedor = document.getElementById("dogs");

perros.forEach(perro => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${perro.imagen}" alt="${perro.nombre}">
    <div class="info">
      <h3>${perro.nombre}</h3>
      <p>${perro.descripcion}</p>
    </div>
  `;

  contenedor.appendChild(card);
});

const perros = [
  {
    nombre: "Golden Retriever",
    descripcion: "Amigable y perfecto para familias.",
    imagen: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8"
  },
  {
    nombre: "Bulldog Francés",
    descripcion: "Pequeño, juguetón y cariñoso.",
    imagen: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
  },
  {
    nombre: "Labrador",
    descripcion: "Inteligente y lleno de energía.",
    imagen: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },
  {
    nombre: "Pomerania",
    descripcion: "Peludo y muy adorable.",
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

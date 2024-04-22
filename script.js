// Obtenemos todos los elementos li
const items = document.querySelectorAll('.item');

// Agregamos eventos táctiles a cada elemento li
items.forEach(item => {
  item.addEventListener('mouseover', activateItem);
  item.addEventListener('touchstart', activateItem);
});

// Función para activar el efecto en un elemento li
function activateItem(event) {
  // Removemos la clase 'active' de todos los elementos li
  items.forEach(item => item.classList.remove('active'));
  
  // Agregamos la clase 'active' al elemento li actual
  event.currentTarget.classList.add('active');
}

// Obtenemos todos los elementos con la clase 'service' y 'service1'
const services = document.querySelectorAll('.service, .service1');

// Agregamos eventos táctiles a cada elemento service
services.forEach(service => {
  service.addEventListener('mouseover', activateService);
  service.addEventListener('touchstart', activateService);
});

// Función para activar el efecto en un elemento service
function activateService(event) {
  // Removemos la clase 'active' de todos los elementos service
  services.forEach(service => service.classList.remove('active'));
  
  // Agregamos la clase 'active' al elemento service actual
  event.currentTarget.classList.add('active');
}

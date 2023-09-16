// Espera a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el enlace de scroll-to-top
    var scrollButton = document.querySelector('.scroll-to-top');
  
    // Muestra el enlace cuando se desplaza hacia abajo
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        scrollButton.classList.add('active');
      } else {
        scrollButton.classList.remove('active');
      }
    });efault();
      window.scrollTo
  
    // Desplaza suavemente hacia arriba cuando se hace clic en el enlace
    scrollButton.addEventListener('click', function(e) {
      e.preventD({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  // Seleccione los elementos de la página
const cart = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.querySelector('.total-price');
const checkoutBtn = document.querySelector('.checkout');

// Inicializar el precio total en 0
let total = 0;

// Agregue un evento de clic al botón de pago
checkoutBtn.addEventListener('click', function() {
  alert('Gracias por su compra');
});

// Agregue un evento de clic al botón Eliminar artículo
cart.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-item')) {
    const item = e.target.parentElement.parentElement


// Obtener referencias a los elementos del formulario
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');

// Función para agregar un artículo al carrito
function addToCart() {
  // Obtener los valores de los campos del formulario
  const name = nameInput.value;
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  // Crear un objeto que represente el artículo
  const item = {
    name: name,
    price: price,
    quantity: quantity
  };

  // Agregar el artículo al carrito
  cart.push(item);

  // Limpiar los campos del formulario
  nameInput.value = '';
  priceInput.value = '';
  quantityInput.value = '';

  // Mostrar un mensaje de confirmación
  alert(`Se ha agregado "${name}" al carrito.`);
}

document.addEventListener('DOMContentLoaded', () => {

  //EXTRAER FOOTER Y NAVBAR
  fetch('../modules/navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el navbar');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('barranavegacion').innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  fetch('../modules/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el footer');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('footer-container').innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


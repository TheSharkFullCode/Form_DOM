
const form = document.querySelector('form');

form.addEventListener('submit', (element) => {
    element.preventDefault();

    const user = {
        name: element.target["name"].value,
    }

    const paragraph = document.createElement('p');
    paragraph.innerText = `Nombre: ${user.name}`;

    const span = document.querySelector('span');
    span.appendChild(paragraph);

    console.log(user);
});

// ----------------Ejercicio 2---------------------------------------


// const botonEnviar = document.querySelector('#send');

// botonEnviar.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(event.target);


//   const dataUSer = {
//       name: event.target.dataset.datos 
//   }
//   console.log(dataUSer);


// });
    // ----------------------------------------------
    
    const botonEnviar = document.querySelector('#send');
    botonEnviar.addEventListener('click', (event) => {
      event.preventDefault();

      const inputValue = event.target.dataset.datos;
      
      if (!inputValue) {
        alert('El campo está vacío');
      } else {
        const dataUSer = {
          name: inputValue
        };
        console.log(dataUSer);
      }
    });





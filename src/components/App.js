import data from '../data/webdev/webdev.js';


// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

/*const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

export default App;*/

const dataDev = data.items;


const printCards = () => {
  const container = document.createElement('div');
  dataDev.forEach((personagem) => {
    container.innerHTML +=`
                                <div>Name: ${personagem.image}</div>
                              `;
    //container.addEventListener('click', () => modal(personagem));
    /*document.getElementById('print-cards').appendChild(container);*/
    
  });
  return container;
};

export default printCards;

printCards(dataDev);




  

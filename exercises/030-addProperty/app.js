function addProperty(obj, key) {
  // your code here
   obj[key]= true;
   return obj;
}


let jugador = {
  nombre : 'Luka Döncic',
  posicion: 'Base',
  edad: 25,
  anillos : false,
  ppg : 29.3
};

addProperty(jugador, 'rpg');
console.log(jugador.rpg);
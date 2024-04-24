import carroPorNombre, {carros} from './data/carros' 

console.log(carros);

const marcasCarros = carros.map(i => {
    return i.marca;
});

const nombresCarros = carros.map(i => {
    return i.client.name;
});

console.log(marcasCarros);
console.log(nombresCarros);

//const carroPorNombre = carros.find(i => i.client.name === 'Benito')


console.log('Carro por nombre: ');
console.log(carroPorNombre('Benitoo'));

const carroFilter = carros.filter(i => i.id != 1)

console.log(carroFilter);

const carroSome = carros.some(i => i.client.name === 'Benitto')

console.log(carroSome);
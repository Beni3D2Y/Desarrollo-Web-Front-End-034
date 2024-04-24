
const carros = [
    {
        
        id:1,
        marca:'Seat',
        modelo:'Fr',
        año: 2018,
        nombre:'Leon',
        client: {
            name: 'Benito',
            apellido:'Estudillo'
        }
    },
    {
        id:2,
        marca:'Seat',
        modelo:'Excellence',
        año: 2018,
        nombre:'Aroma',
        client: {
            name: 'Benito',
            apellido:'Estudillo'
        }
    },
    {
        id:3,
        marca:'Cupra',
        modelo:'Cupra',
        año: 2018,
        nombre:'Ateca',
        client: {
            name: 'Benito',
            apellido:'Estudillo'
        }
    },
    {
        id:4,
        marca:'Cupra',
        modelo:'Cupra',
        año: 2018,
        nombre:'Formentor',
        client: {
            name: 'Benito',
            apellido:'Estudillo'
        }
    },
    {
        id:5,
        marca:'Cupra',
        modelo:'Electrico',
        año: 2018,
        nombre:'Moto',
        client: {
            name: 'Benito',
            apellido:'Estudillo'
        }
    },
];

console.log(carros);

const marcasCarros = carros.map(i => {
    return i.marca;
});

const nombresCarros = carros.map(i => {
    return i.client.name;
});

console.log(marcasCarros);
console.log(nombresCarros);

const carroPorNombre = carros.find(i => i.client.name === 'Benito')

console.log(carroPorNombre);

const carroFilter = carros.filter(i => i.id != 1)

console.log(carroFilter);

const carroSome = carros.some(i => i.client.name === 'Benitto')

console.log(carroSome);
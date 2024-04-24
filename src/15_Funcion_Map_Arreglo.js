
const carros = [
    {
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
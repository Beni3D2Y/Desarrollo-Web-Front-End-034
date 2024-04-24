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

const carroPorNombre = (nombreCliente) => {
    return carros.find(i => i.client.name === nombreCliente);
}

const carroPorId = (id) => {
    return carros.filter(i=> i.id !== id);
}

const findCarById = (id) =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const test = carroPorId(id);

            if(test){
                resolve(test);
            }else{
                reject('Error> No se encontro el carro');
            }
        }, 3000);
    });

    return promise;
}

export{
    carros,
    carroPorNombre as default,
    carroPorId,
    findCarById
}
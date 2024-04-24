import  {findCarById} from './data/carros' 

findCarById(3).then((json) => {
    console.log(json);
    console.log('Realizando con exito');
}).catch((error) => {
    console.error(error);
});

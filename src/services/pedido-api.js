import api from './api';

async function obter () {
    return await api.get('/pedido');

}

function obter2 () {
    return new Promise((resolve,reject) => {
        api.get('/pedido')
        .then(response => resolve(response))
        .catch(error => reject(error))
    }) ;

}
export default {
    obter,
}
const request = require('postman-request');

const getAllProducts = (callback) => {
    request('https://api-modda-brian.herokuapp.com/products', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}

module.exports= {
  
  getAllProducts

}
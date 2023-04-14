const fs = require('fs');

leerArchivo = async() => {
  try {
    const data = await fs.promises.readFile('archivo.txt', 'utf8');
    return data;
  } catch (error) {
    throw error;
  }
}

leerArchivo()
  .then(data => console.log(data))
  .catch(err => console.log(err));
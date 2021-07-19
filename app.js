const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors');


console.clear();

// console.log(process.argv);
console.log(argv);

// const base = 3;

// console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;

// const [ , base = 5] = arg3.split('=');

// console.log(base);

crearArchivo( argv.b, argv.h , argv.l )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(err => console.log(err));
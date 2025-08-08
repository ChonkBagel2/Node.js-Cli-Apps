import { argv } from 'node:process'; 


console.log( ' The following arguments were passed to the script ' ); 
const args = argv.slice( 2 ); 

args.forEach( function ( arg, index ) {
    console.log( ` Argument ${ index + 1 } =`, arg ); 
} )


















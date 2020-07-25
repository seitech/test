const fs = require('fs');
let message = "Youhou!";

// ecrit dans un fichier en le créant ou en l'écrasant
fs.writeFile('message.txt',message,(err)=>{
    if(err) throw err;
    console.log("Fichier bien modifié");
})
// ecrit dans le fichier sans l'écraser
fs.addFile('message.txt',message,(err)=>{
    if(err) throw err;
    console.log("Fichier bien modifié");
})
// lit le fichier
fs.readFile('message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// permet de choisir en fonction de la commande lancé
let parameter = process.argv[2];
if(parameter === "hello") {
    console.log("youhou la famille");
}
else if(parameter === "goodbye") {
    console.log("Bonne nuit les petits");
}

yargs.command({
    command: 'hi',
    describe: 'Say hello!',
    builder: {
        name: {
            describe: 'Name of someone',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(`Youhou ${argv.name}`);
    }
}).argv
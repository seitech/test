const fs = require('fs');
const yargs = require('yargs');
const { title } = require('process');
const { body } = require('process');
function loadDatas(path) {
    let data = fs.readFileSync(path);
    return JSON.parse(data.toString());
}
yargs
    .command({
        command: 'add',
        describe: 'ajouter un titre',
        builder: {
            title: {
                describe: "title",
                demandOption: true,
                type: "string"
            },
            body:{
                describe: "body",
                demandOption: true,
                type: "string"

            }
        },
        handler: (argv) => {
            console.log("Add user in file");
            let title = loadDatas('./datas/notes.json');
            title.push[(argv.title), (argv.body)] ;
            fs.writeFile('./datas/notes.json',JSON.stringify(title, body), (err) => {
                if(err) throw err;
                console.log("titre ajouté");
            })
        }
    })
    .command({
        command: 'list',
        describe: 'List all users',
        handler: () => {
            console.log("List all users");
            let users = loadDatas('./datas/notes.json');
            console.log(users);
        }
    })
    .argv

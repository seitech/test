// // const fs = require('fs');
// // const chalk = require('chalk');
// const yargs = require("yargs");
// // const action = process.argv[2];


// // switch(action) {
// //     case 'add':
// //         console.log(chalk.bold.inverse.blue("Add user in file")); // message de validation
// //         const user = process.argv[3];
// //         fs.appendFile('users.txt', user + "\n", (err) => {
// //             if(err) throw err;
// //         })
// //         break;

// //     case 'list':
// //         console.log(chalk.bold.inverse.blue("List all users"));// message de validation
// //         fs.readFile('users.txt', 'utf8', (err, data) => {
// //             if(err) throw err;
// //             console.log(chalk.bold.yellowBright(data));
// //         });
// //         break;

// //     default:
// //        console.log(chalk.bold.inverse.red('No comprendo'));
// // }

// // yargs
// //     .command({
// //         command: 'add',
// //         describe: 'Add user in file',
// //         builder: {
// //             name: {
// //                 describe: "User's name",
// //                 demandOption: true,
// //                 type: 'string'
// //             }
// //         },
// //         handler: (argv) => {
// //             console.log("Add user in file");
// //             const user = argv.name;
// //             fs.appendFile('users.txt', user + "\n", (err) => {
// //                 if(err) throw err;
// //                 console.log('User added');
// //             })
// //         }
// //     })
// //     .command({
// //         command: 'list',
// //         describe: 'List all users',
// //         handler: () => {
// //             console.log("List all users");
// //             fs.readFile('users.txt', 'utf8', (err, data) => {
// //                 if(err) throw err;
// //                 console.log(data);
// //             });
// //         }
// //     })
// //     .argv

// // ajout de donner d'un fichier en .JSON

// const fs = require("fs");
// // fs.readFile('messages.json',(err, data) => {
// //     if(err) throw err;
// //     // console.log(data);
// //     // const dataString = data.toString();
// //     // console.log(dataString);
// //     // const dataJson = JSON.parse(dataString);
// //     // console.log(dataJson);
// //     let messages = JSON.parse(data.toString());
// //     console.log(messages);
// // })
// // const user = {
// //     name: "JB Lavisse",
// //     age: 22,
// //     job: "Glandeur pro"
// // }
// // fs.writeFile('user.json',JSON.stringify(user),(err) => {
// //     if(err) throw err;
// //     console.log(`Utilisateur ${user.name} ajouté`);
// // })

// // yargs
// //     .command({
// //         command: 'list',
// //         describe: 'List all users',
// //         handler: () => {
// //             console.log("List all users");
// //             fs.readFile('users.json', 'utf8', (err, data) => {
// //                 if(err) throw err;
// //                 let messages = JSON.parse(data.toString());
// //                 console.log(messages);
// //             });
// //         }
// //     })


const fs = require('fs');
const yargs = require('yargs');
function loadDatas(path) {
    let data = fs.readFileSync(path);
    return JSON.parse(data.toString());
}
yargs
    .command({
        command: 'add',
        describe: 'Add user in file',
        builder: {
            name: {
                describe: "User's name",
                demandOption: true,
                type: "string"
            }
        },
        handler: (argv) => {
            console.log("Add user in file");
            let users = loadDatas('users.json');
            users.push(argv.name);
            fs.writeFile('users.json',JSON.stringify(users), (err) => {
                if(err) throw err;
                console.log("Utilisateur ajouté");
            })
        }
    })
    .command({
        command: 'list',
        describe: 'List all users',
        handler: () => {
            console.log("List all users");
            let users = loadDatas('users.json');
            console.log(users);
        }
    })
    .argv





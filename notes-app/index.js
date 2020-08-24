const yargs = require("yargs");
const { string } = require("yargs");
const notes = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : string,
            demandOption : true,
            description : "title of new note"
        },
        body : {
            type : string,
            demandOption : true,
            description : "body of new note"
        }
    },
    handler : argv => {
        notes.createNote(argv.title, argv.body);
    }
})

yargs.command({
    command : "list",
    description : "to list all notes",
    handler : argv => {
        notes.listNote();
    }
})


yargs.parse();


// node index.js add --title="AnyTitle" --body="AnyBody"
// node index.js read --title="AnyTitle" 
// node index.js remove --title="AnyTitle" 
// node index.js list 
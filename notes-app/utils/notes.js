const fs = require("fs");
const chalk = require("chalk");

const loadNote = () => {
  try {
    const notesBuffer = fs.readFileSync("./notes.json");
    notesString = notesBuffer.toString();
    return JSON.parse(notesString);
  } catch {
    return [];
  }
};

const saveNote = (notes) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  console.log(chalk.green("Data Saved."));
};

const readNote = (title) => {
    // read only one note based on given title
};

const removeNote = (title) => {
    // remove one note based on given title
};


const listNote = () => {
    const notes = loadNote();
    console.log(chalk.blue.bold("My Notes"));
    notes.forEach(note => {
        console.log(chalk.blue("-----------------"))
        console.log(chalk.grey("Title : " + note.title))
        console.log(chalk.grey("Body : " + note.body))
        console.log(chalk.blue("-----------------"))
    })
};

const createNote = (title, body) => {
  let notes = loadNote();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length > 0) {
      console.log(chalk.red("Duplicate Title. Try Again!"));
      return;
  }
  const note = { title, body };
  notes.push(note);
  saveNote(notes);
};

module.exports = {
  readNote,
  listNote,
  removeNote,
  createNote,
};

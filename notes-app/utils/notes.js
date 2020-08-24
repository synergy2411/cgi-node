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
};

const readNote = (title) => {
  const notes = loadNote();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length > 0) {
    console.log(chalk.blue.bold("Note Found"));
    console.log(chalk.blue("----------------------"));
    console.log(chalk.grey("Title : ", duplicateNotes[0].title));
    console.log(chalk.grey("Body : ", duplicateNotes[0].body));
  } else {
    console.log(chalk.red("Note NOT found"));
  }
};

const removeNote = (title) => {
  const notes = loadNote();
  const position = notes.findIndex((note) => note.title === title);
  if (position >= 0) {
    const duplicateNotes = notes.filter((note) => note.title !== title);
    saveNote(duplicateNotes);
    console.log(chalk.redBright("Note removed successfully"));
  } else {
    console.log(chalk.red("Title NOT found"));
  }
};

const listNote = () => {
  const notes = loadNote();
  console.log(chalk.blue.bold("My Notes"));
  notes.forEach((note) => {
    console.log(chalk.blue("-----------------"));
    console.log(chalk.grey("Title : " + note.title));
    console.log(chalk.grey("Body : " + note.body));
    console.log(chalk.blue("-----------------"));
  });
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
  console.log(chalk.green("Data Saved."));
};

module.exports = {
  readNote,
  listNote,
  removeNote,
  createNote,
};

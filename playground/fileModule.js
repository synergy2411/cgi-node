
const MAGIC_NUMBER = Math.round(Math.random() *100)

const getLuckyNumber = () => MAGIC_NUMBER;

const readFile = () => {
    console.log("Reading File....")
}

const saveFile = () => {
    console.log("Save File....")
}

module.exports = {
    read : readFile,
    save : saveFile,
    getLuckyNumber
}
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');


// customize yargs version
yargs.version('1.1.0')


// create add command
yargs.command({
  command :  'add',
  describe: 'Add a new note',
  builder : {
    title:{
        describe: 'Note title',
        demandOption: true,
        type : 'string'
    },
    body:{
        describe: 'Note body',
        demandOption: true,
        tyoe: 'string'
    }
  },
  
   handler (argv){
       notes.addNote(argv.title , argv.body)
   }

})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
   
})

// create list command 
yargs.command({
    command: 'list',
    describe: 'listing your notes',
    handler (){
        notes.listNotes()
    }
   
})

// create read command
yargs.command({
    command: 'read',
    describe: 'reading your notes',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv)
    {
     notes.readNote(argv.title)
    }
   
})
yargs.parse();

// console.log(yargs.argv);

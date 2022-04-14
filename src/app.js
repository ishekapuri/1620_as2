const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//id

const addBtn = document.querySelector(".fa-circle-plus")
const newNote = document.querySelector(".create-note-area")
const textBox = `<textarea id ="textArea"rows="30" cols="60"></textarea>`
const writeNote = document.querySelector(".write-note-area")
const readNote = document.querySelector(".read-note-area")
const notesList = document.querySelector(".notes-list")
const toggle = document.querySelector('.main-container')

//saveBtn

const saveBtn = document.createElement('button')
saveBtn.innerHTML = 'Save'
saveBtn.id = 'save-button';

//cancelBtn


const cancelBtn = document.createElement('button')
cancelBtn.innerHTML = 'Cancel'
cancelBtn.id = 'cancel-button';

//closeNoteBtn
const closeNoteBtn = document.createElement('button')
closeNoteBtn.innerHTML = 'Close'

//add new note area
function newNoteArea() {
  writeNote.insertAdjacentHTML('afterbegin', textBox)
  writeNote.appendChild(saveBtn)
  writeNote.appendChild(cancelBtn)
}

addBtn.addEventListener('click', newNoteArea)

//cancelBtn function
function cancelFunc() {
  cancelBtn.remove()
  saveBtn.remove()
  let note = document.getElementById("textArea");
  if (note.parentNode) {
    note.parentNode.removeChild(note)
  }
  newNote.appendChild(newNote)
}

cancelBtn.addEventListener('click', cancelFunc)

//saveBtn function
function saveFunc() {
  let txtarea = document.querySelector('#textArea').value
	let title,body;
	if (txtarea.indexOf("\n")!=-1) {
		title = txtarea.substr(0, txtarea.indexOf("\n"));
		body = txtarea.substr(txtarea.indexOf("\n")+1);
	} else {
		title = txtarea;
		body = "";
	}
	notes.push({ title: title, noteBody: body,id: notes.length + 1 })
	let list = document.createElement("li");
	list.appendChild(document.createTextNode(title));
	list.setAttribute("id", notes.length-1);
	notesList.appendChild(list);
	list.addEventListener('click', readSavedNote)
  
  cancelFunc();
}  

saveBtn.addEventListener('click', saveFunc)

//read saved notes
function readSavedNote() {
  if (document.getElementById("textArea")){
    cancelFunc()
  }
  readNote.innerHTML = '<div id="read-note"><h1>'+notes[this.id].title+'</h1><p>'+notes[this.id].noteBody+'<br></p></div>';
  readNote.appendChild(closeNoteBtn)
  closeNoteBtn.addEventListener('click', cancelSavedNote)
  }
  
function cancelSavedNote() {
    readNote.innerHTML ='';
  }
 

//dark mode
const darkMode = document.querySelector(".theme-toggle")
const lightTheme = document.querySelector('.light-theme')
function nightMode(){
  lightTheme.classList.toggle("dark-theme") 
}
darkMode.addEventListener('change', nightMode) 
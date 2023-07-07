// const button to add the dynamic html with the help of the dom
// stored in the variable addnote
const addNote = document.querySelector('#addNote');
const main = document.querySelector('#main');

                                                       // funtion to save the notes in the local storage 
const saveNotes = () => {
    const notes = document.querySelectorAll('.note textarea');
    console.log(notes);
    const data = [];                                          // empty array to store the notes
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

     // to add at least 1 note on the page 

    if(data.length===0){
        localStorage.removeItem("notes")
    } else{

        localStorage.setItem("notes",JSON.stringify(data))
    }
}  
addNote.addEventListener(
    "click",

    function () {
        addNotes()
    }                                                      // function to call on the click event
)                                                         


//function to add the dynamic html 
const addNotes = (text ="") => {                                                           // variable to create the div tag
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `   
            <div class="tool">
                <i class=" save fa-solid fa-trash"> </i>
                <i class=" trash fa-solid fa-floppy-disk"> </i>
            </div>
            <textarea> ${text} </textarea>`;                                                                  // to remove the note 
    note.querySelector('.trash').addEventListener   // to removee the note
        (
            "click",
            function (){
                 note.remove()
                 saveNotes()// to save notes after remove case
            }
        )

        
        // to save the note 
        note.querySelector('.save').addEventListener(
            "click",
            function (){  
                saveNotes()
            }
        )
        main.appendChild(note);
        saveNotes();

}

(
    function(){
        const lsNotes= JSON.parse(localStorage.getItem("notes"));

        if(lsNotes===null){
            addNotes()

        } else{
            lsNotes.forEach(
                (lsNote)=>{
                    addNotes(lsNote)
                }
            )
        }
    }
)()



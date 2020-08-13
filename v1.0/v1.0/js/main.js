console.log("this is magic notes app");
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
                <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                      <div class="card-body">
                           <h5 class="card-title">note${index + 1}</h5>
                           <p class="card-text">${element}</p>
                            <button class="btn btn-primary" onClick="deleteNote(this.id)" id="${index}">Delete Note</button>
                      </div>
                </div>
        `;
        let notesElm = document.getElementById("notes");
        if (notesobj.length != 0) {
            notesElm.innerHTML = html;
        }
        else {
            notesElm.innerHTML = `nothing to show use "Add a note" to show`;
        }
    });
}

// show notes function end;
// now deletion of the notes

function deleteNote(index) {
    // console.log("i m deleting node", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
// searching functionality

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputValue = search.value;
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {

        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputValue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

        // console.log(cardTxt)
    });
});


/*
features to add by me
1. add separate title
2. mark a note as Important
3. separate notes by user
4. sync and host to a web server
*/
function Book (title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    

}
const book1=new Book("The lord of the rings","Tolkien",1000,true)

const myLibrary = [];



function addBookToLibrary() {
    let title=document.querySelector('#title').value
    
    let author=document.querySelector('#author').value
    let pages=document.querySelector('#pages').value
    let read=document.querySelector('#read').value
    myLibrary.push(new Book(title,author,pages,read))
    const tr=document.createElement("tr")
    
    myLibrary.forEach(function(book){
        const tr=document.createElement("tr")
        
        table.appendChild(tr)
        for (key in book) {
            const td=document.createElement("td")
            td.textContent=book[key]
            td.setAttribute('style','border:1px solid black')
            tr.appendChild(td)
            
        }
    })
}
/* addBookToLibrary("The lord of the rings","Tolkien",1000,true)
addBookToLibrary("You","Bill Harr",500,false)
addBookToLibrary("Regina Carlotta","Netflix",300,true) */


const buttAddBook=document.querySelector('#addBook')
buttAddBook.addEventListener('click',addBookToLibrary)


const table=document.querySelector('.container')

myLibrary.forEach(function(book){
    const tr=document.createElement("tr")
    
    table.appendChild(tr)
    for (key in book) {
        const td=document.createElement("td")
        td.textContent=book[key]
        td.setAttribute('style','border:1px solid black')
        tr.appendChild(td)
        
    }
})

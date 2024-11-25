function Book (title,author,pages,read,id=null){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    

}

const myLibrary = [];



function addBookToLibrary() {
    let title=document.querySelector('#title').value
    let author=document.querySelector('#author').value
    let pages=document.querySelector('#pages').value
    let read=document.querySelector('#read').checked
    let newBook=new Book(title,author,pages,read)
    
    myLibrary.push(newBook)
    createLibrary()
    
    
}



const buttAddBook=document.querySelector('#addBook')
buttAddBook.addEventListener('click',addBookToLibrary)


const table=document.querySelector('.container')



function removeRow(event){
    let indexToRemove=event.currentTarget.id
    
    myLibrary.splice(indexToRemove,1)
    createLibrary()
}
function createLibrary(){
    
    let rows=document.querySelectorAll('tr:not(:first-child)')
    if (rows.length>0) {
        rows.forEach(function(child){child.remove()})
    }
    
    myLibrary.forEach(function(book){
        const tr=document.createElement("tr")
        
        table.appendChild(tr)
        for (key in book) {
            const td=document.createElement("td")
            td.textContent=book[key]
            td.setAttribute('style','border:1px solid black')
            tr.appendChild(td)
            
        }
        // remove button
        const removeButton=document.createElement("button")
        removeButton.setAttribute('type', 'button')
        removeButton.setAttribute('id', myLibrary.indexOf(book))
        removeButton.textContent='Remove'
        tr.appendChild(removeButton)
        removeButton.addEventListener('click',removeRow)
        // change read status
        const changeReadButton=document.createElement("button")
        changeReadButton.setAttribute('type', 'button')
        changeReadButton.setAttribute('id', myLibrary.indexOf(book))
        changeReadButton.textContent='Change Read Status'
        tr.appendChild(changeReadButton)
        changeReadButton.addEventListener('click',changeRead)
    })
    
}
function changeRead(event){
    let indexToChange=event.currentTarget.id
    
    myLibrary[indexToChange].read=!myLibrary[indexToChange].read
    createLibrary()
}
function Book (title,author,pages,read,id=null){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.id=id

}


const myLibrary = [];



function addBookToLibrary() {
    let title=document.querySelector('#title').value
    let author=document.querySelector('#author').value
    let pages=document.querySelector('#pages').value
    let read=document.querySelector('#read').value
    let newBook=new Book(title,author,pages,read)
    newBook.id=myLibrary.length + 1
    console.log(newBook)
    myLibrary.push(newBook)

    const tr=document.createElement("tr")
    table.appendChild(tr)
    for (key in newBook) {
        if (key==='id') break
        const td=document.createElement("td")
        td.textContent=newBook[key]
        
        td.setAttribute('style','border:1px solid black')
        tr.appendChild(td)
        
    }
    // myLibrary.forEach(function(book){
    //     const tr=document.createElement("tr")
        
    //     table.appendChild(tr)
    //     for (key in book) {
    //         const td=document.createElement("td")
    //         td.textContent=book[key]
    //         td.setAttribute('style','border:1px solid black')
    //         tr.appendChild(td)
            
    //     }
    // })
}



const buttAddBook=document.querySelector('#addBook')
buttAddBook.addEventListener('click',addBookToLibrary)


const table=document.querySelector('.container')

myLibrary.forEach(function(book){
    const tr=document.createElement("tr")
    
    table.appendChild(tr)
    for (let i=0;i<4;i++) {
        const td=document.createElement("td")
        td.textContent=book[i]
        td.setAttribute('style','border:1px solid black')
        tr.appendChild(td)
        
    }
})

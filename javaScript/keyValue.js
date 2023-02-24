const state = [];

const addNewBook = (title, author) => {
  const id = Date.now(); // uuidv4()

  const newBook = {};
  const newBookContent = [{title: title, author: author}];
  newBook[id] = newBookContent;

  state.push(newBook);
} 

addNewBook('new title','new author')
console.log(JSON.stringify(state));

addNewBook('second title','second author')
console.log(JSON.stringify(state));

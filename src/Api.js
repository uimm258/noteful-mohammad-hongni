const BASE_URL='http://localhost:9090/';

function fetchWrapper(url,options={}){
  return fetch(url,options)
  .then(response=>response.json())
  .catch(console.log)
}

function getFolders(){
  return fetchWrapper(BASE_URL+'folders');
}

function getNotes(){
  return fetchWrapper(BASE_URL+'notes');
}

function deleteNote(noteId){
  return fetchWrapper(BASE_URL+'notes/'+noteId,{method:'DELETE'})
}

export default{
  getFolders,
  getNotes,
  deleteNote
}
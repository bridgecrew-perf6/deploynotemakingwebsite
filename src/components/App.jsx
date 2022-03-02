import React,{useState} from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes,setNotes]=useState([]);

  function addNote(newNote){
    setNotes((prevNotes)=>{
       return [...prevNotes,newNote];
  });
}
  function mapItem(items,index){
    return(
      <Note
      key={index}
      id={index}
       title={items.title}
      content={items.content}
      onDelete={deleteNote}
      />
    );
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote} />
      {notes.map(mapItem)}
      <Footer />
    </div>
  );
}

export default App;

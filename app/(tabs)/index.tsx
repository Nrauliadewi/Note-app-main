import AddNote from '@/components/screens/addNote'
import EditNote from '@/components/screens/editNote'
import Home from '@/components/screens/home'
import React, { useState } from 'react'

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNoteFunction,
  noteId,
  setNoteId,
  removeNoteByIdFunction
}: any) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} removeNoteByIdFunction={removeNoteByIdFunction} setNoteId={setNoteId} />
    case 'add':
      // Berikan function "addNote" ke component "AddNote"
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNoteFunction={editNoteFunction} noteId={noteId} noteList={noteList} />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteId, setNoteId] = useState()


  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title: any, desc: any) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNoteFunction = (id: number, title: string, desc: string) => {
    setNoteList(noteList.map(note =>
      note.id === id
        ? { ...note, title: title, desc: desc }
        : note
    ));
  };

  const removeNoteByIdFunction = () => {
    setNoteList(noteList.filter(note => note.id !== noteId));
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      // Berikan function addNote sebagai prop
      addNote={addNote}
      editNoteFunction={editNoteFunction}
      setNoteId={setNoteId}
      noteId={noteId}
      removeNoteByIdFunction={removeNoteByIdFunction}
    />
  );
}

export default App
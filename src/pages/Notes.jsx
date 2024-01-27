import {FcSearch} from 'react-icons/fc'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'
import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'
const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
        <header className='notes__header'>
            {!showSearch &&< h2>My Notes</h2>}
            {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='keyword...' /> }
            <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <AiOutlineCloseCircle/> : <FcSearch/>}</button>
        </header>
        <div className="notes__container">
            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
            }
        </div>
    <Link to="/create-note" className='btn add__btn'><BsPlusLg></BsPlusLg></Link>
    </section>
  )
}
export default Notes
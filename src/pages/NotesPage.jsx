import React from 'react'
import GroupsHandler from '../components/hoc/GroupsHandler'
import NotesArea from '../components/notesSection/NotesArea'

function NotesPage() {
  return (
    <GroupsHandler>
        <NotesArea/>
    </GroupsHandler>
  )
}
export default NotesPage;
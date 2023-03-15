import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Note = (props) => (
    <div className='tile'>
        <p>{props.note.title}</p>
        <p>{props.note.content}</p>
        <p>
            <Link className='btn btn-link' to={`/notes/${props.note._id}`}>Open</Link> |
            <button className='btn btn-link' onClick={() => {
                props.deleteNote(props.note._id);
            }}
            >
                Delete
            </button>
        </p>
    </div>
);

export default function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
            const response = await fetch(`http://localhost:8080/notes/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const notes = await response.json()
            setNotes(notes);
        }

        getNotes();

        return;
    }, [notes.length]);

    async function deleteNote(id) {
        await fetch(`http://localhost:8080/notes/${id}`, {
            method: 'DELETE'
        });

        const newNotes = notes.filter((el) => el._id !== id );
        setNotes(newNotes);
    }

    function noteList() {
        return notes.map((note) => {
            return (
                <Note
                    note={note}
                    deleteNote={() => deleteNote(note._id)}
                    key={note._id}
                />
            );
        });
    }

    return (
        <div className='note-list'>
            <div>
                {noteList()}
            </div>
        </div>
    );
};
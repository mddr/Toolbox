import React, { useState } from 'react';
import styled from 'styled-components';

import { notesMock } from './notes.mock';
import { NoteType } from './notes.model';
import { ViewWrapper } from '../shared/styled';
import { Note } from './Note';
import { NewNote } from './NewNote';

export function Notes() {
  const [notes, setNotes] = useState<NoteType[]>(notesMock);

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };

  const addNote = (content: string) => {
    if (!content) {
      return;
    }
    const id = `id-${new Date().toISOString()}`;
    setNotes([...notes, { id, content }]);
  };

  return (
    <ViewWrapper>
      <WithPadding>
        <NewNote addNote={addNote} />
      </WithPadding>

      <WithPadding>
        {notes?.length ? (
          notes.map((note) => {
            return (
              <WithPadding key={note.id}>
                <Note note={note} deleteNote={deleteNote} />
              </WithPadding>
            );
          })
        ) : (
          <EmptyMsg data-test-id={'empty-message'}>
            {' '}
            No notes available!
          </EmptyMsg>
        )}
      </WithPadding>
    </ViewWrapper>
  );
}

const WithPadding = styled.div`
  padding-bottom: 3rem;
`;

const EmptyMsg = styled.p`
  text-align: center;
`;

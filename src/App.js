import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TextEditor from './TextEditor';
import { v4 as uuidV4 } from 'uuid';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from '/' to '/documents/:id' with a unique UUID */}
        <Route
          path='/'
          element={<Navigate to={`/documents/${uuidV4()}`} replace />}
        />

        {/* Route to render the TextEditor component */}
        <Route path="/documents/:id" element={<TextEditor />} />

        {/* Optional: Handle 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

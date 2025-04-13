import React from 'react';
import BookList from './components/BookList';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <BookList />
      </div>
    </LanguageProvider>
  );
}

export default App;
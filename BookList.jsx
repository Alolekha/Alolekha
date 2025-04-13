import React, { useState } from 'react';
import BookCard from './BookCard';
import { useLang } from '../context/LanguageContext';
import { translations } from '../translations';

const books = [
  {
    id: 1,
    title: 'পথের পাঁচালী',
    author: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়',
    rating: 5,
    coverImage: 'https://via.placeholder.com/94x189',
    openLink: '#',
    downloadLink: '#',
    category: 'Novel',
  },
  {
    id: 2,
    title: 'Chander Pahar',
    author: 'Bibhutibhushan Bandyopadhyay',
    rating: 4,
    coverImage: 'https://via.placeholder.com/94x189',
    openLink: '#',
    downloadLink: '#',
    category: 'Adventure',
  },
];

const BookList = () => {
  const { lang, setLang } = useLang();
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder={translations[lang].search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <button
          onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
          className="ml-4 px-3 py-2 bg-blue-500 text-white rounded"
        >
          {lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
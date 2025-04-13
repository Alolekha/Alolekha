import React, { useState } from 'react';
import { FaStar, FaDownload, FaEye, FaFacebook, FaWhatsapp, FaLink, FaShareAlt } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { translations } from '../translations';

const BookCard = ({ book }) => {
  const { lang } = useLang();
  const t = translations[lang];
  const [openModal, setOpenModal] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t.linkCopied);
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(book.title + " - " + window.location.href)}`;

  return (
    <>
      <div className="w-[94px] h-[189px] cursor-pointer" onClick={() => setOpenModal(true)}>
        <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover rounded" />
        <div className="text-center mt-2 text-sm">
          <p className="font-bold">{book.title}</p>
          <p className="text-gray-600">{book.author}</p>
          <div className="flex justify-center text-yellow-500">
            {[...Array(book.rating)].map((_, i) => <FaStar key={i} />)}
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md w-full relative">
            <img src={book.coverImage} alt={book.title} className="w-full h-auto mb-4 rounded" />
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-gray-600 mb-2">{book.author}</p>

            <div className="flex justify-around mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2" onClick={() => window.open(book.openLink, '_blank')}>
                <FaEye /> {t.open}
              </button>

              <div className="relative">
                <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2" onClick={() => setShowShare(!showShare)}>
                  <FaShareAlt /> {t.share}
                </button>
                {showShare && (
                  <div className="absolute top-12 right-0 bg-white border rounded shadow-md p-2 z-10 flex gap-4">
                    <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl" title="Facebook">
                      <FaFacebook />
                    </a>
                    <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="text-green-500 text-xl" title="WhatsApp">
                      <FaWhatsapp />
                    </a>
                    <button onClick={handleCopyLink} className="text-gray-700 text-xl" title="Copy Link">
                      <FaLink />
                    </button>
                  </div>
                )}
              </div>

              <a href={book.downloadLink} className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2" download>
                <FaDownload /> {t.download}
              </a>
            </div>

            <button className="mt-4 text-sm text-gray-500 underline" onClick={() => { setOpenModal(false); setShowShare(false); }}>
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCard;
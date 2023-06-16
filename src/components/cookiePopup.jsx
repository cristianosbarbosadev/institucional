import React, { useState } from 'react';

const CookiePopup = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    // Lógica para armazenar a preferência do usuário (por exemplo, em localStorage ou em um cookie)
    setAccepted(true);
  };

  const handleDecline = () => {
    // Lógica para armazenar a preferência do usuário (por exemplo, em localStorage ou em um cookie)
    setAccepted(false);
  };

  return (
    <>
      {!accepted && (
        <div>
          <div className="cookie-popup">
            <p>
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao
              aceitar os cookies, você nos ajuda a personalizar conteúdos e
              anúncios, além de analisar o tráfego do site. Caso prefira não
              utilizar os cookies, determinadas funcionalidades podem ser
              limitadas.
            </p>
            <button className="accept-btn" onClick={handleAccept}>
              Aceitar
            </button>
            <button onClick={handleDecline}>Recusar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePopup;

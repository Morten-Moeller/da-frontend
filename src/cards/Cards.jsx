import { useCallback, useEffect, useState } from 'react';
import { Card } from './Card';

export const Cards = () => {
  const [cards, setCards] = useState([]);

  const addCard = useCallback(() => {
    setCards([...cards, { title: 'Neuer Title', content: 'Neuer Content' }])
  }, [cards])

  useEffect(() => {
    const cardsFromApi = [{ title: 'api title', content: 'api content' }];
    if (!cards.length) {
      setCards(cardsFromApi);
    }

    if (cards.length > 5) {
      window.alert('I can not handle this many cards');
    }
  }, [cards])

  return (
    <div>
      <button onClick={() => addCard()}>
        Add Card
      </button>
      {
        cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))
      }
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import './App.scss';
import Data from './data/pays.json';
import './mixins.scss';
import Collapse from './Components/Collapse/Collapse.js'
import './Components/Collapse/Collapse.scss'

interface Country {
  name_fr: string;
  flag: string;
  name_native: string;
}

const Pays: Country[] = Data;

const App: React.FC = () => {
  useEffect(() => {
    generateRandomOptions();
  }, []);

  const [isBonneVisible, setIsBonneVisible] = useState(false);
  const [isMauvaiseVisible, setIsMauvaiseVisible] = useState(false);
  const [options, setOptions] = useState<number[]>([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [showNextButton, setShowNextButton] = useState(false); // Nouveau state pour gérer l'affichage du bouton "Suivant"

  const generateRandomOptions = () => {
    const randomIndices: number[] = [];
    while (randomIndices.length < 4) {
      const randomIndex = Math.floor(Math.random() * Pays.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    setOptions(randomIndices);
    setCorrectAnswerIndex(Math.floor(Math.random() * randomIndices.length));
    setIsBonneVisible(false);
    setIsMauvaiseVisible(false);
    setShowNextButton(false); // Cacher le bouton "Suivant" après avoir généré de nouvelles options
  };

  const handleOptionClick = (index: number) => {
    if (correctAnswerIndex !== null && index === correctAnswerIndex) {
      setIsBonneVisible(true);
      setIsMauvaiseVisible(false);
      setShowNextButton(true); // Afficher le bouton "Suivant" après que l'utilisateur a répondu
    } else {
      setIsBonneVisible(false);
      setIsMauvaiseVisible(true);
    }
   
  };

  const handleNextClick = () => {
    generateRandomOptions();
  };

  return (
    <div className="Container">
      <h1>A quel pays appartient ce magnifique drapeau ?</h1>
      {correctAnswerIndex !== null && options[correctAnswerIndex] !== undefined && (
        <img
          className="drapeau"
          src={Pays[options[correctAnswerIndex]].flag}
          alt={Pays[options[correctAnswerIndex]].name_fr}
        />
      )}
      <div className="btncontainer">
        {options.map((index, i) => (
          <button key={i} className="btn" onClick={() => handleOptionClick(i)}>
            {Pays[index].name_fr}
          </button>
        ))}
      </div>
      {isBonneVisible && (
        <div>
          <div className="bonne">Bonne réponse !</div>
          {correctAnswerIndex !== null && (
            <Collapse
              title="Informations Anexes"
              content={"Nom Natif : " + Pays[options[correctAnswerIndex]].name_native}
              isOpen={false}
            />
          )}
        </div>
      )}
      {isMauvaiseVisible && (
        <div className="mauvaise">
          Mauvaise réponse !<br /> <div>Choisissez un autre pays</div>
        </div>
      )}
      {showNextButton && (
        <button className="btn" onClick={handleNextClick}>
          Pays Suivant
        </button>
      )}
    </div>
  );
};

export default App;
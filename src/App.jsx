import { useState } from 'react';
import './App.css';
import twitterIcon from './assets/twitter-icon.png';

const quoteData = [
  {
    text: "Ne demandez jamais quelle est l'origine d'un homme ; interrogez plutôt sa vie et vous saurez ce qu'il est.",
    author: "El Amir Abd El-Kader"
  },
  {
    text: "Je suis de la race des guerriers. Ils peuvent me tuer mais ils ne me feront jamais taire. Je préfère mourir pour mes idées que de lassitude ou de vieillesse.",
    author: "Matoub Lounès"
  },
  {
    text: "Le silence, c'est la mort, et toi, si tu te tais, tu meurs et si tu parles, tu meurs. Alors dis et meurs !",
    author: "Tahar Djaout"
  },
  {
    text: "En Algérie, les génies ne brillent pas, ils brûlent. Lorsqu'ils échappent à l'autodafé, ils finissent sur le bûcher.",
    author: "Yasmina Khadra"
  },
  {
    text: "C'est dans la différence que je trouve mon identité.",
    author: "Matoub Lounès"
  },
  {
    text: "Il y a aussi un concept sur lequel j'aime bien faire friser les cheveux des gens : c'est dire que l'Algérie a été inventée par la France, qu'elle a été créée de toute pièce en 1830 dans des bureaux. La réalité, c'est que l'Algérie a toujours existé avant cette date et que son histoire est bien plus complexe que ce qu'on veut nous faire croire.",
    author: "Aziz Chouaki"
  },
  {
    text: "Quand la cause est juste, l'avenir n'est pas insulté.",
    author: "Boualem Bessaïh"
  },
  {
    text: "Il te restera toujours tes rêves pour réinventer le monde que l'on t'a confisqué.",
    author: "Yasmina Khadra"
  },
  {
    text: "Comme ils me paraissent lourds, tous ces hommes en foule à l'opinion indécise.",
    author: "Assia Djebar"
  },
  {
    text: "Vivre, c'est vieillir, c'est-à-dire changer.",
    author: "Malek Haddad"
  },
  {
    text: "Lorsque le kabyle revient dans sa montagne après une longue absence le temps qu'il a passé ailleurs ne lui apparaît plus que comme un rêve. Le rêve peut être beau ou mauvais, mais la réalité ne la retrouve que chez lui, dans sa maison, dans son village.",
    author: "Mouloud Feraoun"
  },
  {
    text: "comment se fait-il qu'un pays dirigé par une femme DIHIA est devenu aujourd'hui un enfer pour les femmes ?",
    author: "Kateb Yacine"
  },
  {
    text: "Tant que j'ai les yeux ouverts je vais éclairer les malheureux.",
    author: "Matoub Lounès"
  },
  {
    text: "Les hommes morts pour l'idéal patriotique sont journellement honorés et respectés.",
    author: "Ferhat Abbas"
  },
  {
    text: "Le bonheur d'avoir des voisins qui rendent service, aident, prêtent, secourent, compatissent ou tout au moins partagent notre sort ! Nous craignons l'isolement comme la mort.",
    author: "Mouloud Feraoun"
  },
  {
    text: "Être un bourreau d'hommes, c'est la meilleure manière de décrocher les étoiles.",
    author: "Kateb Yacine"
  },
  {
    text: "L'absence d'itinéraire abolit la notion du temps.",
    author: "Kateb Yacine"
  }
];

const Icon = ({ className, transform, ...props }) => (
  <svg 
    className={`icon ${className}`} 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    transform={transform} 
    {...props}
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
  </svg>
);



function App() {
  const colors = [
    "#FFDDC1", // Peach
    "#FFABAB", // Light Pink
    "#FFC3A0", // Light Coral
    "#B9FBC0", // Light Green
    "#A0C4FF", // Light Blue
    "#D5AAFF"  // Lavender
  ];

  const colorClasses = {
    "#FFDDC1": "icon-peach",
    "#FFABAB": "icon-pink",
    "#FFC3A0": "icon-coral",
    "#B9FBC0": "icon-green",
    "#A0C4FF": "icon-blue",
    "#D5AAFF": "icon-lavender"
  };

  const [quote, setQuote] = useState(quoteData[Math.floor(Math.random() * quoteData.length)]);
  const [bgColor, setBgColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [iconClass, setIconClass] = useState(colorClasses[bgColor]);

  const handleNewQuote = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(quoteData[Math.floor(Math.random() * quoteData.length)]);
    setBgColor(newColor);
    setIconClass(colorClasses[newColor]);
  };

  return (
    <div className="main" style={{ backgroundColor: bgColor }}>
      <div id="quote-box">
        <p id="text" style={{ color: bgColor }}>
          <Icon 
            className={iconClass} 
            transform='scaleX(-1) scaleY(-1)' 
            style={{ marginRight: '8px' }} 
          />
          {quote.text}
          <Icon 
            className={iconClass} 
            style={{ marginLeft: '8px' }} 
          />
        </p>
        <h2 id="author">- {quote.author}</h2>
        <div className="actions">
          <button className="button" style={{ backgroundColor: bgColor }} onClick={handleNewQuote}>New Quote</button>
          <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: bgColor }}>
            <img src={twitterIcon} alt="Tweet" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

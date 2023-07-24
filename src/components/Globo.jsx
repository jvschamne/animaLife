import './Globo.css'
import Globe from 'react-globe.gl';
import imagem from '../../src/assets/earth-blue-marble.jpg'
import { useState } from 'react';

import img1 from '../assets/loboguara.webp'
import img2 from '../assets/micoleaodourado.webp'
import img3 from '../assets/botocorderosa.webp'

//elemento de marcadores
const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;


import data from '../data/data'

const gData = [
  {
  local: "São Paulo",
  lat: -23.5505,
  lng: -46.6333,
  size: 20,
  color: 'white',
  animals: [
    {
      name: "Lobo Guará",
      image: img1,
    },
    {
      name: "Mico-leão-dourado",
      image: img2
    },
    {
      name: "Boto-cor-de-rosa",
      image: img3
    },
  ]
  },
  {
    local: "Curitiba",
    lat: -25.4284,
    lng: -49.2733,
    size: 15,
    color: 'white',
    animals: [
      {
        name: "Lobo Guará",
        image: img1,
      },
      {
        name: "Mico-leão-dourado",
        image: img2
      },
      {
        name: "Boto-cor-de-rosa",
        image: img3
      },
    ]
  },
  {
    local: "Pernambuco",
    lat: -8.0543,
    lng: -34.8813,
    size: 30,
    color: 'white',
    animals: [
      {
        name: "Lobo Guará",
        image: img1,
      },
      {
        name: "Mico-leão-dourado",
        image: img2
      },
      {
        name: "Boto-cor-de-rosa",
        image: img3
      },
    ]
  },

]



const Globo = ({ funcao }) => {

  const [selected, setSelected] = useState("")
  

  return (
    <div className='Globe'>
      <Globe    
        globeImageUrl={imagem}
        htmlElementsData={data}
        htmlElement={(d) => {
          const el = document.createElement('div');
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style.pointerEvents = 'auto';
          el.style.cursor = 'pointer';
          el.onclick = () => funcao(d);
          return el;
        }}
      
      /> 
    </div>
  )
}

export default Globo
 
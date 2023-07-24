import img1 from '../assets/loboguara.webp';
import img2 from '../assets/micoleaodourado.webp';
import img3 from '../assets/botocorderosa.webp';
import img4 from '../assets/orangotango-de-Sumatra.jpg';
import img5 from '../assets/ursopanda.jpg';
import img6 from '../assets/ursopolar.webp';
import img7 from '../assets/oncapintada.jpg';
import img8 from '../assets/gorila.jpg';
import img9 from '../assets/arara-azul.webp';
import img10 from '../assets/tigresumatra.jpg';
import img11 from '../assets/lemure.jpg'
import img12 from '../assets/fossa.avif'
import img13 from '../assets/bonobo.jpg'
import img14 from '../assets/coala.jpg'

const gData = [
  {
    local: "Brasil",
    lat: -17.6490,
    lng: -57.7350,
    size: 20,
    color: 'white',
    animals: [
      {
        name: "Mico-leão-dourado",
        image: img2,
        description: "O Mico-leão-dourado (Leontopithecus rosalia) é um primata pequeno e vibrante, caracterizado por sua pelagem laranja-dourada. É endêmico da Mata Atlântica no Brasil e altamente ameaçado de extinção devido à perda de habitat e à caça ilegal."
      },
      {
        name: "Boto-cor-de-rosa",
        image: img3,
        description: "O Boto-cor-de-rosa (Inia geoffrensis) é um golfinho de água doce que vive na Bacia Amazônica. É conhecido por sua coloração rosada e é um símbolo da região. Infelizmente, está ameaçado devido à poluição, pesca predatória e construção de barragens."
      },
      {
        name: "Arara-azul",
        image: img9,
        description: "A arara-azul (Anodorhynchus hyacinthinus) é a maior espécie de arara do mundo, com plumagem azul intensa e uma forte mandíbula. São altamente inteligentes e vivem em casais monogâmicos. Infelizmente, estão ameaçadas devido à perda de habitat devido à expansão agrícola e do desmatamento, além do tráfico ilegal de animais silvestres."
      },
      {
        name: "Onça-pintada",
        image: img7,
        description: "A onça-pintada (Panthera onca) é o maior felino das Américas e possui uma bela pelagem amarela com manchas pretas. Infelizmente, estão ameaçadas devido à caça ilegal, perda de habitat e conflitos com humanos que têm levado ao declínio de suas populações."
      },
    ]
  },
  {
    local: "República do Congo",
    lat: -0.2280,
    lng: 15.8277,
    size: 25,
    color: 'green',
    animals: [
      {
        name: "Gorila",
        image: img8,
        description: "O lêmure-de-cauda-anelada é um primata conhecido por sua cauda longa e listrada. Eles são endêmicos de Madagascar. Infelizmente, estão ameaçados devido ao desmatamento, queimadas e caça ilegal que têm afetado suas populações."
      },
      {
        name: "Bonobo",
        image: img13,
        description: "O Bonobo (Pan paniscus) é um primata conhecido por ser um dos parentes mais próximos do ser humano. Eles são encontrados apenas na República Democrática do Congo, na África Central. Os bonobos são conhecidos por sua sociedade matriarcal, onde as fêmeas desempenham um papel importante na liderança do grupo. São animais muito inteligentes e sociais, com um comportamento complexo que envolve o uso de ferramentas e habilidades comunicativas avançadas. Infelizmente, os bonobos estão ameaçados de extinção devido à perda de habitat, caça ilegal e conflitos com humanos. Esforços de conservação são essenciais para proteger essa espécie única e garantir sua sobrevivência no futuro."
      },
    ]
  },
  {
    local: "Austrália",
    lat: -25.2744,
    lng: 133.7751,
    size: 25,
    color: 'green',
    animals: [
      {
        name: "Coala",
        image: img14,
        description: "O coala (Phascolarctos cinereus) é um marsupial arborícola nativo da Austrália. Conhecido por sua aparência fofa e pelagem cinza, ele se alimenta principalmente de folhas de eucalipto. Infelizmente, devido à destruição de seu habitat e outros fatores, o coala está atualmente classificado como uma espécie vulnerável."
      },
    ]
  },
  {
    local: "China",
    lat: 35.8617,
    lng: 104.1954,
    size: 25,
    color: 'yellow',
    animals: [
      {
        name: "Urso Panda",
        image: img5,
        description: "O urso panda (Ailuropoda melanoleuca) é um mamífero nativo das regiões montanhosas da China. Eles são conhecidos por sua distintiva pelagem preta e branca e são classificados como carnívoros, mas principalmente se alimentam de bambu. Devido à perda de habitat e outros fatores, o urso panda é uma espécie ameaçada e está sob proteção para conservação de sua população."
      },
    ]
  },
  {
    local: "Madagascar, África",
    lat: -18.8792,
    lng: 47.5079,
    size: 25,
    color: 'green',
    animals: [
      {
        name: "Lêmure-de-cauda-anelada",
        image: img11,
        description: "O lêmure-de-cauda-anelada é um primata conhecido por sua cauda longa e listrada. Eles são endêmicos de Madagascar. Infelizmente, estão ameaçados devido ao desmatamento, queimadas e caça ilegal que têm afetado suas populações."
      },
      {
        name: "Fossa",
        image: img12,
        description: "A fossa é o maior carnívoro de Madagascar, se assemelhando a uma mistura de gato e civeta. Infelizmente, estão ameaçadas devido à perda de habitat devido ao desmatamento e caça ilegal das fossas e suas presas."
      },
    ]
  },
  {
    local: "Sumatra, Indonésia",
    lat: 0.7893,
    lng: 101.3327,
    size: 41, // Em km²
    color: 'yellow',
    animals: [
      {
        name: "Orangotango-de-sumatra",
        image: img4,
        description: "O orangotango-de-sumatra é um dos grandes primatas encontrados apenas na ilha de Sumatra, na Indonésia. Infelizmente, estão criticamente ameaçados devido à perda de habitat causada pelo desmatamento e pela caça ilegal."
      },
      {
        name: "Tigre-de-sumatra",
        image: img10,
        description: "O tigre-de-sumatra é uma das menores subespécies de tigre, também encontrada em Sumatra. Infelizmente, estão criticamente ameaçados de extinção devido à caça ilegal e à perda de habitat devido ao desmatamento."
      },
    ]
  },
  {
    local: "Pólo Norte",
    lat: 90.0000,
    lng: -135.0000,
    size: 10, // Tamanho fictício para representar apenas a região do Pólo Norte
    color: 'white',
    animals: [
      {
        name: "Ursopolar",
        image: img6,
        description: "O urso polar (Ursus maritimus) é o maior carnívoro terrestre do mundo e é nativo das regiões do Ártico, incluindo o Pólo Norte. Eles dependem principalmente do gelo marinho para caçar focas, mas estão enfrentando desafios significativos devido ao derretimento do gelo causado pelo aquecimento global, tornando sua sobrevivência cada vez mais difícil."
      },
    ]
  },
];

export default gData;

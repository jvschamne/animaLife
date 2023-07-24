import './App.css'
import Globo from './components/Globo';
import { useState } from 'react';
import Card from './components/Card';


function App() {
  const [selectedPlace, setselectedPlace] = useState("")
  //
  const [selectedAnimal, setselectedAnimal] = useState("")
  const [animalImage, setAnimalImage] = useState("")
  const [animalInfo, setAnimalInfo] = useState("")


  const updateLocal = (local) => {
    setselectedPlace(local)
    setselectedAnimal("")
    console.log(local)
  }

  const selectAnimal = (name, image, info) => {
    setselectedAnimal(name)
    setAnimalImage(image)
    setAnimalInfo(info)
  }


  return (
    <div className="container">
    
      <div className='headline'>
        <h1>AnimaLife</h1>
      </div>
      {selectedAnimal === "" && selectedPlace === "" && <div className="info">
        <h1>Selecione um Local</h1>
        <p>Escolha uma localização no globo para visualizar os animais em risco de extinção</p>
        
      </div>
      }
      {selectedAnimal === "" && selectedPlace !== "" && <div className="info">
        <h1>Local: {selectedPlace.local}</h1>
        {selectedPlace !== "" &&
          selectedPlace.animals.map((elem) =>

            <Card name={elem.name} image={elem.image} description={elem.description} selectAnimalFuncion={selectAnimal}/>
          )
        }
        
      </div>
      }

      {selectedAnimal !== "" && 
        <div className="info">
          <h1>{selectedAnimal}</h1>
          <img src={animalImage} alt="" />
          <p>{animalInfo}</p>
        </div>
      } 

      <Globo funcao={updateLocal}/>
    </div>
    
  )
}

export default App

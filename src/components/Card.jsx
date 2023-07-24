import './Card.css'

const Card = ({ name, image, description, selectAnimalFuncion}) => {

    const info = "Animal bem divertido"

    return(
        <div className="Card" onClick={() => selectAnimalFuncion(name, image, description)}>
            <img src={image} />
            <h3>{name}</h3>
        </div>
    )
}

export default Card
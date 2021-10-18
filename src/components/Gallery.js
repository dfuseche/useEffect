import React, {useState, useEffect} from 'react';
import { Card } from './Card';
import './Gallery.css'

function Gallery() {
    // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
    // We're setting the default value of dogImage to null, so that while we wait for the
    // fetch to complete, we dont attempt to render the image
  let [cardInfo, setCardInfo] = useState([])

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setCardInfo(data.results))
  },[]) 

  return (
    <div >
        <div className = 'container'>
          {cardInfo.map((element) => ( 
            <Card
            title={element.name}
            genero={element.gender}
            status={element.status}
            imagen={element.image}
            />
         
        ))}
      </div>
    </div>
  );
}

export default Gallery;
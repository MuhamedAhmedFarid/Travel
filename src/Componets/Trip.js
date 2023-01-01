import React from 'react'
import './trip.css'
import TripData from './TripData'
import imgCard1 from '../images/5.jpg'
import imgCard2 from '../images/6.jpg'
import imgCard3 from '../images/8.jpg'

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trip</h1>
        <p>You can discover unique destinations using Google Maps.</p>

        <div className='tripcard'>
            <TripData heading='Trip in Indonesia' 
            img={imgCard1}
            text='Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea'
            />

            <TripData heading='Trip in Malayasia' 
            img={imgCard2}
            text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. "
            />
            <TripData heading='Trip in France' 
            img={imgCard3}
            text='France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. '
            />
        </div>
    </div>

  )
}

export default Trip
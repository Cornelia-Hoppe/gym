import t1 from '../assets/trainer1.jpg';
import t2 from '../assets/trainer2.jpg';
import t3 from '../assets/trainer3.jpg';
import t4 from '../assets/trainer4.jpg';


import React, { useState, createContext } from 'react'

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {
    const trainer_data = [
        {
            id: 1,
            name: 'M O',
            gender: `female`,
            pic: t1,
            type: 'gym',
            qualification: 'Personal Trainer )',
            experience: 6,
            slug: 'm'  
         },
        {
            id: 2,
            name: 'S Man',
            gender: `female`,
            pic: t2,
            type: 'gym',
            qualification: 'Personal Trainer ',
            experience: 4,
            slug: 'sta '  
       },
        {
            id: 3,
            name: 'Chs',
            gender: `male`,
            pic: t3,
            type: 'gym',
            qualification: 'ACSM Certified P',
            experience: 5,
            slug: 'ch'        
        },
        {
            id: 4,
            name: 'DP',
            gender: `male`,
            pic: t4,
            type: 'gym',
            qualification: 'Certified Personal Fitness',
            experience: 6,
            slug: 'd'        
        },
        
    ]

    const [trainers] = useState(trainer_data);

    return (
        <TrainerContext.Provider value={[...trainers]}>
            {props.children}
        </TrainerContext.Provider>
    )
}

export default TrainerContextProvider
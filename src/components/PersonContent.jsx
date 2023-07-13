import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PersonContent = (props) => {

    const {id} = useParams();

    const [person, setPerson] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => setPerson(response.data))
        .catch(err => console.log("These aren't the droids you're looking for"))
    }, [id])

    return (
        <div>
        <h1>{person.name}</h1>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
        <p>Hair Color: {person.hair_color}</p>
        <p>Skin Color: {person.skin_color}</p>
        </div>
    )
}

export default PersonContent

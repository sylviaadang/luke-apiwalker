import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlanetContent = (props) => {

        const {id} = useParams();

        const [planet, setPlanet] = useState("")

        useEffect(() => {
            axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanet(response.data);
                console.log(response.data)
            })
            .catch(err => console.log("These aren't the droids you're looking for"))
        }, [id])

        return (
            <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surfaceWater}</p>
            <p>Population: {planet.population}</p>
            </div>
        )
    }

export default PlanetContent

import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = () => {

    const [choice, setChoice] = useState('people');
    const [Id, setId] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("I AM HERE")
        console.log(choice,Id)
        navigate(`/${choice}/${Id}`);

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select onChange={e=> setChoice(e.target.value)} value={choice} name='star-wars' id='star-wars'>
                    <option value='people'>People</option>
                    <option value='planet'>Planet</option>
                </select>
                <label>ID:</label>
                <input onChange={e=> setId(e.target.value)} value={Id} name='number' type="number" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form

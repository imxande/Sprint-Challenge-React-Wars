import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarsCard from './StarsCard';
import {Container, Row} from 'reactstrap';

 function StarsGrid () {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            console.log(response.data.results);
            setPeople(response.data.results);
          })
          .catch(error => {
            console.log("the data was not return", error);
          });
      }, []);

      return (
        <Container>
            <Row>
            {people.map((results, index) => {
                return (
                <StarsCard
                    key = {index}
                    name = {results.name} 
                    gender = {results.gender}
                    hair = {results.hair_color}
                    eyes = {results.eye_color}
                    birthYear = {results.birth_year}
                    species = {results.species}

                />
                )
            })}
            </Row>
        </Container>
    );
} 

export default StarsGrid;
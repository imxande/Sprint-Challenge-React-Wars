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
            console.log(response.data);
            setPeople(response.data);
          })
          .catch(error => {
            console.log("the data was not return", error);
          });
      }, []);

      return (
        <Container>
            <Row>
            {people.map((result, index) => {
                return (
                <StarsCard
                    key = {index}
                    name = {people.name} 
                    gender = {people.gender}
                    hair = {people.hair_color}
                    eyes = {people.eye_color}
                    birthYear = {people.birth_year}
                    species = {people.species}

                />
                )
            })}
            </Row>
        </Container>
    );
} 

export default StarsGrid;
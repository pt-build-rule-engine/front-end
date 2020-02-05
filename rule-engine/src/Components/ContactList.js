import React, { useState, useEffect }from 'react';
import { withFormik, Form, Field } from "formik";
import styled from 'styled-components';
import axios from "axios";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";


export default function CharacterList(props) {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState();
    const [searchArg, setSearchArg] = useState();
  
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   axios
        .get("https://bw-rule-engine.herokuapp.com/api/contacts")
        .then(res => {
          console.log(res.data.results);
          if (!props.searchArg.values || props.searchArg.values.search === "") {
            setCharacters(res.data.results);
            console.log("No search");
          } else {
            setCharacters(res.data.results.filter((item) => {
              console.log("filtering", item.name + " === " + props.searchArg.values.search);
              return item.name.includes(props.searchArg.values.search);
            }))
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, [props.searchArg]);
  
    if (!characters) return (<p>Loading...</p>)
  
    return (
      <section className="character-list">
        {
          console.log(characters)
        }
        {
          characters.map((item) => {
            console.log("creating character card for ", item)
            return (
              <CharacterCard1 key={item.id} char={item}/>
            );
          })
        }
      </section>
    );
  }
  
  function SearchForm(status) {

    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    `;
  
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      setSearchTerm(status);
    }, [status]);
  
    let errorStyle = {
      color: "red"
    };
  
    return (
      <div>
        <StyledDiv>
          <Form>
            <Field type="text" name="search" placeholder="Search..." />
          </Form>
        </StyledDiv>
        <StyledDiv>
          <CharacterList searchArg={searchTerm} />
        </StyledDiv>
      </div>
    );
  }
  
  const FormikSearchForm = withFormik({
    mapPropsToValues({ search }) {
      return {
        search: search || "",
      };
    },
  
    handleSubmit(values, { setStatus }) {
      setStatus(values);
    }
  
  })(SearchForm);

  function CharacterCard1(props) {
    const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    background-color: lightblue;
    border: 1.2px solid black;
    color:white;
    font-family: 'Bangers', cursive;
    `;

    return (
      <StyledDiv>
        <p>{props.email}</p>
        <p>{props.companyName}</p>
        <p>{props.name}</p>
        <Link to={`/edit-contact/${props.contact.id}`}>Edit</Link>
      </StyledDiv>
    );
  }


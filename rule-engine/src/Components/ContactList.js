import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import ContactCard from './ContactCard';
import { getContacts } from '../Actions/getContacts';
import { deleteContact } from '../Actions/deleteContact';


const ContactList = (props) => {
    // TODO: Add useState to track data from useEffect
    // const [characters, setCharacters] = useState();
    // const [searchArg, setSearchArg] = useState();

//     useEffect(() => {
//       // TODO: Add API Request here - must run in `useEffect`
//       //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//    axios
//         .get("https://bw-rule-engine.herokuapp.com/api/contacts")
//         .then(res => {
//           console.log(res.data.results);
//           if (!props.searchArg.values || props.searchArg.values.search === "") {
//             setCharacters(res.data.results);
//             console.log("No search");
//           } else {
//             setCharacters(res.data.results.filter((item) => {
//               console.log("filtering", item.name + " === " + props.searchArg.values.search);
//               return item.name.includes(props.searchArg.values.search);
//             }))
//           }
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }, [props.searchArg]);
    // if (!characters) return (<p>Loading...</p>)


    useEffect(()=>{
        props.getContacts()
    },[])

    return (
        <section className="character-list">
            {console.log(props.contacts)}
            <SearchForm/>
            {props.contacts.map((item) => {
                console.log("creating character card for ", item)
                return (
                    <ContactCard 
                        key={item.id} 
                        item={item}
                        deleteContact={props.deleteContact}
                    />
                );
            })}
        </section>
    );
};

const mapStateToProps = state => {
    contacts: state.contacts.contacts
};


export default connect(mapStateToProps, { getContacts, deleteContact })(ContactList)


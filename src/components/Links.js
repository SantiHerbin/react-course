import React, { useEffect, useState } from 'react';
import LinkForm from "./LinkForm";

import {db} from '../firebase';

const Links = () => {

    const [links, setlinks] = useState([]);

    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        console.log('Página Agregada Satisfactoriamente!');
    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            })
            setlinks(docs);
        });
    }

    useEffect(() => {
        getLinks();
    }, []);

    return(
        <div className="container p-4">
            <LinkForm addOrEditLink={addOrEditLink} />
            <div className="col-md-8">
                {links.map(link => {
                    return <h1>{link.name}</h1>
                })}
            </div>
       </div>
    )
}

export default Links;
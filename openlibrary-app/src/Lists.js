import { useState } from 'react';
import './Lists.css';
import Makelist from './Makelist.js';

function Lists(){
    //temporary list of books to be displayed
    const temp = [
        {"Title":"Dune", "Author": "Frank Herbert", "Year": 1965, "Publisher":"Chilton Books"},
        {"Title":"Metro 2033", "Author": "Dmitry Glukhovsky", "Year": 2002, "Publisher":"Eksmo"}
    ];
    //assigning the list of books to different tables, they are currently the same for testing purposes
    const [favList, setFavList] = useState(temp);
    const [toReadList, setToReadList] = useState(temp);
    const [finList, setFinList] = useState(temp);

    return (
        <div>
            <Makelist list={favList} position={"left"} title={"Favorite Books"}/>
            <Makelist list={toReadList} position={"center"} title={"Books to read"}/>
            <Makelist list={finList} position={"right"} title={"Books read"}/>
        </div>
    )
}



export default Lists;
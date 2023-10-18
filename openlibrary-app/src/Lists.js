import { useState } from 'react';
import Makelist from './Makelist.js';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';

function Lists(){
    //temporary list of books to be displayed
    const temp = [
        {"Title":"Dune", "Author": "Frank Herbert", "Year": 1965, "Publisher":"Chilton Books"},
        {"Title":"Metro 2033", "Author": "Dmitry Glukhovsky", "Year": 2002, "Publisher":"Eksmo"},
        {"Title":"The Big Short", "Author": "Michael Lewis", "Year": 2010, "Publisher":"W. W. Norton & Company"}
    ];
    //assigning the list of books to different tables, they are currently the same for testing purposes
    const [favList, setFavList] = useState(temp);
    const [toReadList, setToReadList] = useState(temp);
    const [finList, setFinList] = useState(temp);

    return (
        <div>
            <Stack direction="horizontal" gap={5}>
                <Makelist list={favList} setList={setFavList} position={"left"} title={"Favorite Books"}/>
                <Makelist list={toReadList} setList={setToReadList} position={"center"} title={"Books to read"}/>
                <Makelist list={finList} setList={setFinList} position={"right"} title={"Books read"}/>
            </Stack>
        </div>
    )
}



export default Lists;
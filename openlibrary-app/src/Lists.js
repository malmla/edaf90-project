import { useState } from 'react';
import Makelist from './Makelist.js';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';

function Lists(props){
    //temporary list of books to be displayed for testing purposes.
    /*const temp = [
        {"Title":"Dune", "Author": "Frank Herbert", "Year": 1965, "Publisher":"Chilton Books"},
        {"Title":"Metro 2033", "Author": "Dmitry Glukhovsky", "Year": 2002, "Publisher":"Eksmo"},
        {"Title":"The Big Short", "Author": "Michael Lewis", "Year": 2010, "Publisher":"W. W. Norton & Company"}
    ];*/
    //Each list have a corrosponding state such that removing an item from a list updates the webpage.
    const [favList, setFavList] = useState(props.fav);
    const [toReadList, setToReadList] = useState(props.todo);
    const [finList, setFinList] = useState(props.fin);

    return (
        <div>
            <Stack direction="horizontal" gap={5}>
                <Makelist list={favList} setList={setFavList} title={"Favorite Books"}/>
                <Makelist list={toReadList} setList={setToReadList} title={"Books to read"}/>
                <Makelist list={finList} setList={setFinList} title={"Books read"}/>
            </Stack>
        </div>
    )
}



export default Lists;
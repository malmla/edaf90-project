//import { useState } from 'react';
import Makelist from './Makelist.js';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
//import { useContext } from 'react';
//import { ListContext, ListDispatchContext } from '../../listContexts.js';
//import listReducer from '../../listReducer.js';
//import Button from 'react-bootstrap/Button';
//import {handleAdd} from '../../listFunctions.js';

function Lists(){
    return (
        <div>
            <Stack direction="horizontal" gap={5}>
                <Makelist name="fav" title={"Favorite Books"}/>
                <Makelist name="todo" title={"Books to read"}/>
                <Makelist name="fin" title={"Books read"}/>
            </Stack>
        </div>
    )
}



export default Lists;
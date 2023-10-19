import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { handleRemoval } from '../../listFunctions';
import { useContext } from 'react';
import { ListContext, ListDispatchContext } from '../../listContexts.js';


function Makelist({name, title}){
    const list = useContext(ListContext)[name];
    const dispatch = useContext(ListDispatchContext)[name];
    const temp = [...list];

    return (
        <div>
        <h2>{title}</h2>
            <Table responsive striped bordered hover size="sm" variant='dark' id={name}>
                <thead>
                    <tr key={title}>
                        <th key={"Title"}>{"Title"}</th>
                        <th key={"Authors"}>{"Authors"}</th>
                        <th key={"Year"}>{"Year"}</th>
                        <th key={"Publisher"}>{"Publisher"}</th>
                        <th key={"button"}>Remove Book</th>
                    </tr>
                </thead>
                <tbody>
                    {temp.map(obj=> 
                        <tr key={obj["title"]} >
                            <td key={"title"}>{obj.title}</td>
                            <td key={"authors"}>{Object.values(obj.authors).reduce((a, name) => a + " " + name, "")}</td>
                            <td key={"publish_year"}>{obj.publish_year}</td>
                            <td key={"publisher"}>{obj.publisher}</td>
                            <td key={"button"} value={obj}>
                                {<Button 
                                    variant="secondary" 
                                    size="sm" 
                                    disabled={list.length === 0} 
                                    onClick={() => handleRemoval(obj, name, list, dispatch)}
                                    >"Remove book"
                                </Button>}
                            </td>
                </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default Makelist;
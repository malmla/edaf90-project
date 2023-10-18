import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


function Makelist({list, setList, title}){

    let temp = [...list];
    if(list.length === 0){
        temp = [{"Title":"Title", "Author": "Author", "Year": "Year", "Publisher":"Publisher"}]
    }

    const handleRemoval = (e, row) => {
        console.log(list);
        if(list.length>1){
            setList(list => {
                return list.filter(book => book.Title !== row.Title)
            })
        } else {
            setList([]);
        }

    };


    return (
        <div>
        <h2>{title}</h2>
            <Table responsive striped bordered hover size="sm" variant='dark' id={title}>
                <thead>
                    <tr key={title}>
                        {Object.keys(temp[0]).map(obj => 
                            <th key={obj}>{obj}</th>
                        )}
                        <th key={"button"}></th>
                    </tr>
                </thead>
                <tbody>
                    {temp.map(obj=> 
                        <tr key={obj["Title"]} >
                            {Object.values(obj).map(obj2 => 
                                <td key={obj2}>{obj2}</td>
                            )}
                            <td key={"button"} value={obj}>{<Button variant="secondary" size="sm" disabled={list.length === 0} onClick={e=>handleRemoval(e, obj)}>"Remove book"</Button>}</td>
                </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default Makelist;
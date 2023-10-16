function Makelist({list, position, title}){
    return (
        <div className = "fixed_header">
        <h2 className={position + "head"}>{title}</h2>
            <table className={position} id={title}>
                <thead>
                    <tr key={title}>
                        {Object.keys(list[0]).map(obj => 
                            <th>{obj}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {list.map(obj=> 
                        <tr key={obj["Title"]} >
                            {Object.values(obj).map(obj2 => 
                                <td>{obj2}</td>
                            )}
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Makelist;
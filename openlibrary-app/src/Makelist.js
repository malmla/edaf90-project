function Makelist({list, position, title}){
    return (
        <div className = "fixed_header">
        <h2 className={position + "head"}>{title}</h2>
            <table className={position} id={title}>
                <thead>
                    <tr key={title}>
                        <th style={{width: 147 + 'px'}}>Title</th>
                        <th style={{width: 238 + 'px'}}>Author</th>
                        <th >Year</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(obj=> 
                        <tr key={Object.keys(obj)} >
                            <td>{Object.keys(obj)}</td>
                            <td>{obj[Object.keys(obj)]["Author"]}</td>
                            <td>{obj[Object.keys(obj)]["Year"]}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Makelist;
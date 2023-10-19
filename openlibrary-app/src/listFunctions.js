    export function handleRemoval(listRow, name, list, dispatch){
        window.localStorage.setItem(name, JSON.stringify(list.filter(book => book.title !== listRow.title)));
        dispatch({
            type: "remove",
            row: listRow,
        });
    };

    export function handleAdd(test, name, list, dispatch){
        const temp = [...list]
        let boo = false;
        temp.forEach(book => {
            if (book.title===test.title){
                boo = true;
            } 
        });
        if (!boo){
            window.localStorage.setItem(name, JSON.stringify([...list,test]));
            dispatch({
                "type": "add",
                "title": test.title, 
                "authors": test.authors, 
                "publish_year": test.publish_year, 
                "publisher": test.publisher
            });
        } else{
            //testing purposes.
            console.log("Already present");
        }

    };
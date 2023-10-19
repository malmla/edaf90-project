export default function listReducer(lists, action) {
    switch (action.type) {
        case "add-to": {
            lists.forEach(list => {
                if (list.name !== action.name) {
                    return;
                }

                Object.values(list.list_items).find(entry => entry.key === action.key) ?
                    <></>
                    :
                    list.list_items.push({ "key": action.key, "title": action.title });


            });
            console.log([...lists])
            window.localStorage.setItem("lists", JSON.stringify(lists));
            return [...lists];
        }
        case "remove-from": { //todo
            lists.forEach(list => {
                if (list.name !== action.name) {
                    return;
                }
                let index = lists.indexOf(action.key);
                if (index > -1) {
                    lists.splice(index, 1);
                }
                window.localStorage.setItem("lists", JSON.stringify(lists));
            });
            console.log([...lists])
            window.localStorage.setItem("lists", JSON.stringify(lists));
            return [...lists];
        }
        case "delete": {
            let index = lists.indexOf(action.list);
            if (index > -1) {
                lists.splice(index, 1);
            }
            window.localStorage.setItem("lists", JSON.stringify(lists));
            return [...lists];
        }
        case "make": {
            lists = [...lists, { "name": action.name, "description": action.description, "list_items": [] }];
            window.localStorage.setItem("lists", JSON.stringify(lists));
            return lists;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
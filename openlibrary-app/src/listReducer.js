export default function listReducer(list, action){
    switch(action.type){
        case "add": {
            return [
                ...list,
                {
                    "title": action.title, 
                    "authors": action.authors, 
                    "publish_year": action.publish_year, 
                    "publisher":action.publisher
                }
            ];
        }
        case "remove": {
            //currently checks for title this is probably not correct and something like isbn-code should be used instead.
            return list.filter(book => book.title !== action.row.title);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
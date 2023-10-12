

export class Book{

    /**
     * Returns a dummy book object
     */
    static dummybook(){
        let b = new Book();
        b.authors = ["J.R.R. Tolkien"];
        b.title = "The Lord of the Rings"
        b.publisher = "Houghton Mifflin";
        b.publish_year = 1974;
        return b;
    }

    /**
     * Returns an array of Book objects
     * @param {string} string - Search string
     */
    static async search(string) {
        let searchres = await safeFetchJson("https://openlibrary.org/search.json?q=" + string.replaceAll(" ", "+"));
        let res = [];
        await safeFetchJson("http://openlibrary.org/works/OL27448W.json");
        await Promise.all(searchres.docs.map(async b => {
            let temp = null;
            try {
                if(b.key) {
                    temp = await safeFetchJson("http://openlibrary.org" + b.key + ".json")
                }
            }catch (e) {
                console.log(e);
            }
            res.push(getbook(b, temp))
        }));
        console.log(res);
        return "test";
    }
}

function getbook(b, work) {
    let book = new Book();
    book.title = b.title ? b.title : "Unknown Title";
    book.authors = b.author_name ? b.author_name : ["Unknown Author"];
    book.publish_year = b.first_publish_year ? b.first_publish_year : "Unknown publish year";
    book.publisher = "TODO"
    book.description = work && work.description ? work.description.value : "No description found";
    book.coverLink = b.cover_i ? "https://covers.openlibrary.org/b/id/" + b.cover_i + "-L.jpg" : "No cover found";
    return book;
}
function safeFetchJson(url) {
    return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`${url} returned status ${response.status}`);
            }
            return response.json();
        });
}
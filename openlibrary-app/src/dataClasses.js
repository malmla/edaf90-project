

export class Book {

    /**
    * Returns a dummy book object
    * todo: add description, add author object?
    */

    static dummybook(){
        let b = new Book();
        b.authors = ["J.R.R. Tolkien"]; //kanske som object ist?  typ [{namn, open library id}]
        b.title = "The Lord of the Rings"
        b.publishers = ["Houghton Mifflin"];
        b.publish_year = 1974;
        b.description = "bla bla bla";
        return b;
    }

    /**
    * Returns an array of Book objects
    * @param {string} string - Search string
    */

    static async search(string) {
        let searchres = await safeFetchJson("https://openlibrary.org/search.json?q=" + string.replaceAll(" ", "+"));
        let res = [];
        await Promise.all(searchres.docs.map(async b => {
            let temp = null;
            try {
                if(b.key) {
                    temp = await safeFetchJson("http://openlibrary.org" + b.key + ".json")
                }
            }catch (e) {
            }
            res.push(getbook(b, temp))
        }));
        return res;
    }
}

function getbook(b, work) {
    let book = new Book();
    book.key = b.key ? b.key : "No key";
    book.title = b.title ? b.title : "Unknown Title";
    book.authors = b.author_name ? b.author_name : ["Unknown Author"];
    book.authors_key = b.author_key ? b.author_key : ["Unknown Author"];
    book.publish_year = b.first_publish_year ? b.first_publish_year : "Unknown publish year";
    book.publisher = "TODO"
    book.description = work && work.description ? work.description.value : "No description found";
    book.coverLink = b.cover_i ? "https://covers.openlibrary.org/b/id/" + b.cover_i + "-L.jpg" : "No cover found";
    return book;
}

/*
    hämtar ENDAST första författaren
*/
async function fetchBookEdition(OLID) {
    let book = new Book();
    let edition = await safeFetchJson('https://openlibrary.org/books/' + OLID + '.json');

    book.title = edition.title ? edition.title : "Unknown Title";
    book.publishers = edition.publishers ? edition.publishers : "Unknown Publisher";
    book.publish_date = edition.publish_date ? edition.publish_date : "Unknown publish year";
    book.covers = edition.covers ? edition.covers : "No cover found";

    let work = await safeFetchJson('https://openlibrary.org' + edition.works[0].key + '.json');

    book.description = work.description ? work.description : "No description found"; //behöver ta hänsyn till olika format w.desc... w.desc..n.value

    if (work.description.value) {
        book.description = work.description.value
    }

    let author = await safeFetchJson('https://openlibrary.org' + work.authors[0].author.key + '.json');

    book.author_name = author.name ? author.name : "Name not found";
    book.author_key = author.key ? author.key : "Link not found";

    return book;
}

export class Author {

}

async function fetchAuthor(OLID) {
    let author = new Author();

    let remoteAuthor = await safeFetchJson('https://openlibrary.org/authors/' + OLID +'.json');

    author.bio = remoteAuthor.bio ? remoteAuthor.bio : "No bio found";
    author.birth_date = remoteAuthor.birth_date ? remoteAuthor.birth_date : "Field missing";
    author.death_date = remoteAuthor.death_date ? remoteAuthor.death_date : "Field missing";
    author.name = remoteAuthor.name ? remoteAuthor.name : "Name missing";
    author.fuller_name = remoteAuthor.fuller_name ? remoteAuthor.fuller_name : "Field missing";
    author.photos = remoteAuthor.photos ? remoteAuthor.photos : "Field missing";

    console.log(author);

    return author;
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

export {fetchBookEdition, fetchAuthor};
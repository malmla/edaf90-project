import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";


function AuthorView () {
    const author = useLoaderData();
    return (
        <div>
            <div>
                {author.name}
            </div>
            <div className="row-cols-2 row">
                <div className="col border">
                    {author.bio}
                </div>
                <div className="col border row-cols-2 row">
                    <div className="col border">
                        detaljer {/* behöver ta hänsyn till vilka data som finns */}
                    </div>
                    <div className="col border">
                        {/* skapa efter hur många bilder som finns */}
                        <AuthorCarousel />
                    </div>
                    <div className="row border m-auto">
                        <ButtonGroup size="sm">
                            <Button variant="secondary">Subscribe to updates {/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                            <Button variant="secondary">Tagged works {/* sökning på author-olid */}</Button>
                            <Button variant="secondary">Add to list {/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AuthorCarousel () {
    return (
        <>
            <Carousel className="bg-dark">
            <CarouselItem className="m-auto">
                    <img
                        src="https://covers.openlibrary.org/a/id/6433526-L.jpg "
                        alt="Image of author"
                    />

                    <CarouselCaption>

                    </CarouselCaption>
                </CarouselItem><CarouselItem className="m-auto">
                    <img
                        src="https://covers.openlibrary.org/a/id/6433524-L.jpg "
                        alt="Image of author"
                    />

                    <CarouselCaption>

                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </>
    );
}

export default AuthorView;
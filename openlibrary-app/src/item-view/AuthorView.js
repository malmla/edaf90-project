import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Spinner from "react-bootstrap/esm/Spinner";
import { useNavigation } from "react-router-dom";

//import Pagination from 'react-bootstrap/Pagination';
//import { useState } from "react";
import './styles.css'

function AuthorView () {
    const author = useLoaderData();
    const navigation = useNavigation();
    //const [worksPage, setWorksPage] = useState(1);
    return (
        <div>
            {
                navigation.state === "loading" ?
                <Spinner animation="border" role="status" className="mt-1">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <></>
            }
            <div className="my-2 border border-5 border-top-0 border-start-0 border-end-0 border-bottom border-primary">
                <h2>{author.name}</h2>
            </div>
            <div className="row m-auto py-3 justify-content-around btn-row">
                <ButtonGroup size="sm">
                    <Button variant="secondary">Subscribe to updates {/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                    <Button variant="secondary">Add to list {/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                </ButtonGroup>
            </div>
            <div className="row-cols-2 row">
                <div className="col col-5 mx-auto">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Bio, if available</h3></Accordion.Header>
                            <Accordion.Body>
                                {author.bio}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h3>Works</h3></Accordion.Header>
                            <Accordion.Body>
                                <div className="works-results">
                                    <ListGroup>
                                    {
                                        author.works.map(work => {
                                            return (
                                                <ListGroup.Item key={"link-to-"+ work.key} action href={work.key}>
                                                    <Stack direction="horizontal">
                                                        <div>
                                                            <Image src={getCoverThumb(work.covers)} />
                                                        </div>
                                                        <div className="ms-auto">{work.title}</div>
                                                    </Stack>
                                                </ListGroup.Item>)
                                        })
                                    }
                                    </ListGroup>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                <div className="col border-start mx-auto row-cols-2 row px-3">
                    <div className="col">
                        <h3>Details, if available</h3>
                        {author.birth_date === "Field missing" ? <></> : <><b>Born:</b> {author.birth_date} <br/></>}
                        {author.death_date === "Field missing" ? <></> : <><b>Dead:</b> {author.death_date} <br/></>}
                        {author.fuller_name === "Field missing" ? <></> : <><b>Full name:</b> {author.fuller_name} <br/></>}
                    </div>
                    <div className="col">
                        {/* kanske loader ist? vill egentligen ha fast storlek på carousel:n */}
                        {author.photos === "Field missing" ? <div className="author-photo-frame">No photos for this author</div> : 
                        <Carousel className="bg-dark author-photo-frame">
                        {
                            author.photos
                            .filter(photo_id => {
                                return photo_id !== -1;
                            })
                            .map(photo_id => {
                                return ( 
                                <CarouselItem key={photo_id}>
                                    <Image className="author-photo"
                                        src={"https://covers.openlibrary.org/a/id/" + photo_id + "-L.jpg"}
                                        alt={"Photo with photo_id " + photo_id + "of " + author.name}
                                        fluid
                                    />
                                </CarouselItem>
                                )
                            })
                        }
                        </Carousel>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

function getCoverThumb (covers) {
    if(covers === "No cover") {
        return "/no-cover.png";
    }
    
    covers = covers.filter(cover => {
        return cover !== -1;
    })

    if(covers.length < 1) {
        return "/no-cover.png";
    }

    return ("https://covers.openlibrary.org/b/id/" + covers[0] + "-S.jpg");
}

export default AuthorView;
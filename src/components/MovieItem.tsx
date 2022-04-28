import IDataList from "../models/IDataList";
import { Card, Button, Modal, Image, Table } from "react-bootstrap";
import { addToFavourites } from "../service/ApiCalls";
import { useState } from "react";

type Props = {
    movie: IDataList,
    handleFavourites: (movie: IDataList) => {},
    favouriteText: string
}

const MovieItem = ({ movie, handleFavourites, favouriteText }: Props) => {

    const [show, setShow] = useState(false);

    const {title,year,genres,poster,releaseDate,storyline,actors} = movie
    const movieDetails = [
        {
            header : "Title",
            content : title
        },
        {
            header : "Year",
            content : year
        },
        {
            header : "Genres",
            content : genres.toString()
        },
        {
            header : "Release Date",
            content : releaseDate
        },
        {
            header : "Description",
            content : storyline
        },
        {
            header : "Cast",
            content : actors.toString()
        }
    ];

    return (
        <>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${poster}`} onClick={() => { setShow(true) }} style={{aspectRatio:'7/10', cursor:'pointer'}}/>
                <Card.Body>
                   <span onClick={() => { handleFavourites(movie) }} className='mr-2' style={{cursor:'pointer'}}>Add to Favourites</span>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill ms-2'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
            
            <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image src={`${process.env.PUBLIC_URL}/img/${poster}`} className="mx-5"/>
                        <Table striped bordered hover className="mx-5">
                            <tbody>
                                {
                                    movieDetails.map(
                                        movieData => {
                                            return (
                                                <tr key={movieData.header}>
                                                    <td>{movieData.header}</td>
                                                    <td>{movieData.content}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MovieItem;
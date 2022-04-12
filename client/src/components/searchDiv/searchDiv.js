import React from 'react'
import { Card } from 'react-bootstrap'
import placeholderImg from '../../public/default-actionshot.jpg'

const SearchDiv = (props) => {
    return(
        <Card id={props.id}>
            <Card.Img  className="playerPic" variant="top" src={placeholderImg} onClick={props.searchFunction} />
            {/* <Card.Title>CLICK ME TO SEARCH</Card.Title> */}
        </Card>
    )
}

export default SearchDiv
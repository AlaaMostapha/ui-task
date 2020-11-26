import React from 'react';
// import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import Carousel from 'react-elastic-carousel';
import './Carousel.scss';
 let items = [
        {
            name: "Img #1",
            Image: "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/small.jpg"
        },
        {
            name: "Img #2",
            Image: "data:image/png;base64,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"
        },
        {
            name: "Img #3",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBVJqW23fB9fTkHq0p8FHJkvKIWB8npvvwA&usqp=CAU"
        },
        {
            name: "Img #4",
            Image: "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/small.jpg"
        }
    ]
    const breakPoints=[
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
    ]
function Item(props)
{
    return (
        <Paper>
            <img src={props.item.Image} alt={props.item.name}/>
        </Paper>
    )
}

function CreateCarousel(props) {
    return (
         <Carousel itemsToShow={3} pagination={false} breakPoints={breakPoints}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CreateCarousel

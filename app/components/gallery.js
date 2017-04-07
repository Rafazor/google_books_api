import React , { Component } from  'react';

class Gallery extends Component {
    render() {
        let noPhoto = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a 
                            key={index} 
                            className="book"
                            href={infoLink}
                            target='_blank'>
                                <img src={imageLinks !== undefined? imageLinks.thumbnail : noPhoto} 
                                alt="book photo"
                                className="book-img"/>
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    }  
                    )
                }
            </div>
        )
    }
}

export default Gallery;
import React, {Component} from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';
import propTypes from "prop-types";


function Movie({title, poster , genres ,synopsis }){
    return (
        <div className="Movie">
            <div className="Movie_Comlumns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Comlumns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre,index) =>
                     < MovieGenre genre={genre} key={index} />   
                    )}
                </div>
                <p className="Movie_Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                </p>
            </div>
        </div>        
    )
}

function MoviePoster({ poster , alt}){
    return (
        <div>
            <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
            
        </div>
        
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired,
    alt : propTypes.string.isRequired

}

Movie.propTypes = {
    
    title : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.array.isRequired ,
    synopsis : propTypes.string.isRequired    
}

MovieGenre.propTypes = {
    genre : propTypes.string.isRequired
}

export default Movie;
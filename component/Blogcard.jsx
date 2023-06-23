import React from 'react'
import Style from "./Blogcard.module.css";
const Blogcard = ({ adddata }) => {
    return (
        <>

            <div className={ Style.blog }>

                <img style={ { width: '300px', height: "200px", overflow: 'hidden', objectFit: 'cover' } } src={ `http://localhost:1122/public/${adddata.Filepath}` } alt="pic" />


                <h3>{ adddata.fname }</h3>
                <h3>{ adddata.lname }</h3>
                <h5>{ adddata.type }</h5>
                <p>{ adddata.description }</p>
                <button className={ Style.blogbtn }>Go</button>


            </div>
        </>
    )
}

export default Blogcard
import React, { useEffect, useState } from 'react'
import Style from "./Dashboard.module.css";
import Blogcard from './Blogcard'

const Dashboard = () => {
    const [blogdata, setBlogDatas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:1122/api/getallblog`, {
                method: "GET",
                headers: { "Content": "application/json" }
            }).then((res) => res.json())
                .then((adddata) => {
                    console.log(adddata.addData);
                    setBlogDatas(adddata.addData);
                }).catch((error) => console.log('error::: ', error))
        }

        fetchApi();
    }, [])

    return (
        <>

            <main className={ Style.dashbord }>
                <section className={ Style.dpath }>
                    <h1 style={ { fontSize: '48px' } }>Welcome to my website!</h1>
                    <p>This is my home page.</p>

                </section>
            </main>


            <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "spaceEvenly" } }>
                {
                    blogdata?.map((data, index) => (
                        <div style={ { margin: "10px 0" } } key={ index }>
                            <Blogcard adddata={ data } />
                        </div>
                    ))
                }
            </div>
        </>


    )


}

export default Dashboard
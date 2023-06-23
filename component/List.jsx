
import React, { useState, useEffect } from "react";
import "./List.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'



const List = () => {

    const [blogdata, setBlogDatas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:1122/api/getallblog `, {
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

    const deletData = async (id) => {
        console.log("id:::", id);


        fetch(`http://localhost:1122/api/deletData/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        }).then((res) => res.json())
            .then((data) => {
                if (data.message === "blog remove") {

                    toast.error("Data deleted !", {
                        position: toast.POSITION.TOP_LEFT
                    });
                    const deldata = blogdata.filter((ele, index) => ele.id !== id);
                    setBlogDatas(deldata)


                }
            }).catch((error) => console.log('error::: ', error))

    }

    return (
        <>
            <div className="main1">


                <table cellSpacing={ 0 }>

                    <thead>

                        <tr>
                            <th>NO</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Picture</th>
                            <th>Hobbies</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            blogdata?.map((data, index) => {
                                return (
                                    <tr key={ index }>
                                        <td>{ index + 1 }</td>
                                        <td>{ data.fname }</td>
                                        <td>{ data.lname }</td>
                                        <td><img src={ `http://localhost:1122/public/${data.Filepath}` } alt="pic" height={ 50 } width={ 50 } /></td>
                                        <td>{ data.type }</td>
                                        <td>{ data.description }</td>
                                        <td>
                                            <Link to={ `/addblog?${data._id}` }>
                                                <button className="editbtn">Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="deletebtn" onClick={ () => deletData(data._id) }>Delete</button>
                                        </td>
                                    </tr>

                                )


                            }
                            )
                        }
                    </tbody>

                </table>


            </div >
        </>
    )
}

export default List
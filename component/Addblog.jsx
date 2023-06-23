import React from 'react'
import Style from './Addblog.module.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Addblog = () => {
    let navigate = useNavigate();


    const location = useLocation();
    console.log('location:::', location.search.split('?')[1]);
    useEffect(() => {
        const id = location.search.split('?')[1];
        const editData = async () => {
            fetch(`http://localhost:1122/api/GetEditdata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ my_id: id })
            }).then((res) => res.json())
                .then((data) => {
                    console.log("data:::", data);
                    setData({
                        ...adddata,
                        fname: data.datas.fname,
                        lname: data.datas.lname,
                        type: data.datas.type,
                        description: data.datas.description,
                    })
                }).catch((error) => console.log('error:::', error))
        }
        editData();
    }, [])



    const [adddata, setData] = useState({
        fname: "",
        lname: "",
        type: "",
        description: "",
    })
    const [file, setFile] = useState();


    const handleChangeValue = (e) => {
        setData({ ...adddata, [e.target.name]: e.target.value })
    }
    const saveData = async () => {
        const formdata = new FormData();
        formdata.append('image', file);
        formdata.append('adddata', JSON.stringify(adddata));

        fetch("http://localhost:1122/api/Blogs", {
            method: "POST",
            body: formdata
        }).then((res) => res.json())
            .then((adddata) => {
                console.log('data::: ', adddata.responce);
                if (adddata.responce === "Done") {
                    navigate('/');
                    toast("Data added!")
                }
                else {
                    navigate('/error');
                }
            })
            .catch(err => {
                console.log('err::: ', err);
                navigate('/error')
            })
    }

    return (
        <div className="main">

            <label className={ Style.l1 } htmlFor="#">First Name :</label> <br />
            <input type="text"
                name='fname'
                onChange={ handleChangeValue }
                value={ adddata.fname }
            /> <br />
            <label className={ Style.l1 } htmlFor="#"> Last Name :</label> <br />
            <input type="text"
                name='lname'
                onChange={ handleChangeValue }
                value={ adddata.lname }
            /> <br />
            <label className={ Style.l1 } htmlFor="blog-type">Hobbies:</label> <br />
            <select className={ Style.sele } name='type'
                onChange={ handleChangeValue }
                value={ adddata.type } required>
                <option value="">Choose...</option>
                <option>Drawing</option>
                <option>Cooking</option>
                <option>Traveling</option>
            </select> <br />
            <label className={ Style.l2 } htmlFor="#">Address</label> <br />
            <textarea
                name='description'
                onChange={ handleChangeValue }
                type="text"
                value={ adddata.description } required
            ></textarea>

            <input className={ Style.file } onChange={ (e) => setFile(e.target.files[0]) } type="file" accept='image/jpg, image/png,image/jpeg' /> <br />

            <button onClick={ saveData } className={ Style.sub }>Submit</button>

        </div>
    )
}

export default Addblog
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    const handleFormData = (e) => {
        console.log(e.target);

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then((response) => {
                console.log(response.data);
            });
    };



    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-12'>
                    <h1>FORM</h1>
                </div>
                <div className='col-12'>
                    <form onSubmit={handleSubmit} className='border rounded bg-info-subtle p-3'>
                        <div className='row g-2'>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Author</label>
                                <input type="text"
                                    name="author"
                                    id='author'
                                    className='form-control'
                                    placeholder='author'
                                    value={formData.author}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Title</label>
                                <input type="text"
                                    name="title"
                                    id='title'
                                    className='form-control'
                                    placeholder='title'
                                    value={formData.title}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Body</label>
                                <textarea name="body"
                                    id="body"
                                    className='form-control'
                                    value={formData.body}
                                    onChange={handleFormData}>
                                </textarea>
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-check-label'>Public</label>
                                <div className='form-check'>
                                    <input type="checkbox"
                                        name='public'
                                        id='public'
                                        className='form-check-input'
                                        checked={formData.public}
                                        onChange={handleFormData}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='btn btn-primary'>Invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
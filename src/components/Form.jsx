import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    // DICHIARO LA VARIABILE DI STATO SOTTO FORMA DI OGGETTO 
    const [formData, setFormData] = useState({});

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-12'>
                    <h1>FORM</h1>
                </div>
                <div className='col-12'>
                    <form action="" className='border rounded bg-info-subtle p-3'>
                        <div className='row g-2'>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Author</label>
                                <input type="text" name="author" className='form-control' placeholder='author' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Title</label>
                                <input type="text" name="title" className='form-control' placeholder='title' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Body</label>
                                <textarea name="body" id="body" className='form-control'></textarea>
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-check-label'>Public</label>
                                <div className='form-check'>
                                    <input type="checkbox" name='public' id='public' className='form-check-input' />
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
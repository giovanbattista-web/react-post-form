import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>FORM</h1>
                </div>
                <div className='col-12'>
                    <form action="" className='border rounded bg-info-subtle'>
                        <div className='row'>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>author</label>
                                <input type="text" name="author" className='form-control' placeholder='author' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>title</label>
                                <input type="text" name="title" className='form-control' placeholder='title' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Body</label>
                                <textarea name="body" id="body" className='form-control'></textarea>
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-check-label'>public</label>
                                <div className='form-check'>
                                    <input type="checkbox" name='public' id='public' className='form-check-input' />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
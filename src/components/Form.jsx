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
                                <label htmlFor="" className='control-label'>Nome</label>
                                <input type="text" name="name" className='form-control' placeholder='nome' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Nome</label>
                                <input type="text" name="name" className='form-control' placeholder='nome' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Nome</label>
                                <input type="text" name="name" className='form-control' placeholder='nome' />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='control-label'>Nome</label>
                                <input type="text" name="name" className='form-control' placeholder='nome' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
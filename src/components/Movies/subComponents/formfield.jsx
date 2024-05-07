import React, { Component } from 'react';

const FormField = () => {
    
    return (
        <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control-md" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
    )
}
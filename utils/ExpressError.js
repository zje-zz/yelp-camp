const express = require("express");

class ExpressError extends Error{
    constructor(meassage, statusCode){
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
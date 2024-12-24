const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");

const configureMiddleware = async (app) => {
    // Configure CORS
    const corsOptions = {
        origin: "*",
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    };
    app.use(cors(corsOptions));

    // Other middlewares
    if (process.env.NODE_ENV === "production") {
        app.set("trust proxy", 1);
    }
    app.use(cookieParser());
    app.use(express.json({ limit: "50mb" })); // Handle JSON requests
    app.use(express.urlencoded({ extended: false })); // Handle URL-encoded requests
    app.use("/images", express.static(path.join(__dirname, "../public/images")));
};

// Export both the middleware configuration function 
module.exports = { configureMiddleware };

import multer from "multer";
import routes from "./routes";

export const multerVideo = multer({ dest: "videos/"});

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Utube";
    res.locals.routes = routes;
    //임시 유저 아이디
    res.locals.user = {
        isAuthenticated: true,
        id: 2
    };
    next()
};

export const uploadVideo = multerVideo.single("videoFile");
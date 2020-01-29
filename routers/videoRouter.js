import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import {
    uploadVideo,
    onlyPrivate
} from "../middleWare";

const videoRouter = express.Router();


videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.deleteVideo(), deleteVideo);
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
videoRouter.get(routes.videoDetail(), onlyPrivate, videoDetail);


export default videoRouter;
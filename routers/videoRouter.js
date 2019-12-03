import express from  "express";
import routes from "../routes";
import { getUpload, postUpload, videoDetail, getEditVideo, deleteVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middleWare";

const videoRouter = express.Router();


videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.deleteVideo(), deleteVideo);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.videoDetail(), videoDetail);


export default videoRouter;
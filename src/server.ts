import express from "express";
import CommentRouter from "./routes/CommentRoutes";
import PostRouter from "./routes/PostRoutes";
import UserRouter from "./routes/UserRoutes";
import AuthRouter from "./routes/AuthRoutes";

const port = 3000;

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(AuthRouter);
app.use(PostRouter);
app.use(CommentRouter);

app.listen(port, function () {
    console.log(`Server running on port -> ${port}`);
});
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Authrouter from "./router/auth/authRouter.js";
// import AdminRouter from "./router/admin/adminRouter.js";
// import ChatBotRouter from './router/bot/BotRouter.js'
import { mongodb } from "./config/mongoDbConnection.js";
import staffRouter from "./router/staff/staffRouter.js";
import patientRouter from "./router/patient/patientRouter.js";
import swaggerJSDoc from  "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT;
console.log(path.join(process.cwd(), '/router/staff/staffRouter.js'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//cors connecting
app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
const swaggerOptions = {
  swaggerDefinition: {
    basePath: '/',
    info: {
      title: 'Healtether API',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
  },
  apis: [path.join(process.cwd(), '/router/staff/staffRouter.js')
    //'C:/Source/Uhi_app/Healtether.Portal.API/router/auth/authRouter.js',
   ]
    // 'Healtether.Portal.API/router/bot/BotRouter.js',
    // 'Healtether.Portal.API/router/staff/staffRouter.js',
    // 'Healtether.Portal.API/router/patient/patientRouter.js'], // Specify the path to your API routes
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

//database connecting
mongodb();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/", Authrouter);
// app.use("/api/admin", AdminRouter);
// app.use("/api/chat", ChatBotRouter);
app.use("/api/staff", staffRouter);
app.use("/api/patient", patientRouter);
// Serve Swagger UI
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocs));


const server = app.listen(port, () => {
  console.log("server running !!!!!");
  console.log(`http://localhost:${port}`);
});

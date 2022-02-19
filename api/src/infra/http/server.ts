import { app } from "../../configs/app";
import { routes } from "./routes";
import connection from "../typeorm/index";

connection();

app.use(routes);

app.listen(3333, () => console.log("Server is running"));

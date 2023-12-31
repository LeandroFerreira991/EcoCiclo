import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from 'express';
import * as cors from 'cors';
import routes from "./routes";
const bodyParser = require('body-parser')

require("dotenv").config();

const config:any = {
   "type": process.env.DB_POSTGRES_TYPE,
   "host": process.env.DB_POSTGRES_HOST,
   "port": process.env.DB_POSTGRES_PORT,
   "username": process.env.DB_POSTGRES_USERNAME,
   "password": process.env.DB_POSTGRES_PASSWORD,
   "database": process.env.DB_POSTGRES_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "./src/entity/*"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

const app = express()
createConnection(config)

app.use(cors())
app.use(bodyParser.json())
app.use(routes)
 
app.listen(3333)
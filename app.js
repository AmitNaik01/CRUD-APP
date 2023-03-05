import express from 'express'
import connectDB  from './db/connectdb.js'
import {join} from 'path'
import web from "./routes/web.js"
const app = express()
const port = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



//Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

//static files
app.use('/student', express.static(join(process.cwd(),"public")))
app.use('/student/edit', express.static(join(process.cwd(),"public")))

//load routes
app.use("/student", web)

//set engine
app.set('view engine', 'ejs')



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
const express = require("express")
const cors = require("cors")

const {Client} = require("@googlemaps/google-maps-services-js")
const client = new Client({})

const app = express()
app.use(cors({
    origin: "*"
}))
app.get("/findRestaurant", async (req, res)=>{
    const {latitude, longitude, food} = req.query
    console.log(req.query)
    const findRequest = {
        params:{
            inputtype: "textquery",
            input: "chinese food",
            locationbias: `point:${latitude},${longitude}`,
            key: "AIzaSyA6MTpfVrCDiXw_JY5mBcd3Rjk0OdHi0VI"
        }
    }

    console.log(findRequest)
    const result = await client.findPlaceFromText(findRequest).catch(err=>{
        console.log(err)
    })
    if(!result){
        res.status(500).send("failure")
        return
    }
    res.send(JSON.stringify(result.data))
})
app.listen(4000, ()=>{console.log("server started")})
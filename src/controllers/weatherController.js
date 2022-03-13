// let axios=require("axios")

// const weatherinfo= async (req,res)=>{
//     try{
//         let cities= ["bengaluru","mumbai", "delhi", "Kolkata", "Chennai", "London", "Moscow"]
//         let cityobject=[]
//         for (let i=0;i<cities.length;i++){
//             let obj={city:cities[i]}
//             let response= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=e3cfed258278ed4cc9eccf7bc8d8a873`)
//             console.log(response.data.main.temp)

//             obj.temp=response.data.main.temp

//             cityobject.push(obj)
//         }
        
//         let sort= cityobject.sort (function(ab, bc){
//             return ab.temp-bc.temp
//         })
//     //   console.log(sorting)
//       res.status(200).send({msg:"server running", status: true, data: sort})

//     }catch(err){
//         res.status(500).send({msg:err.message})
//     }

// //  res.send()

// }


// module.exports.weatherinfo=weatherinfo



let axios = require("axios");

let getSortedCities = async (req, res) => {

    try {
        let cities =  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = [ ]
        for (let i = 0; i<cities.length; i++) {

            let obj = { city: cities[i] } //{city:Banglore}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f24615c7423c030f9becfe9da2b16fe0`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}

module.exports.getSortedCities = getSortedCities;
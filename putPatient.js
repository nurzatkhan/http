const getTocken = require('./');
const axios = require("axios");

async function start() {
	const args = process.argv;
	console.log(args[2]);
	console.log(args[3])
	const config = await getTocken()
 	
	const url = "http://localhost:8888/v1/patient/phone/iin"
	const createConc = await axios.put(
		url,
		{
			id: args[2] || "e5aa7e7f-fb68-45ff-bef4-21b157cfa6b7",
  			//phone: args[3] || "87471873000",
 			iin: args[4] || "010525550491",
		},
		config
	).then(data => data.data)
 	console.log(createConc)
}

start()

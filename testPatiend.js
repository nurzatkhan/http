const getTocken = require("./");
const axios = require("axios");

async function start() {
  const args = process.argv;

  const config = await getTocken();

  const url = "http://localhost:8888/v1/patient/otp/verify";
  const createConc = await axios
    .post(
      url,
      {
        token:
          "d6994a561cd28fb713cd72c2042ee048004bb55d4c3f0e18e7bb7f88a24fdc8a",
        doctor_iin: "010525550491",
        otpcode: '611607'
      },
      config
    )
    .then((data) => data.data);
  console.log(createConc);
}

start();

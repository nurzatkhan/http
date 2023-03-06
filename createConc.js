const getTocken = require("./");
const { default: axios } = require("axios");

async function start() {
  const config = await getTocken();
  const form = new FormData();
  form.append("study_id", "9a48fe34-375d-496e-bfb0-67d3d685ca51");
  form.append("conclusion_text", "hello world");

  const url = "http://localhost:8888/v1/conclusion";
  const createConc = await axios
    .post(url, form, config)
    .then((data) => data.data);

  console.log(createConc);
}

start();

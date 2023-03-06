const _ = require("lodash");


function getPatientData(iin) {
  const rpnData = {
    firstName: {
      _text: "asdasdasd",
    },
    iin: {
      _text: "123123123123",
    },
  };
  const prismaData = {
    firstname: "nurzatkhan",
    kotakbass: "s",
  };
  if (!!rpnData?.iin?._text) {
    const fullName = [
      rpnData?.lastName?._text,
      rpnData?.firstName?._text,
      rpnData?.secondName?._text,
    ].join(" ");
    return _.pickBy(
      {
        iin: rpnData?.iin?._text,
        bdate: new Date(rpnData?.birthDate?._text),
        firstname: rpnData?.firstName?._text,
        //TODO
        gender: rpnData?.sex?._text,
        lastname: rpnData?.lastName?._text,
        surname: rpnData?.secondName?._text,
        fullname: fullName?.trim() && fullName,
        ...prismaData,
      },
      (v) =>
        !(v === undefined || v === null || v === "" || v.toString() === 'Invalid Date')
    );
  } else return;
}

console.log(getPatientData());

// var cleanPerson = _.pickBy(person, function (value, key) {
//   return !(value === undefined || value === null);
// });

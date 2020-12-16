const jsonfile = require('jsonfile');
const file = './db/db.json';

jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err);
    console.dir(obj);
    console.log(obj.length);
    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i].title, obj[i].text);
    }
  })


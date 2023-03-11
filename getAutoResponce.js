const openai = require('openai');

const message = process.argv[2];

openai.prompt(message, function(err, result) {
    console.log(result.text);
});


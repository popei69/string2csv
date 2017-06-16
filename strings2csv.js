var fs = require('fs');
var xml2js = require('xml2js');
var json2csv = require('json2csv');
var parser = new xml2js.Parser();

fs.readFile(__dirname + '/strings.xml', (err, data) => {
    parser.parseString(data, function (err, result) {

        var finalResult = result.resources.string.map(function (string) {
            return {
                "name" : string.$.name,
                "value": string._
            };
        });
        console.log(finalResult);

        writeJson(finalResult, ["name", "value"]);

        console.log('Done');
    });
});

function writeJson(jsonData, fields) {

    var csv = json2csv({ data: jsonData, fields: fields });
    fs.writeFile('js-result.csv', csv, function(err) {
        if (err) throw err;
        console.log('file saved');
    });
}

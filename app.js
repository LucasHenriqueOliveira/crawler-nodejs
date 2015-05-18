var http = require('request');
var $ = require('cheerio');

http.get('http://www.americanas.com.br/linha/267868/informatica/notebook', function(err, status, html) {
    console.log(html);
    var products = $(html).find('.productInfo');
    for (var i = products.length - 1; i >= 0; i--) {
        console.log($(products[i]).find('.prodTitle').text().trim());
        console.log($(products[i]).find('.sale').text().trim());
    };
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

var fs = require('fs');

fs.readdir('./', function(err, files) {
	if(err) throw err;
	fs.writeFile('./result.txt', files, function(err){
		if (err) throw err;	
		console.log('Utworzono listę plików');
	});
});


//fs.readFile('./text.txt', 'utf-8', function(err, data) {
//    console.log('Dane przed zapisem!'.blue);
//    console.log(data);
//    fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function(err) {
//        if (err) throw err;
//        console.log('Zapisano!'.blue);
//        fs.readFile('./text.txt', 'utf-8', function(err, data) {
//            console.log('Dane po zapisie'.blue)
//            console.log(data);
//        });
//    });
//});

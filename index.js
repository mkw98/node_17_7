var fs = require('fs');

fs.readdir('./', function(err, files) {
	if(err) throw err;
	fs.writeFile('./result.txt', files, function(err){
		if (err) throw err;	
		console.log('Utworzono listę plików');
	});
});
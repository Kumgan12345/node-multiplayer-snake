const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
	serverUrl :'http://192.168.56.102:9000',
	token:'072506a2d74d3a200c1d1bcf9a0f3acb90197d70',
	options : {
		'sonar.projectName':'node-multiplayer-snake',
		'sonar.sources': '.',
		//'sonar.inclusions' : '.' // Entry point of your code
	}
}, () => {});

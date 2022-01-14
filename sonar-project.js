const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
	serverUrl :'http://192.168.56.102:9000',
	options : {
		'sonar.projectName':'node-multiplayer-snake',
		'sonar.sources': '.',
		//'sonar.inclusions' : '.' // Entry point of your code
	}
}, () => {});

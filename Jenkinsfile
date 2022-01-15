node ('Ubuntu-app-agent') {  
    def app
    stage('Cloning-Git-Phase') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    } 
    stage('SAST-Phase') {
        build 'SECURITY-SAST-SNYK'
    }
    stage('Build-and-Tag-Phase') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
       app = docker.build("strangerganesh/snake")
    }
    stage('Post-to-dockerhub-Phase') {
        
       docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
           app.push("latest")
           }
    }
    stage('Containder-Image-Scan-Phase') {
        build 'SECURITY-IMAGE-SCANNER-ANCHORE'
    }
    stage('Pull-Image-To-Server-Phase') {
        sh "docker-compose down"
        sh "docker-compose up -d"   
    }
    stage('DAST-Phase') {
        build 'security-DAST-Arachni'
    }
}

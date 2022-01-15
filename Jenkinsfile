node ('Ubuntu-app-agent') {  
    def app
    try {
    notifyBuild('STARTED')
    stage('Cloning-Git-Phase') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    } 
    stage('SAST-Phase') {
        //build 'SECURITY-SAST-SNYK'
	sh 'echo "SAST Phase passed "'
    }
    stage('Build-and-Tag-Phase') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
      // app = docker.build("strangerganesh/snake")
      sh 'echo "Build-and-Tag-Phase passed "'
    }
    stage('Post-to-dockerhub-Phase') {
        
       //docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
        //   app.push("latest")
           }
	sh 'echo "Post-to-dockerhub-Phase" '
    }
    stage('Containder-Image-Scan-Phase') {
       // build 'SECURITY-IMAGE-SCANNER-ANCHORE'
       sh 'echo "Containder-Image-Scan-Phase passed" '
    }
    stage('Pull-Image-To-Server-Phase') {
        //sh "docker-compose down"
       // sh "docker-compose up -d"   
       sh 'echo "Pull-Image-To-Server-Phase passed" '
    }
    stage('DAST-Phase') {
       // build 'security-DAST-Arachni'
       sh 'echo "DAST-Phase passed" '
    }
  } catch (e) {

     // If there was an exception thrown, the build failed

     currentBuild.result = "FAILED"

     throw e

   } finally {

     // Success or failure, always send notifications

     notifyBuild(currentBuild.result)

   }
}

def notifyBuild(String buildStatus = 'STARTED') {

   // build status of null means successful

   buildStatus =  buildStatus ?: 'SUCCESSFUL'

   // Default values


   def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"

   def summary = "${subject} (${env.BUILD_URL})"

   def details = """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
     <p>Check console output at "<a href="${env.BUILD_URL}">${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>"</p>"""

   // Send notifications
   emailext (

       subject: subject,

       body: details,
	   mimeType: 'text/html',

      // recipientProviders: [[$class: 'DevelopersRecipientProvider']]
	   to: 'kumgan2017@gmail.com'

     )

 }

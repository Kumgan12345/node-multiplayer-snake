node {  
    //def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    } 
    
    stage('Build-and-Tag') {
        sh 'echo Build and Tag'
    /* This builds the actual image; synonymous to
         * docker build on the command line */
      //  app = docker.build("strangerganesh/snake:0.1")
    }
    stage('Post-to-dockerhub') {
        sh 'echo Post-to-Dockerhub'
    
     /* docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("latest")
        			} */
         }
      
    stage('Pull-image-server') {
        sh 'echo Pull-image-server'
           
      }
    
     
}

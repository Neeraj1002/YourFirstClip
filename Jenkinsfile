pipeline {
    agent any


    stages {
        stage("Create .env file."){
            steps {
                    script {
                        withCredentials([file(credentialsId: 'env_yourfirstclip_app', variable: 'SECRET_FILE_PATH')]) {
                            sh '''
                            echo "Removing .env file"
                            rm -f .env
                            echo "Creating .env file from secret file"
                            # Write the content of the secret file into the .env file
                            cp $SECRET_FILE_PATH .env
                            '''
                    }
                }
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t firstclipapp-image:${BUILD_NUMBER} .'
                echo 'remove running app container'
                sh 'docker stop firstclipapp-container || true'
                sh 'docker rm firstclipapp-container || true'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d --name firstclipapp-container -p 3004:3000 firstclipapp-image:${BUILD_NUMBER}'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'removing unused artifacts'
                sh 'docker system prune -af'
            }
        }
    }
}

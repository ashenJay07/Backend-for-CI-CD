pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ashenJay07/Backend-for-CI-CD.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t ashendev7/ctse-assignment:${env.BUILD_ID} .'
            }
        }

        stage('Push') {
            steps {
                sh 'docker push ashendev7/ctse-assignment:${env.BUILD_ID}'
            }
        }
    }

    post {
        always {
            junit 'reports/**/*.xml'
            archiveArtifacts 'dist/**/*'
            sh 'npm run postbuild'
        }
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
            mail to: 'you@example.com',
                 subject: 'Pipeline failed',
                 body: 'Pipeline failed in ${env.BUILD_NUMBER}',
                 from: 'jenkins@example.com'
        }
    }
}

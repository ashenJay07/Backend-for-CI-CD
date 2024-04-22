pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = "ashendev7"
        FRONTEND_IMAGE = "${DOCKER_REGISTRY}/frontend-image"
        BACKEND_IMAGE = "${DOCKER_REGISTRY}/backend-image"
    }
    
    stages {
        stage('Build Frontend Image') {
            steps {
                script {
                    echo "Building frontend image..."
                    docker.build(FRONTEND_IMAGE, "-f frontend/Dockerfile frontend/")
                    echo "Frontend image built successfully."
                }
            }
        }
        
        // stage('Push Frontend Image') {
        //     steps {
        //         script {
        //             docker.withRegistry('', 'dockerhub-credentials') {
        //                 docker.image(FRONTEND_IMAGE).push()
        //             }
        //         }
        //     }
        // }
        
        // stage('Build Backend Image') {
        //     steps {
        //         script {
        //             docker.build(BACKEND_IMAGE, "-f backend/Dockerfile .")
        //         }
        //     }
        // }
        
        // stage('Push Backend Image') {
        //     steps {
        //         script {
        //             docker.withRegistry('', 'dockerhub-credentials') {
        //                 docker.image(BACKEND_IMAGE).push()
        //             }
        //         }
        //     }
        // }
    }
}
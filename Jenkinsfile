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
                    docker.withTool('docker') {
                        docker.build(FRONTEND_IMAGE, "-f frontend/Dockerfile .")
                        echo "Frontend image built successfully: ${FRONTEND_IMAGE}"
                    }
                }
            }
        }
        
        stage('Push Frontend Image') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials') {
                        docker.withTool('docker') {
                            docker.image(FRONTEND_IMAGE).push()
                            echo "Frontend image pushed successfully: ${FRONTEND_IMAGE}"
                        }
                    }
                }
            }
        }
        
        stage('Build Backend Image') {
            steps {
                script {
                    docker.withTool('docker') {
                        docker.build(BACKEND_IMAGE, "-f backend/Dockerfile .")
                        echo "Backend image built successfully: ${BACKEND_IMAGE}"
                    }
                }
            }
        }
        
        stage('Push Backend Image') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials') {
                        docker.withTool('docker') {
                            docker.image(BACKEND_IMAGE).push()
                            echo "Backend image pushed successfully: ${BACKEND_IMAGE}"
                        }
                    }
                }
            }
        }
    }
}

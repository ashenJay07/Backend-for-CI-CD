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
                    try {
                        docker.withTool('docker') {
                            docker.build(FRONTEND_IMAGE, "-f frontend/Dockerfile .")
                            echo "Frontend image built successfully: ${FRONTEND_IMAGE}"
                        }
                    } catch (Exception e) {
                        echo "Error building frontend image: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        
        stage('Push Frontend Image') {
            steps {
                script {
                    try {
                        docker.withRegistry('', 'dockerhub-credentials') {
                            docker.withTool('docker') {
                                docker.image(FRONTEND_IMAGE).push()
                                echo "Frontend image pushed successfully: ${FRONTEND_IMAGE}"
                            }
                        }
                    } catch (Exception e) {
                        echo "Error pushing frontend image: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        
        stage('Build Backend Image') {
            steps {
                script {
                    try {
                        docker.withTool('docker') {
                            docker.build(BACKEND_IMAGE, "-f backend/Dockerfile .")
                            echo "Backend image built successfully: ${BACKEND_IMAGE}"
                        }
                    } catch (Exception e) {
                        echo "Error building backend image: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        
        stage('Push Backend Image') {
            steps {
                script {
                    try {
                        docker.withRegistry('', 'dockerhub-credentials') {
                            docker.withTool('docker') {
                                docker.image(BACKEND_IMAGE).push()
                                echo "Backend image pushed successfully: ${BACKEND_IMAGE}"
                            }
                        }
                    } catch (Exception e) {
                        echo "Error pushing backend image: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
    }
}

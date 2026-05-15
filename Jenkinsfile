pipeline {
    agent any

    environment {
        JAVA_HOME = 'C:\\Program Files\\JAVA\\jdk-21'
        PATH = "C:\\Program Files\\JAVA\\jdk-21\\bin;${env.PATH}"
    }

    stages {
        stage('Check SonarScanner Installation') {
            steps {
                script {
                    def scannerHome = tool 'MySonarScaner'

                    echo "SonarScanner should be installed at: ${scannerHome}"

                    bat 'echo JAVA_HOME=%JAVA_HOME%'
                    bat 'where java'
                    bat 'java -version'
                    bat "dir \"${scannerHome}\\bin\\sonar-scanner.bat\""
                    bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" -v"
                }
            }
        }

        stage('Checkout from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/Rahma1172002/MyRepoProject'
            }
        }

        stage('Analyse SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'MySonarScaner'

                    withSonarQubeEnv('projet') {
                        withCredentials([string(credentialsId: 'sonarqube-token', variable: 'TOKEN')]) {
                            bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" " +
                                "-Dsonar.projectKey=node-projetcid " +
                                "-Dsonar.sources=. " +
                                "-Dsonar.token=%TOKEN% " +
                                "-Dsonar.projectVersion=1.0.0 " +
                                "-Dsonar.sourceEncoding=UTF-8"
                        }
                    }
                }
            }
        }
    }
}
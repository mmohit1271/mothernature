pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/mmohit1271/mothernature.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t save-mother-nature .'
      }
    }

    stage('Stop & Remove Previous Container') {
      steps {
        sh '''
          docker stop nature-app || true
          docker rm nature-app || true
        '''
      }
    }

    stage('Run New Container') {
      steps {
        sh 'docker run -d -p 3000:3000 --name nature-app save-mother-nature'
      }
    }
  }
}

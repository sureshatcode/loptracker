node {
    timeout(15) {
        try {
            properties([pipelineTriggers([[$class: 'GitHubPushTrigger']])])

            stage 'Checkout'
            checkout scm
            stage 'Build'
            sh './gradlew zip'
			stage 'ArtifactArchiver'
            step([$class: 'ArtifactArchiver', artifacts: 'loptracker.zip', fingerprint: true])
        } catch (err) {
            throw err
        }
    }
}
 GCP-Demo
CI/CD js project for GCP.

 Dependencies
Docker, nodejs:alpine, port 8080.

 Install
"node", "index.js"

 Start app
Gitlab-ci or docker build -t node:alpine -f dockerfile .
	     docker run -d -p 9090:8080 [IMAGE TAG]

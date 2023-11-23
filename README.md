**GCP-Demo.**
Це приклад проекту на JavaScript для Google Cloud Platform. Він містить простий веб-сервер на Node.js і використовує Google Cloud Build для автоматичної збірки та розгортання додатку.

Dependencies.
 Проект використовує наступні залежності:
 - Node.js (v12 або вище)
 - Express.js
 - Docker
 - Google Cloud SDK
 - Google Cloud Build
 - Google Artifact Registry
 - Google Cloud Run 

Install.
 1. Клонуйте репозиторій на свій локальний комп'ютер:

```
     - git clone https://gitlab.com/Rebelsboss/gcp-demo.git
     - cd gcp-demo
```

 3. Встановіть залежності:
    
 ```
     - docker install
```

Start app.
 Для запуску додатку локально, виконайте наступні команди:

 ```
     - docker build -t node:alpine -f dockerfile .
     - docker run -d -p 9090:8080 [IMAGE TAG]
```

Після цього ви можете відкрити свій додаток в браузері за [адресою](http://localhost:9090).

CI/CD.
 Continuous Integration.
Цей проект використовує Google Cloud Build для автоматичної збірки додатку після кожного коміту до репозиторію. Файл cloudbuild.yaml визначає кроки, необхідні для збірки додатку.

 Continuous Deployment.
Після успішної збірки додатку в Google Cloud Build, проект автоматично розгортається на Google Kubernetes Engine (GKE).

 Google Cloud Platform.
Цей проект використовує наступні сервіси Google Cloud Platform:
  - Google Cloud Build для автоматичної збірки додатку.
  - Google Cloud SDK
  - Google Artifact Registry
  - Google Cloud Run 

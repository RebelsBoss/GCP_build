### **GCP-Demo.**
Це приклад проекту на JavaScript для Google Cloud Platform. Він містить простий веб-сервер на Node.js і використовує Google Cloud Build для автоматичної збірки та розгортання додатку.

#### Dependencies.
 Проект використовує наступні залежності:
 - Node.js (v12 або вище)
 - Express.js
 - Docker
 - Google Cloud SDK
 - Google Cloud Build
 - Google Artifact Registry
 - Google Cloud Run 

#### Для локального тестування
 1. Клонуйте репозиторій на свій локальний комп'ютер:

```
     - git clone https://gitlab.com/Rebelsboss/gcp-demo.git
     - cd gcp-demo
```

 3. Встановіть залежності:
    
 ```
     - docker install
```

 4. Для запуску додатку локально, виконайте наступні команди:

 ```
     - docker build -t node:alpine -f dockerfile .
     - docker run -d -p 9090:8080 [IMAGE TAG]
```

Після цього ви можете відкрити свій додаток в браузері за [адресою](http://localhost:9090).

### CI/CD.
#### Continuous Integration.
Цей проект використовує Google Cloud Build для автоматичної збірки додатку після кожного коміту до репозиторію. Файл cloudbuild.yaml визначає кроки, необхідні для збірки додатку.

#### Continuous Deployment.
Після успішної збірки додатку в Google Cloud Build та пушу до Artifact Registry, отриманий артефакт автоматично розгортається на Google Cloud Run безсерверному середовищі.

#### Google Cloud Platform.
Цей проект використовує наступні сервіси Google Cloud Platform:
  - Google Cloud Build для автоматичної збірки додатку.
  - Google Artifact Registry
  - Google Cloud Run
  - Google IAM

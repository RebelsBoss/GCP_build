### **GCP-Demo.**
Це приклад розгортання додатку на JavaScript для Google Cloud Platform. Використовує Google Cloud Build для автоматичної збірки та Google Cloud Run розгортання додатку.

#### IAM permissions :
###### 1. <your_id>@cloudbuild.gserviceaccount.com add :
     - Artifact Registry Writer
     - Cloud Build Service Account
     - Cloud Run Admin or Cloud Run Developer
     - Service Account User
     - Cloud Build WorkerPool User
###### 2. <your_id>@serverless-robot-prod.iam.gserviceaccount.com (Google Cloud Run Service Agent) add :
     - Cloud Run Developer
     - Cloud Run Service Agent
###### 4. <your_artifacts_registry> add principal :
     - <your_id>@cloudbuild.gserviceaccount.com  -- Artifact Registry Writer
     - <your_id>@serverless-robot-prod.iam.gserviceaccount.com  -- Artifact Registry Reader
     

#### Для локального тестування
 1. Клонуйте репозиторій на свій локальний комп'ютер:

```
     - git clone https://gitlab.com/Rebelsboss/gcp-demo.git
     - cd gcp-demo
```

 3. Встановіть [docker](https://docs.docker.com/engine/install/ubuntu/)
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

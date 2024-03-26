# Backend for CI/CD

## Run backend using docker

### Build a container using Dockerfile

```
docker build -t cicd-backend:1 .
```

### Run the container

```
docker run --name cicd-backend -p 5000:5000 cicd-backend:1
```

### Stop the container

```
docker stop cicd-backend
```

### Delete the container

```
docker rm cicd-backend
```

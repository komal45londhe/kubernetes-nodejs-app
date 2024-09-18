# kubernetes-nodejs-app

This repository contains a simple Node.js application that can be used to test deployments in a Kubernetes environment. The app is containerized using Docker and serves a basic HTML page. The project demonstrates how to deploy a custom application on Kubernetes, scaling the application with multiple replicas and exposing it via Ingress.

## Features

- A simple Node.js app using Express.js
- Dockerfile to containerize the application
- Can be deployed on Kubernetes with multiple replicas
- Exposed via Kubernetes Ingress for routing

## Project Structure

```bash
.
├── Dockerfile          # Dockerfile to containerize the application
├── app.js              # Main Node.js application file
├── package.json        # Node.js dependencies and metadata
└── public              # Optional static content served by the app
    └── index.html
```
## Prerequisites
Before you begin, ensure you have the following installed:

1.Docker <br>
2.Kubernetes cluster (Minikube, GKE, EKS, etc.) <br>
3.kubectl

## Getting Started

1. Cloning the Repository
2. Containerizing the Application
3. Pushing the Docker Image to Docker Hub
4. Deploying on Kubernetes
5. Ingress Configuration
6. Access the Application

# Nginx-as-LB
In this Nginx project, you'll demostarte how Nginx can be used as a Load balancer to distribute traffic load among backend services.

The backend service is a basic express server that returns a response containing the information about the specific server that processes a specific request.
The backend logic can be found in the `app` directory within this repository. 
The repository also contains the Dockerfile from which the server Docker image will be built.

Follow the steps outlined to get hands-on with the project:

1. Install Nginx

2. Install Docker and Docker-compose

3. Clone project repository

4. Build docker image:

```bash
cd app

docker build -t express-server:1.0.0 .

```

5. Start 3 instances of the Docker image using docker-compose command:

```bash
docker-compose up -d
```

6. Copy the file `nginx/server-loadbalancer` to `/etc/nginx/sites-enabled/server-loadbalancer`

7. In `/etc/nginx/nginx.conf`, add the following block:

```bash
upstream {
   server 127.0.0.1:3001;
   server 127.0.0.1:3002;
   server 127.0.0.1:3003;
}
```

8. Navigate to the browser and enter the url `localhost:8081`. This should route traffic to one of the server instances

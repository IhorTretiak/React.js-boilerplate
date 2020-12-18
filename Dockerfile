# How to use multi-stage builds (https://docs.docker.com/develop/develop-images/multistage-build)

# The application setup
FROM ubuntu:20.04 AS app_build

ARG DOCKER_TIMEZONE
ARG NODE_VERSION
ENV TZ=$DOCKER_TIMEZONE

RUN apt-get update \
  && apt-get -y install \
    apt-utils \
    curl \
  && apt-get clean

# Install n with node and npm (https://github.com/tj/n)
RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n \
  && bash n $NODE_VERSION

WORKDIR app

COPY . .
RUN npm install
RUN npm run build


# The server setup
FROM nginx:stable-alpine

COPY --from=app_build app/build usr/share/nginx/html
COPY nginx/nginx.conf etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

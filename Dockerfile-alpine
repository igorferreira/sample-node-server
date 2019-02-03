FROM node:8-alpine
 
ARG buildno
ARG gitcommithash

RUN echo "Build number: $buildno"
RUN echo "Based on commit: $gitcommithash"

ENV \
  HOME=/opt/app \
  PATH=/opt/app/bin:/opt/app-root/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:$PATH \
  NPM_CONFIG_LOGLEVEL=info \
  LANG=C.UTF-8

RUN apk update \
    && apk upgrade \
    && apk add --no-cache ca-certificates \
    && update-ca-certificates 2>/dev/null || true

RUN apk add --no-cache --update bash bash-doc bash-completion \
    && apk add -U apk-tools-static busybox-static \
    && apk.static upgrade --no-self-upgrade -U -a

RUN mkdir -p ${HOME}

COPY . ${HOME}

WORKDIR $HOME

USER root
RUN chmod -R 777 ${HOME}
RUN echo "Running on $HOME"
RUN npm install 

EXPOSE 8080

CMD npm start
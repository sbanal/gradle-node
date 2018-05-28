FROM gradle:4.7.0-jdk8-alpine

USER root
RUN apk update
RUN apk add --update nodejs 
RUN apk -U --no-cache \
	--allow-untrusted add \
    zlib-dev \
    chromium \
    xvfb \
    wait4ports \
    xorg-server \
    dbus \
    ttf-freefont \
    mesa-dri-swrast \
    grep \ 
    udev \
    && apk del --purge --force linux-headers binutils-gold gnupg zlib-dev libc-utils \
    && rm -rf /var/lib/apt/lists/* \
    /var/cache/apk/* \
    /usr/share/man \
    /tmp/* \
    /usr/lib/node_modules/npm/man \
    /usr/lib/node_modules/npm/doc \
    /usr/lib/node_modules/npm/html \
    /usr/lib/node_modules/npm/scripts
RUN mkdir /workspace
RUN which node 
RUN node -v
RUN npm -v
RUN which java
RUN echo "JAVA_HOME:$JAVA_HOME"
RUN echo "PATH:$PATH"
RUN ls -l /usr

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

USER gradle
WORKDIR /workspace
CMD ["gradle"]


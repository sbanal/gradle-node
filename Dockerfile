FROM gradle:4.7.0-jdk8-alpine

USER root
RUN apk add --update nodejs 
RUN mkdir /workspace
RUN which node 
RUN node -v
RUN npm -v
RUN which java
RUN echo "JAVA_HOME:$JAVA_HOME"
RUN echo "PATH:$PATH"

USER gradle
WORKDIR /workspace
CMD ["gradle"]

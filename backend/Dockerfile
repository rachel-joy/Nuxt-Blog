FROM node:9
RUN npm install -g postgraphile
ADD ./run.sh /run.sh
ENV DEFAULT_ROLE anonymous
ENV SCHEMA public
ENV HOST 0.0.0.0
EXPOSE 5000
CMD bash /run.sh

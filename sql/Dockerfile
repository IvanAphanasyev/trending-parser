FROM postgres:latest

ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD pass
ENV POSTGRES_DB apidb
ENV POSTGRES_HOST_AUTH_METHOD md5

COPY structure.sql /docker-entrypoint-initdb.d/
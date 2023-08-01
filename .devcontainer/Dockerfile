# syntax=docker/dockerfile:1
FROM node:20-buster AS builder

# Use Bash as default shell
SHELL ["/bin/bash", "-c"]


# Prettier config https://github.com/prettier/eslint-config-prettier#excluding-deprecated-rules
ENV ESLINT_CONFIG_PRETTIER_NO_DEPRECATED=true 


# Change to /home/node/<your-project-name>
WORKDIR /home/node/project-name

COPY --chown=node:node ["package.json", "package-lock.json*", "./"]


# Releases containing enhancements
RUN apt update -y

# Install env utils and tools
RUN apt install git jpegoptim optipng webp imagemagick -y

# Development environment
FROM builder as dev
ENV NODE_ENV "development"
USER node
COPY --chown=node:node . .
# syntax=docker/dockerfile:1
FROM node:20-buster AS builder

# Use Bash as default shell
SHELL ["/bin/bash", "-c"]


# Change to /home/node/<your-project-name>
WORKDIR /home/node/project-name

COPY --chown=node:node ["package.json", "package-lock.json*", "./"]


# Releases containing enhancements
RUN apt update

# Install env utils and tools
RUN apt install git jpegoptim optipng webp imagemagick -y

# Development environment
FROM builder as dev
ENV NODE_ENV "development"
USER node
COPY --chown=node:node . .
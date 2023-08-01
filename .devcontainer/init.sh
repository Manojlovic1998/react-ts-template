#!/bin/bash

# Colors
GREEN="\033[0;32m"
PURPLE="\033[0;35m"
# Install All Dependencies
npm i

echo "${GREEN}Cloning img-optimize project repo"
git clone https://github.com/VirtuBox/img-optimize.git $HOME/.img-optimize

echo "${GREEN}Creating img-optimize alias in $($HOME)/.bashrc ..."

echo "alias img-optimize=$HOME/.img-optimize/optimize.sh" >> $HOME/.bashrc

echo "${GREEN}Sourcing .bashrc file into current active bash env"
. ~/.bashrc

echo "${PURPLE}----------------------------"
echo "${GREEN}Installation Completed"
echo "${$PURPLE}----------------------------"
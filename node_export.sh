#!/bin/bash
echo "export NODE_PATH=$NODE_PATH:~/.nvm/versions/node/$1/lib/node_modules" >> ~/.bashrc && source ~/.bashrc

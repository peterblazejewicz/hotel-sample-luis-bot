require('dotenv-extended').load();
const builder = require('botbuilder');
const restify = require('restify');
const Store = require('store');
const spellService = require('./spell-service');

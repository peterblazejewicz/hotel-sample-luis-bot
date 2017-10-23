require('dotenv-extended').load();

const builder = require('botbuilder');
const restify = require('restify');
const Store = require('./service/store');
const spellService = require('./service/spell-service');

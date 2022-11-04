'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('./../models');
const basicAuth = require('./../middleware/basic-auth.js')
const bearerAuth = require('./../middleware/bearer-auth.js')
const permissions = require('./../middleware/acl.js')


import * as ctrl from './test.controller';

import express = require('express');

export const router = express.Router();

router.get('/test', ctrl.test);
router.get('/test2', ctrl.test2);

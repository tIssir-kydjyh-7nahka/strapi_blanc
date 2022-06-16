'use strict';

/**
 * task-result service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-result.task-result');

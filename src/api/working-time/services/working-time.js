'use strict';

/**
 * working-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::working-time.working-time');

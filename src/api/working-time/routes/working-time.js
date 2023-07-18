'use strict';

/**
 * working-time router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::working-time.working-time');

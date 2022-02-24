'use strict';

/**
 * hypergrowth service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hypergrowth.hypergrowth');

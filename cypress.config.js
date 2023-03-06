const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nqf517',
  env: {
    baseUrl_etapa2: 'http://www.buscacep.correios.com.br',
    baseUrl_etapa3: 'https://www.booking.com',
    // baseUrl_etapa3: 'https://www.trivago.com.br'
    baseUrl_etapa4: 'https://serverest.dev'
  },

  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})

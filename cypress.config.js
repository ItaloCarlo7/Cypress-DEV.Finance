const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Codigo para diminuir o tamanho da aplicação, e simular teste Mobile.
  //viewportWidth: 660,
  //viewportHeight: 1000,

  // Codigo para abilitar a gravação do video do teste.
  video:true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
     
    
    },
  },


});

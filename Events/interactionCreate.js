const { Events } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand() && !interaction.isButton() && !interaction.isModalSubmit()) return;

    if (interaction.isButton()) {
      try {
        const buttonPath = path.join(appRoot, 'Buttons');
        const buttomInteraction = fs.readdirSync(buttonPath).filter(file => file.endsWith('.js'));

        for (const file of buttomInteraction) {
          const filePath = path.join(buttonPath, file);
          console.log(buttomInteraction)
          const button = require(filePath);

          if ('data' in button && 'execute' in button) {
            if (interaction.customId == button.data.customId) {
              await button.execute(interaction);
              return;
            }
          } else {
            console.error(`Your button does not have a response`);
            return;
          }

        }

        console.log(`button pressed: ${interaction.customId}`)
      }
      catch (error) {
        console.error(`Error executing button interaction: ${interaction.customId}`);
        console.error(error);
      }
      return;
    }

    if (interaction.isModalSubmit()) {
      try {
        const modalResponsesPath = path.join(appRoot, 'ModalSubmit');
        const responseFiles = fs.readdirSync(modalResponsesPath).filter(file => file.endsWith('.js'));

        for (const file of responseFiles) {
          const filePath = path.join(modalResponsesPath, file);
          console.log(responseFiles)
          const response = require(filePath);

          if ('data' in response && 'execute' in response) {
            if (interaction.customId == response.data.customId) {
              await response.execute(interaction);
              return;
            }  
          } else {
            console.error(`Your modal does not have a response`);
            return;
          }
          
        } 

        console.log(`Modal Submit from ${interaction.customId}`)
      }
      catch (error) {
        console.error(`Error executing modal submition from modal ${interaction.customId}`);
        console.error(error);
      }
      return;
    }

    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
      }

      try {
        await command.execute(interaction);
      }
      catch (error) {
        console.error(`Error executing ${interaction.commandName}`);
        console.error(error);
      }
    }

  },
};
const db = require("../Utilities/sqlite");
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: {
        customId: "confirm"
    },
    execute: async (interaction) => {
        console.log(interaction.message.id);
        interaction.reply("HI!")
    }
}
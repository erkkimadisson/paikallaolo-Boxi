const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Returns the websocket ping'),
	async execute(interaction) {
		const client = interaction.client;
		await interaction.reply(`Websocket ping is: ${client.ws.ping}ms`);

	},
};
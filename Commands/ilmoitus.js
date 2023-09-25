const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ilmoitus')
    .setDescription('Ilmoita paikallaolostasi'),
  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("paikallaolo")
      .setTitle("Paikallaolo ilmoitus")

    // Add components to modal

    // Create the text input components
    const tapahtumaInput = new TextInputBuilder()
      .setCustomId('Tapahtuma')
      // The label is the prompt the user sees for this input
      .setLabel("Mikä on tapahtuman nimi?")
      // Short means only a single line of text
      .setStyle(TextInputStyle.Short);

    const päivämääräInput = new TextInputBuilder()
      .setCustomId('Päivämäärä')
      .setLabel("Tapahtuman päivämäärä?")
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Short);

    const aloitusAikaInput = new TextInputBuilder()
      .setCustomId('AloitusAika')
      .setLabel("Milloin saavuit paikalle?")
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Short);
    const lopetusAikaInput = new TextInputBuilder()
      .setCustomId('LopetusAika')
      .setLabel("Milloin lähdit?")
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Short);
    
    const nimiInput = new TextInputBuilder()
      .setCustomId('Oppilas')
      .setLabel("Koko Nimesi")
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Short);
    // An action row only holds one text input,
    // so you need one action row per text input.
    const Nimi = new ActionRowBuilder().addComponents(nimiInput);
    const Tapahtuma = new ActionRowBuilder().addComponents(tapahtumaInput);
    const Päiväys = new ActionRowBuilder().addComponents(päivämääräInput);

    const PaikalleTulo = new ActionRowBuilder().addComponents(aloitusAikaInput)
    const PaikaltaMeno = new ActionRowBuilder().addComponents(lopetusAikaInput)


    // Add inputs to the modal
    modal.addComponents(Nimi, Tapahtuma, Päiväys, PaikalleTulo, PaikaltaMeno);

    // Show the modal to the user
    await interaction.showModal(modal);
  },
};
module.exports = {
  data: {
    customId: "paikallaolo"
  },
  execute: async (interaction) => {
    const modelContent = {
      Tapahtuma: interaction.fields.getTextInputValue('Tapahtuma'),
      Päivämäärä: interaction.fields.getTextInputValue('Päivämäärä'),
      // AloitusAika: interaction.getTextInputValue('AloitusAika'),
      // LopetusAika: interaction.getTextInputValue('LopetusAika')

    }
    await interaction.reply(JSON.stringify(modelContent))
  }
}
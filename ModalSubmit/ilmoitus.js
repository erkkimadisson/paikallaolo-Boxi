const db = require("../Utilities/sqlite");
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js");
const ACCEPT_CHANNEL_ID = process.env.ACCEPT_CHANNEL_ID;


module.exports = {
  data: {
    customId: "paikallaolo"
  },
  execute: async (interaction) => {
    const acceptChannel = interaction.client.channels.fetch(ACCEPT_CHANNEL_ID).then(async channel => {
      const embed = new EmbedBuilder()
        .setColor(0xC3B1E1)
        .setTitle('Oppilaan paikallaolo')
        .setDescription('Ilmoitus Oppilaan paikallaolosta!')
        .setFields(
          { name: "Oppilas", value: interaction.fields.getTextInputValue('Oppilas'), inline: true },
          { name: "Tapahtuma", value: interaction.fields.getTextInputValue('Tapahtuma'), inline: true },
          { name: "Tapahtuman päivämäärä", value: interaction.fields.getTextInputValue('Päivämäärä'), inline: true },
          { name: "Paikallaolon aikaväli", value: `${interaction.fields.getTextInputValue('AloitusAika')}-${interaction.fields.getTextInputValue('LopetusAika')}`, inline: false },
      )
      const hyväksy = new ButtonBuilder()
        .setCustomId('confirm')
        .setLabel('Hyväksy')
        .setStyle(ButtonStyle.Success)
      
      const hylkää = new ButtonBuilder()
        .setCustomId('reject')
        .setLabel('Hylkää')
        .setStyle(ButtonStyle.Danger)
      const actionRow = new ActionRowBuilder().addComponents(hylkää, hyväksy)
      const acceptMessage = await channel.send({ embeds: [embed], components: [actionRow]});

      const modelContent = [
        interaction.fields.getTextInputValue('Oppilas'),
        interaction.fields.getTextInputValue('Tapahtuma'),
        interaction.fields.getTextInputValue('Päivämäärä'),
        interaction.fields.getTextInputValue('AloitusAika'),
        interaction.fields.getTextInputValue('LopetusAika'),
        0,
        null,
        acceptMessage.id

      ]
      let insertSQL = `INSERT INTO 'paikallaolo'(Oppilas, Tapahtuma, Päivämäärä, SaapumisAika, LähtöAika, Kuittaus, KuittausAika, opeViesti) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
      console.log(insertSQL);
      db.run(insertSQL, modelContent, (err) => {
        if (err) {
          return console.error(err.message);
        }

        console.log("Uusi kuittaus luotu")
      })
      await interaction.reply(JSON.stringify(modelContent));
    });

  //   
  }
}
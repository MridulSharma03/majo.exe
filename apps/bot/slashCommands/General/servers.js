import { ApplicationCommandType, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js";

export default {
 name: "servers",
 description: "🧭 Display the number of servers the Majo.exe is in",
 type: ApplicationCommandType.ChatInput,
 cooldown: 3000,
 dmPermission: true,
 usage: "/servers",
 run: async (client, interaction) => {
  try {
   const allGuilds = client.guilds.cache;
   const inviteLink = `https://discord.com/oauth2/authorize/?permissions=${client.config.bot.permissions}&scope=${client.config.bot.scopes}&client_id=${client.user?.id}`;
   const embed = new EmbedBuilder() // Prettier
    .setTitle(`🧭 ${client.user?.username} is in ${allGuilds.size} servers!`)
    .setDescription(`If you want to invite Majo.exe to your server, you can do so by clicking [here](${inviteLink}).`)
    .setFooter({
     text: `Requested by ${interaction.member?.user?.username}`,
     iconURL: interaction.member?.user?.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     }),
    })
    .setColor("#5865F2")
    .setTimestamp()
    .setThumbnail(client.user?.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }));

   const inviteButton = new ButtonBuilder().setLabel("Invite").setStyle(ButtonStyle.Link).setURL(inviteLink);

   if (client.config.dashboard.enabled && client.config.dashboard.link) {
    const contactButton = new ButtonBuilder().setLabel("Dashboard").setStyle(ButtonStyle.Link).setURL(client.config.dashboard.link);
    const action = new ActionRowBuilder().addComponents(inviteButton, contactButton);
    return interaction.reply({ ephemeral: false, embeds: [embed], components: [action] });
   }

   const action = new ActionRowBuilder().addComponents(inviteButton);

   return interaction.reply({ ephemeral: false, embeds: [embed], components: [action] });
  } catch (err) {
   client.errorMessages.generateErrorMessage(interaction, err);
  }
 },
};
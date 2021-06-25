module.exports = {
    name: 'pdp',
    description: 'Display avatar URL.',
    execute(message) {
      if (!message.mentions.users.size) {
        return message.channel.send(`Ta pdp chakal : ${message.author.displayAvatarURL({ format: 'png' })}`);
      }
  
      const avatarList = message.mentions.users.map(user => {
        return `La pdp de ${user.username} chakal : ${user.displayAvatarURL({ format: 'png' })}`;
      });
  
      message.channel.send(avatarList);
    }
  };
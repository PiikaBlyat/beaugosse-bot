module.exports = {
    name: 'play',
    description: 'Play requested sound.',
    async execute(message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0]), {
                volume: 0.5,
            });
            
            dispatcher.on('start', () => {
                message.client.user.setActivity('YouTube', { type: 'LISTENING' })
            })

            dispatcher.on('error', () => {
                message.reply("je n'ai pas réussi à lire ta vidéo de merde.");
                dispatcher.destroy();
                message.member.voice.channel.leave();
            })
            
            
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
            })
        }   
    }
};
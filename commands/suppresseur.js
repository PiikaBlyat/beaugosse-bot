module.exports = {
    name: 'suppresseur',
    description: 'Supprime les messages.',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("Ce n'est pas un nombre fdp.");
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply("Met un nombre entre 1 et 99 fdp.");
        }

        message.channel.bulkDelete(amount)
           .then(messages => console.log(`${messages.size - 1} messages supprimés.`))
    }
};
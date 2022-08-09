
module.exports = {
    name: "linkstart",
    run: async (client, interaction) => {

        // ----------------
        // List of new students
        // ----------------


        // const studs = ["688109195819483217", "546302418975981578", "689566443360223266", "779439511959896124", "626300328798584842", "565627181145784322", "568067422871879686"]
        const studs = ["239455598343618580", "318026828549718016"];
        console.log(client);
        for (const st of studs) {

            await client.users.fetch(st)
                .then((user, err) => {
                    if (err) {
                        console.log(err);
                    }

                    try {
                        user.send({ content: "Bonjour! Mon nom est **Zouk** le bot en charge de vérifier " +
                                "les ipsaliens ehe ;).\nSi tu reçois ce message c'est que tu as indiqué aux modos discord IPSA " +
                                "que tu avais été admis.\nPour engager la discussion avec moi afin de te vérifier, je te prie de me répondre " +
                                "ainsi: **linkstart**" })
                            .catch(() => {
                                interaction.reply({ content: `User ${st} has DMs closed`, ephemeral: true });
                            });

                        console.log(`${user} contacted!`)
                    } catch (err) {
                        console.log(err);
                    }
            })


        }

        interaction.reply({ content: "done.", ephemeral: true });

    }
};
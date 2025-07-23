const { quote } = require("coderxza");
const mime = require("mime-types");
const axios = require("axios");

module.exports = {
    name: "waifusm",
    category: "maker",
    permissions: {
        coin: 10
    },
    code: async (ctx) => {
        const input = ctx.args.join(" ").trim();

        // Define available styles from the API
        const styleMap = {
            animal: "animal",
            animalears: "animalears",
            anusview: "anusview",
            ass: "ass",
            barefoot: "barefoot",
            bed: "bed",
            bell: "bell",
            bikini: "bikini",
            blonde: "blonde",
            bondage: "bondage",
            bra: "bra",
            breasthold: "breasthold",
            breasts: "breasts",
            bunnyears: "bunnyears",
            bunnygirl: "bunnygirl",
            chain: "chain",
            closeview: "closeview",
            cloudsview: "cloudsview",
            cum: "cum",
            dress: "dress",
            drunk: "drunk",
            elbowgloves: "elbowgloves",
            erectnipples: "erectnipples",
            fateseries: "fateseries",
            fingering: "fingering",
            flatchest: "flatchest",
            food: "food",
            foxgirl: "foxgirl",
            gamecg: "gamecg",
            genshin: "genshin",
            glasses: "glasses",
            gloves: "gloves",
            greenhair: "greenhair",
            hatsunemiku: "hatsunemiku",
            hcatgirl: "hcatgirl",
            headband: "headband",
            headdress: "headdress",
            headphones: "headphones",
            hentaimiku: "hentaimiku",
            hloli: "hloli",
            hneko: "hneko",
            hololive: "hololive",
            horns: "horns",
            inshorts: "inshorts",
            japanesecloths: "japanesecloths",
            necklace: "necklace",
            nipples: "nipples",
            nobra: "nobra",
            nsfwbeach: "nsfwbeach",
            nsfwbell: "nsfwbell",
            nsfwdemon: "nsfwdemon",
            nsfwidol: "nsfwidol",
            nsfwmaid: "nsfwmaid",
            nsfwmenu: "nsfwmenu",
            nsfwvampire: "nsfwvampire",
            nude: "nude",
            openshirt: "openshirt",
            pantyhose: "pantyhose",
            pantypull: "pantypull",
            penis: "penis",
            pinkhair: "pinkhair",
            ponytail: "ponytail",
            pussy: "pussy",
            schoolswimsuit: "schoolswimsuit",
            schooluniform: "schooluniform",
            seethrough: "seethrough",
            sex: "sex",
            sex2: "sex2",
            sex3: "sex3",
            shirt: "shirt",
            shirtlift: "shirtlift",
            skirt: "skirt",
            spreadlegs: "spreadlegs",
            spreadpussy: "spreadpussy",
            squirt: "squirt",
            stockings: "stockings",
            sunglasses: "sunglasses",
            swimsuit: "swimsuit",
            tail: "tail",
            tattoo: "tattoo",
            tears: "tears",
            thighhighs: "thighhighs",
            thogirls: "thogirls",
            topless: "topless",
            torncloths: "torncloths",
            touhou: "touhou",
            twintails: "twintails",
            uncensored: "uncensored",
            underwear: "underwear",
            vocaloid: "vocaloid",
            weapon: "weapon",
            white: "white",
            whitehair: "whitehair",
            wings: "wings",
            withflowers: "withflowers",
            withguns: "withguns",
            withpetals: "withpetals",
            withtie: "withtie",
            withtree: "withtree",
            wolfgirl: "wolfgirl",
            yuri: "yuri"
          };
          

        if (!input || input.toLowerCase() === "list") {
            const list = Object.keys(styleMap)
                .map(style => `• \`${style}\``)
                .join("\n");

            return await ctx.reply(
                `✨ *ᴀᴠᴀɪʟᴀʙʟᴇ ᴡᴀɪꜰᴜꜱᴍ ꜱᴛʏʟᴇꜱ:*\n\n${list}\n\n` +
                `👉 ᴜꜱᴇ: \`.ᴡᴀɪꜰᴜꜱᴍ <ꜱᴛʏʟᴇ>\`\n` +
                `ᴇxᴀᴍᴘʟᴇ: \`.ᴡᴀɪꜰᴜꜱᴍ animalears\``
            );
        }

        const style = input.toLowerCase();
        const selected = styleMap[style];

        if (!selected) {
            return await ctx.reply(quote(`❌ ꜱᴛʏʟᴇ \`${style}\` ɴᴏᴛ ꜰᴏᴜɴᴅ. ᴛʏᴘᴇ \`.ᴡᴀɪꜰᴜꜱᴍ ʟɪꜱᴛ\` ᴛᴏ ꜱᴇᴇ ᴀʟʟ ᴠᴀʟɪᴅ ꜱᴛʏʟᴇꜱ.`));
        }

        try {
            const apiUrl = `https://archive.lick.eu.org/api/waifusm/${selected}`;
            const res = await axios.get(apiUrl);
            const imageUrl = res.data?.result;

            if (!imageUrl) {
                return await ctx.reply(quote("❌ ɪᴍᴀɢᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ. ᴘʟᴇᴀꜱᴇ ᴛʀʏ ᴀ ᴅɪꜰꜰᴇʀᴇɴᴛ ꜱᴛʏʟᴇ."));
            }

            return await ctx.reply({
                image: { url: imageUrl },
                mimetype: mime.lookup("jpg") || "image/jpeg",
                caption: `${quote(`🖼️ ꜱᴛʏʟᴇ: ${style}`)}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ CODERXSA`
            });
        } catch (err) {
            console.error(err);
            return await ctx.reply(quote("⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ꜰᴇᴛᴄʜɪɴɢ ᴛʜᴇ ɪᴍᴀɢᴇ."));
        }
    }
};

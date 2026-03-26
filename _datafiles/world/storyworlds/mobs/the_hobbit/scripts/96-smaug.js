
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("treasure") >= 0 || question.indexOf("gold") >= 0 || question.indexOf("hoard") >= 0) {
        mob.Command("emote shifts atop the mountain of gold, coins cascading like an avalanche.");
        mob.Command("say MY treasure. Every last coin, every last gem. I know it all — every cup, every ring, every fleck of gold dust.");
        mob.Command("say I know when even a single coin is missing. Do not think to steal from me, little thief.", 2.0);
        return true;
    }

    if (question.indexOf("thief") >= 0 || question.indexOf("burglar") >= 0 || question.indexOf("barrel") >= 0) {
        mob.Command("emote inhales deeply, nostrils flaring.");
        mob.Command("say I smell you. I hear your breath. I feel your air. I know you are there.");
        mob.Command("say Barrel-rider. Luckwearer. Is that what you call yourself? How very... interesting.", 2.0);
        return true;
    }

    if (question.indexOf("armor") >= 0 || question.indexOf("scale") >= 0 || question.indexOf("strong") >= 0) {
        mob.Command("emote rears up, revealing his gem-encrusted belly.");
        mob.Command("say My armour is like tenfold shields! My teeth are swords! My claws are spears! My tail a thunderbolt! My wings a hurricane!");
        mob.Command("say No blade can pierce me. No arrow can find a mark. I am INVULNERABLE.", 2.0);
        return true;
    }

    if (question.indexOf("arkenstone") >= 0 || question.indexOf("heart") >= 0) {
        mob.Command("emote 's vast golden eye narrows to a slit.");
        mob.Command("say The Arkenstone? Why do you ask about the Arkenstone?");
        mob.Command("say I know every treasure in this hoard. Every. Last. One.", 2.0);
        return true;
    }

    if (question.indexOf("weakness") >= 0 || question.indexOf("vulnerable") >= 0 || question.indexOf("bare") >= 0) {
        mob.Command("emote laughs, a sound like thunder rolling through the mountain.");
        mob.Command("say Weakness? I have NO weakness, little creature!");
        mob.Command("emote rolls onto his back, displaying the jeweled belly with one bare patch.", 2.0);
        return true;
    }

    if (question.indexOf("lake") >= 0 || question.indexOf("town") >= 0 || question.indexOf("men") >= 0 || question.indexOf("esgaroth") >= 0) {
        mob.Command("emote rumbles with dark amusement.");
        mob.Command("say Those miserable men in their wooden town on the lake? They send me no tribute. They DARE to trade with my enemies.");
        mob.Command("say Perhaps I shall pay them a visit. Wood burns so nicely.", 2.0);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("title") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("emote draws himself up to his full, terrible height.");
        mob.Command("say I am Smaug! I am death! I am fire! I am the Chiefest and Greatest of Calamities!");
        mob.Command("say Smaug the Tremendous! Smaug the Stupendous! The Unassessably Wealthy!", 2.0);
        return true;
    }

    var defaults = [
        "say You amuse me, little creature. For the moment.",
        "say Tell me more about yourself. I do so enjoy... conversation before a meal.",
        "say Flattery will get you nowhere. But do continue. I enjoy it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("arkenstone") >= 0) {
        mob.Command("emote 's pupils contract to razor-thin slits.");
        mob.Command("say The Arkenstone. So. The dwarves sent you for THAT.", 1.5);
        mob.Command("say You will burn for this. They will ALL burn.", 3.0);
        return true;
    }

    return false;
}

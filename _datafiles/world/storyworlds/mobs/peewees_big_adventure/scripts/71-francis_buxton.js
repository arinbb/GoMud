
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bike") >= 0 || question.indexOf("bicycle") >= 0) {
        mob.Command("say That bike should be MINE! I offered him a fair price!");
        mob.Command("emote 's face turns red with indignation.", 1.5);
        mob.Command("say Every kid in the neighborhood knows that bike is wasted on Pee-wee. I would APPRECIATE it. I would put it in my COLLECTION.", 3);
        mob.Command("say I have a room full of the finest bicycles money can buy, but that red one... that's the one I NEED.", 5);
        return true;
    }

    if (question.indexOf("pee-wee") >= 0 || question.indexOf("peewee") >= 0 || question.indexOf("pee wee") >= 0 || question.indexOf("herman") >= 0) {
        mob.Command("say Pee-wee Herman is the most ANNOYING person on the face of the earth!");
        mob.Command("say He thinks he's SO special with his little suit and his little bow tie and his STUPID laugh!", 2);
        mob.Command("emote mimics Pee-wee's laugh badly, sounding more like a strangled goose.", 3.5);
        mob.Command("say I know you are, but what am I? I KNOW YOU ARE, BUT WHAT AM I?! Ugh, I can't STAND it!", 5);
        return true;
    }

    if (question.indexOf("father") >= 0 || question.indexOf("dad") >= 0 || question.indexOf("daddy") >= 0) {
        mob.Command("say My father is a VERY important man. He buys me anything I want.");
        mob.Command("emote puffs up his chest proudly.", 1.5);
        mob.Command("say He bought me a swimming pool, a tennis court, an arcade, a go-kart track...", 3);
        mob.Command("say But he CAN'T buy me that bike because Pee-wee won't SELL it!", 4.5);
        mob.Command("emote stamps his foot so hard the floor shakes.", 6);
        return true;
    }

    var defaults = [
        "say I don't want to talk about that. I want to talk about the BIKE.",
        "say Whatever. My father could buy ten of whatever that is.",
        "say Do you know where Pee-wee's bike is? Because I need to know. For... reasons."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("bicycle") >= 0 || showText.indexOf("bike") >= 0 || showText.indexOf("miniature") >= 0) {
        mob.Command("say GIVE ME THAT!");
        mob.Command("emote lunges for the tiny bicycle, then catches himself.", 1);
        mob.Command("say I mean... how much do you want for it? Name your price. My father will pay.", 2.5);
        return true;
    }

    mob.Command("say Whatever that is, I have a better one at home.");
    return true;
}

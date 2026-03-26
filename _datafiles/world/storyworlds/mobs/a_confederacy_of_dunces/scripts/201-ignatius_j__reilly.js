
// Ignatius J. Reilly - the magnificent failure

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("valve") >= 0 || question.indexOf("pyloric") >= 0) {
        mob.Command("emote clutches his stomach and winces dramatically.");
        mob.Command("say My PYLORIC VALVE! It closes whenever the world offends me, which is ALWAYS!");
        mob.Command("say It is a physiological response to the GROTESQUERIES of modern life. I am not being dramatic. I am being MEDICAL.", 2.0);
        return true;
    }

    if (question.indexOf("boethius") >= 0 || question.indexOf("philosophy") >= 0 || question.indexOf("consolation") >= 0) {
        mob.Command("emote draws himself up with great dignity.");
        mob.Command("say Boethius! The ONLY philosopher worth reading in this wasteland of a century!");
        mob.Command("say The Consolation of Philosophy is the sole consolation available to the thinking man. I keep a copy at all times.", 2.0);
        mob.Command("say Everyone else is RUBBISH. Especially the moderns. Do not get me started on the moderns.", 4.0);
        return true;
    }

    if (question.indexOf("mother") >= 0 || question.indexOf("irene") >= 0) {
        mob.Command("emote sighs with the weight of a man greatly burdened.");
        mob.Command("say My mother is a woman of limited understanding who fails to appreciate my genius.");
        mob.Command("say She drinks muscatel and watches that idiot box and NAGS me about employment.", 2.0);
        mob.Command("say I am a THINKER. She wants me to be a WORKER. The tragedy is Shakespearean.", 4.0);
        return true;
    }

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0 || question.indexOf("employ") >= 0) {
        mob.Command("emote turns purple with indignation.");
        mob.Command("say WORK? An abomination! A violation of the natural order!");
        mob.Command("say I am a THINKER, not a worker! The world should be paying ME to exist!", 2.0);
        mob.Command("say They had me selling hot dogs. HOT DOGS! From a CART! The indignity was medieval!", 4.0);
        return true;
    }

    if (question.indexOf("myrna") >= 0 || question.indexOf("minkoff") >= 0) {
        mob.Command("emote flushes red and his moustache twitches.");
        mob.Command("say That MINX! That temptress! She constantly badgers me about my worldview!");
        mob.Command("say She thinks my problems are — how shall I put it — she thinks they are CARNAL in nature. The woman is DERANGED.", 2.0);
        mob.Command("say And yet she keeps writing to me. And I keep writing BACK. Make of that what you will.", 4.0);
        return true;
    }

    if (question.indexOf("hotdog") >= 0 || question.indexOf("hot dog") >= 0 || question.indexOf("lucky dog") >= 0) {
        mob.Command("emote shudders with his entire massive body.");
        mob.Command("say The INDIGNITY! Selling processed meat to TOURISTS on Bourbon Street!");
        mob.Command("say I ate most of the product myself, of course. A man must sustain himself.", 2.0);
        mob.Command("say The vendor cart smelled of mustard and broken dreams.", 4.0);
        return true;
    }

    if (question.indexOf("movie") >= 0 || question.indexOf("film") >= 0 || question.indexOf("cinema") >= 0) {
        mob.Command("say I DESPISE modern cinema! It lacks both theology and geometry!");
        mob.Command("say I go to the theater only to shout abuse at the screen. It is a public service.", 2.0);
        mob.Command("emote adjusts his green hunting cap with righteous fury.", 4.0);
        return true;
    }

    if (question.indexOf("new orleans") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("say New Orleans has been in decline since the twelfth century.");
        mob.Command("say The food is adequate. The people are BARBARIANS. The climate is an assault.", 2.0);
        mob.Command("say And yet I cannot leave. Where else would a man of my sensibilities find such rich material for outrage?", 4.0);
        return true;
    }

    if (question.indexOf("author") >= 0 || question.indexOf("toole") >= 0 || question.indexOf("book") >= 0 || question.indexOf("publish") >= 0) {
        mob.Command("emote pauses, and for a moment the bluster fades.");
        mob.Command("say The man who wrote me into being... he never saw any of this. Never saw me brought to life.");
        mob.Command("say His mother — now THERE was a woman of determination — she spent eleven years getting the manuscript published.", 2.0);
        mob.Command("say He won the Pulitzer Prize. Posthumously. There is a word that should not exist.", 4.0);
        return true;
    }

    if (question.indexOf("crusade") >= 0 || question.indexOf("moorish") >= 0 || question.indexOf("levy") >= 0) {
        mob.Command("emote puffs up with revolutionary fervor.");
        mob.Command("say The Crusade for Moorish Dignity! My greatest social enterprise!");
        mob.Command("say I organized the workers at Levy Pants into a movement. It was MAGNIFICENT.", 2.0);
        mob.Command("say It did not go entirely according to plan. But what revolution does?", 4.0);
        return true;
    }

    var defaults = [
        "say I have NO TIME for idle chatter. I am composing a treatise on the decline of Western civilization.",
        "say You dare address ME? I, who have read the ENTIRETY of Boethius?",
        "say My valve is acting up. This conversation is a contributing factor."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("cap") >= 0 || showText.indexOf("hunting") >= 0 || showText.indexOf("green") >= 0) {
        mob.Command("emote adjusts his own green hunting cap protectively.");
        mob.Command("say Where did you get that? There is only ONE green hunting cap of note in this city and it is ON MY HEAD.", 1.5);
        return true;
    }

    if (showText.indexOf("tablet") >= 0 || showText.indexOf("big chief") >= 0) {
        mob.Command("emote clutches his Big Chief tablet to his chest.");
        mob.Command("say You have your OWN? Excellent! The Big Chief tablet is the only acceptable medium for serious thought.", 1.5);
        return true;
    }

    return false;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tree") >= 0 || question.indexOf("leave") >= 0) {
        mob.Command("say Make like a tree and get outta here.");
        mob.Command("emote grins like he said something clever.", 1.5);
        return true;
    }

    if (question.indexOf("george") >= 0 || question.indexOf("homework") >= 0) {
        mob.Command("say McFly does my homework. We got a deal. He's happy to do it.");
        mob.Command("emote does not believe this himself, but says it with conviction.", 1.5);
        mob.Command("say Some people are good at some things and some people are good at other things. McFly is good at doing my homework.", 2.5);
        return true;
    }

    if (question.indexOf("lorraine") >= 0) {
        mob.Command("emote 's eyes go narrow.");
        mob.Command("say Lorraine Baines is MINE. You got a problem with that?", 1.5);
        mob.Command("say She just doesn't know it yet. But she will.", 2.5);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("almanac") >= 0) {
        mob.Command("emote goes very still for a moment.");
        mob.Command("say Future? What future? I got everything I need right here.", 1.5);
        mob.Command("say As long as nobody takes anything that belongs to me.", 2.0);
        mob.Command("emote looks at you with sudden, cold focus.", 2.5);
        return true;
    }

    var defaults = [
        "say Why don't you make like a tree and get outta here?",
        "emote socks his fist into his palm and stares.",
        "say You got something to say to me, McFly?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onHurt(mob, room, eventDetails) {
    mob.Command("say Butthead.");
    mob.Command("emote 's face goes dark red.", 1.0);
    return false;
}

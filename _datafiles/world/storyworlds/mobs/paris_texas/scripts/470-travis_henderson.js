
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("jane") >= 0 || question.indexOf("wife") >= 0 || question.indexOf("woman") >= 0) {
        mob.Command("emote is quiet for a long time.");
        mob.Command("emote looks at the ground.", 2.0);
        mob.Command("say She was good. She was real good.", 4.0);
        mob.Command("emote says nothing after that.", 5.5);
        return true;
    }

    if (question.indexOf("hunter") >= 0 || question.indexOf("son") >= 0 || question.indexOf("boy") >= 0 || question.indexOf("kid") >= 0) {
        mob.Command("emote looks up for the first time.");
        mob.Command("say He looks like her.", 1.5);
        mob.Command("emote touches the brim of his cap.", 3.0);
        mob.Command("say He looks like her but he acts like me. I don't know if that's a good thing.", 4.5);
        return true;
    }

    if (question.indexOf("paris") >= 0 || question.indexOf("texas") >= 0 || question.indexOf("land") >= 0 || question.indexOf("lot") >= 0) {
        mob.Command("emote looks at the horizon.");
        mob.Command("say I bought a piece of land there. In Paris, Texas.", 2.0);
        mob.Command("emote pauses.", 3.5);
        mob.Command("say My mother was from Paris. My father was from Texas.", 5.0);
        mob.Command("emote says nothing else, as if that explains everything, which it does not, which he knows.", 6.5);
        return true;
    }

    if (question.indexOf("desert") >= 0 || question.indexOf("gone") >= 0 || question.indexOf("where") >= 0 || question.indexOf("disappear") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say I went to the desert.", 2.0);
        mob.Command("emote looks at his hands.", 3.5);
        mob.Command("say I don't know why.", 5.0);
        return true;
    }

    if (question.indexOf("walt") >= 0 || question.indexOf("brother") >= 0) {
        mob.Command("say Walt's a good man.");
        mob.Command("emote nods slowly.", 2.0);
        mob.Command("say Better than me.", 3.5);
        return true;
    }

    var defaults = [
        "emote looks at you for a moment and then looks away.",
        "emote adjusts his cap.",
        "emote says nothing. This is not unfriendly. It is just nothing."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at what you are holding.");
    mob.Command("emote nods slowly.", 1.5);
    mob.Command("emote looks back at the horizon.", 3.0);
    return true;
}

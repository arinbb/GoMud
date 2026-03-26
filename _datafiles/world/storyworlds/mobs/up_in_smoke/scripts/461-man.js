function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pedro") >= 0 || question.indexOf("cheech") >= 0) {
        mob.Command("emote sets the guitar down gently.");
        mob.Command("say Pedro is a righteous dude. He has the most enthusiasm of any person I know.");
        mob.Command("say Sometimes he explains a plan and I think: that will not work. Then it works. Far out.", 2.0);
        return true;
    }

    if (question.indexOf("music") >= 0 || question.indexOf("guitar") >= 0 || question.indexOf("song") >= 0) {
        mob.Command("emote holds up the guitar.");
        mob.Command("say Music is the language the universe uses when words are too small.");
        mob.Command("say I play and I listen. Sometimes they are the same thing.", 2.0);
        return true;
    }

    if (question.indexOf("life") >= 0 || question.indexOf("meaning") >= 0 || question.indexOf("universe") >= 0) {
        mob.Command("emote gestures at the lava lamp.");
        mob.Command("say You see the lamp? It does not try to be a lamp. It just is a lamp. Completely.");
        mob.Command("say That is the whole thing right there. Just be what you are. Completely. Far out.", 2.0);
        return true;
    }

    if (question.indexOf("van") >= 0) {
        mob.Command("emote smiles slowly.");
        mob.Command("say The van is a special vehicle. It has its own energy.");
        mob.Command("say Pedro built it. It builds itself, sort of. It is its own thing now.", 2.0);
        return true;
    }

    if (question.indexOf("cosmic") >= 0 || question.indexOf("far out") >= 0 || question.indexOf("heavy") >= 0) {
        mob.Command("emote nods with deep sincerity.");
        mob.Command("say Yes. Exactly. You understand.");
        mob.Command("emote strums a chord that hangs in the air like incense.", 2.0);
        return true;
    }

    if (question.indexOf("lamp") >= 0 || question.indexOf("lava") >= 0) {
        mob.Command("emote turns to look at the lamp with you.");
        mob.Command("say I have been watching that lamp for three hours. It has shown me four things.");
        mob.Command("say I will tell you one: patience. The blobs do not hurry. Neither should you.", 2.0);
        return true;
    }

    var defaults = [
        "say Far out.",
        "emote strums a chord and lets it fade, satisfied.",
        "say I was just thinking about that, actually. Heavy."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

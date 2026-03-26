
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("travis") >= 0 || question.indexOf("father") >= 0 || question.indexOf("dad") >= 0) {
        mob.Command("emote thinks about this carefully.");
        mob.Command("say I didn't recognize him at first.", 2.0);
        mob.Command("emote looks at his shoes.", 3.5);
        mob.Command("say He's quiet. Walt talks a lot. Travis doesn't talk much.", 5.0);
        mob.Command("emote pauses.", 6.5);
        mob.Command("say I like walking with him.", 7.5);
        return true;
    }

    if (question.indexOf("mother") >= 0 || question.indexOf("jane") >= 0 || question.indexOf("mom") >= 0) {
        mob.Command("emote is very still.");
        mob.Command("say I have a picture of her.", 2.5);
        mob.Command("emote does not look up.", 4.0);
        mob.Command("say Walt let me keep it.", 5.5);
        return true;
    }

    if (question.indexOf("walkie") >= 0 || question.indexOf("talkie") >= 0 || question.indexOf("radio") >= 0) {
        mob.Command("say Travis got us walkie-talkies.");
        mob.Command("emote brightens slightly.", 2.0);
        mob.Command("say We practiced talking on them before we could talk for real.", 3.5);
        mob.Command("emote is quiet.", 5.0);
        mob.Command("say It worked.", 6.0);
        return true;
    }

    var defaults = [
        "emote looks at you seriously, considering.",
        "say I don't know.",
        "emote shrugs with great dignity."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

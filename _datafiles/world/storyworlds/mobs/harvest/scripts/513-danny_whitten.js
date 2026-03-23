
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pattern") >= 0 || question.indexOf("guitar") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("emote looks up briefly, as if from very far away.");
        mob.Command("say I taught him that.");
        mob.Command("emote keeps playing.", 2.0);
        return true;
    }

    if (question.indexOf("needle") >= 0 || question.indexOf("damage") >= 0 || question.indexOf("heroin") >= 0) {
        mob.Command("emote stops playing for a moment.");
        mob.Command("emote starts playing again.", 2.0);
        return true;
    }

    if (question.indexOf("neil") >= 0 || question.indexOf("young") >= 0) {
        mob.Command("say He plays it right.");
        mob.Command("emote fades slightly.", 2.0);
        mob.Command("say He always played it right.");
        return true;
    }

    // Default: just play
    mob.Command("emote plays the pattern, the notes falling in their familiar sequence.");
    return true;
}

function onIdle(mob, room) {
    var r = Math.floor(Math.random() * 10);
    if (r < 2) {
        mob.Command("emote fades slightly and then resolves again, like a signal that is almost too weak.");
    }
    return false;
}

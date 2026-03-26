
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("guilt") >= 0 || question.indexOf("guilty") >= 0) {
        mob.Command("say I prefer to think of it as professional empathy.", 1.5);
        mob.Command("emote adjusts his hat with dignity.");
        return true;
    }

    if (question.indexOf("door") >= 0 || question.indexOf("inside") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("emote clears his throat professionally.");
        mob.Command("say I am not at liberty to disclose the nature of my -- business here.", 1.5);
        mob.Command("emote checks his pocket watch.");
        return true;
    }

    if (question.indexOf("undertaker") >= 0 || question.indexOf("funeral") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("say I bury things for a living. Feelings, mainly, these days.", 1.5);
        mob.Command("say Business has been consistent. Feelings do not stay buried, which creates repeat clients.");
        return true;
    }

    return false;
}

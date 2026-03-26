
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("can") >= 0 || question.indexOf("target") >= 0 || question.indexOf("shoot") >= 0 || question.indexOf("gun") >= 0) {
        mob.Command("emote holds up the pellet gun and squints at it with quiet pride.");
        mob.Command("say I hit them all today. All of them.", 1.5);
        mob.Command("emote looks toward the fence posts.", 2.5);
        mob.Command("say Mrs. Trefoile puts the pictures on them. I shoot them.", 3.5);
        mob.Command("emote seems to find this perfectly normal.", 4.5);
        return true;
    }

    if (question.indexOf("trefoile") >= 0 || question.indexOf("mrs") >= 0) {
        mob.Command("say She's very kind.", 1.0);
        mob.Command("emote nods slowly, meaning it.", 2.0);
        mob.Command("say She gives me my work and my dinner. That's enough.", 3.0);
        return true;
    }

    if (question.indexOf("woman") >= 0 || question.indexOf("guest") >= 0 || question.indexOf("patricia") >= 0 || question.indexOf("girl") >= 0) {
        mob.Command("emote looks toward the house.");
        mob.Command("emote looks back at you.", 1.5);
        mob.Command("say Mrs. Trefoile says she's staying.", 2.5);
        mob.Command("emote turns back to the fence posts.", 3.5);
        return true;
    }

    if (question.indexOf("car") >= 0 || question.indexOf("barn") >= 0) {
        mob.Command("say Harry put it in the barn.", 1.0);
        mob.Command("emote resumes setting up a tin can.", 2.0);
        return true;
    }

    var defaults = [
        "emote looks at you patiently and waits.",
        "say I don't know much about that.",
        "emote goes back to his work."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

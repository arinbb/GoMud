function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("baseball") >= 0 || question.indexOf("game") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("say Yeah-yeah. Baseball.", 0.5);
        mob.Command("emote nods with conviction.", 1.5);
        mob.Command("say Yeah!", 2.5);
        return true;
    }

    if (question.indexOf("benny") >= 0 || question.indexOf("rodriguez") >= 0) {
        mob.Command("say Benny?", 0.5);
        mob.Command("emote nods extremely hard.", 1.5);
        mob.Command("say Yeah-yeah! Benny! Yeah!", 2.5);
        return true;
    }

    if (question.indexOf("beast") >= 0 || question.indexOf("fence") >= 0) {
        mob.Command("emote stops nodding.");
        mob.Command("say ...", 1.5);
        mob.Command("emote starts nodding again slowly, but with less conviction.", 2.5);
        mob.Command("say Yeah. Yeah-yeah. ...Yeah.", 3.5);
        return true;
    }

    if (question.indexOf("squints") >= 0 || question.indexOf("plan") >= 0) {
        mob.Command("say Squints?", 0.5);
        mob.Command("emote thinks for a moment.", 1.5);
        mob.Command("say Yeah-yeah. The plan. Yeah.", 2.5);
        mob.Command("emote taps his temple to indicate the plan is known and understood.", 3.5);
        return true;
    }

    var defaults = [
        "say Yeah-yeah.",
        "emote nods and points at you with approving energy.",
        "say Yeah. Yeah!"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

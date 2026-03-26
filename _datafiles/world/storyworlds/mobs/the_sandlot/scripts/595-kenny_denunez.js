function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pitch") >= 0 || question.indexOf("fastball") >= 0 || question.indexOf("throw") >= 0) {
        mob.Command("emote holds up one finger.");
        mob.Command("say Fastball. Curveball. Change-up.", 1.5);
        mob.Command("say You master those three, you can get anyone out. Anyone.", 2.5);
        mob.Command("emote goes back to his windup.", 3.5);
        return true;
    }

    if (question.indexOf("benny") >= 0) {
        mob.Command("say Benny? Benny hits everything I throw.", 0.5);
        mob.Command("emote says this with a mix of frustration and profound respect.", 1.5);
        mob.Command("say Makes me better. That's what Benny does.", 2.5);
        return true;
    }

    if (question.indexOf("beast") >= 0 || question.indexOf("fence") >= 0) {
        mob.Command("emote steps off the imaginary mound.");
        mob.Command("say I don't look at the fence when I'm pitching. You look at the fence, you lose your focus.", 1.5);
        mob.Command("say You just throw the pitch.", 2.5);
        return true;
    }

    var defaults = [
        "emote winds up and delivers an imaginary pitch with great seriousness.",
        "say The mechanics have to be right. Everything starts with the mechanics.",
        "say I'm working on my grip."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

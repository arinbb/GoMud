function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("mayor") >= 0 || question.indexOf("politics") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("emote leans on his broom with intent.");
        mob.Command("say Mayor. Goldie Wilson, Mayor of Hill Valley. Say it out loud. Go on. Say it.", 1.0);
        mob.Command("emote grins.", 2.0);
        mob.Command("say People look at me right now and see a busboy. I see a stepping stone.", 3.0);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("plan") >= 0 || question.indexOf("someday") >= 0) {
        mob.Command("say The future is what you make it. That's not a saying, that's a blueprint.");
        mob.Command("emote sweeps with renewed vigor.", 1.5);
        mob.Command("say Every floor I sweep, I'm practicing discipline. Every table I bus, I'm building character. Mayor material.", 2.5);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("goldie") >= 0) {
        mob.Command("say Goldie Wilson. Remember that name. You'll be hearing it.");
        mob.Command("emote points the broom handle at you for emphasis.", 1.5);
        return true;
    }

    var defaults = [
        "say Hard work is its own reward. But also I intend to be mayor.",
        "emote straightens his apron and surveys the diner with proprietary pride.",
        "say I'm gonna be somebody. Not a question. A statement."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("game") >= 0 || question.indexOf("business") >= 0 || question.indexOf("corner") >= 0) {
        mob.Command("emote looks at you for a moment before deciding to answer.");
        mob.Command("say We are in the game. You understand what that means?", 2.0);
        mob.Command("emote leans forward slightly.", 3.5);
        mob.Command("say It means we are in it. We are it. The corners are ours because we take them and hold them.", 5.0);
        mob.Command("say You hold what you have. You take what you can. That is the game.", 7.0);
        mob.Command("emote leans back. The conversation is over at his discretion.", 8.5);
        return true;
    }

    if (question.indexOf("stringer") >= 0 || question.indexOf("string") >= 0 || question.indexOf("bell") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say Stringer is my boy.", 2.5);
        mob.Command("emote says this as both a fact and a declaration.", 4.0);
        mob.Command("say We came up together. We built this together.", 5.5);
        mob.Command("emote looks somewhere past you.", 7.0);
        mob.Command("say He wants something different than what we have. I understand that. I do not agree with it.", 9.0);
        return true;
    }

    if (question.indexOf("loyalty") >= 0 || question.indexOf("trust") >= 0) {
        mob.Command("say Loyalty.", 1.5);
        mob.Command("emote as if testing the word.", 3.0);
        mob.Command("say You know what runs this organization? Not the corners. Not the product.", 4.5);
        mob.Command("say Loyalty runs it. Without loyalty you have nothing. You have chaos.", 6.5);
        mob.Command("emote looks directly at you.", 8.0);
        mob.Command("say The police cannot understand that. They think it is about money.", 9.5);
        return true;
    }

    var defaults = [
        "emote regards you with the calm assessment of a man who has assessed many people in this room.",
        "say You need something from me.",
        "emote waits."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

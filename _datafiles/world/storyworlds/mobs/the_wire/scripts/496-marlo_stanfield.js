function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("name") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("emote looks at you.");
        mob.Command("say My name is my name.", 2.0);
        mob.Command("emote turns his attention elsewhere. The conversation is over.", 3.5);
        return true;
    }

    if (question.indexOf("game") >= 0 || question.indexOf("corner") >= 0 || question.indexOf("street") >= 0) {
        mob.Command("emote is quiet for a long moment.");
        mob.Command("say The corners are mine.", 3.0);
        mob.Command("emote that is all.", 4.5);
        return true;
    }

    if (question.indexOf("barksdale") >= 0 || question.indexOf("avon") >= 0) {
        mob.Command("emote does not react visibly.");
        mob.Command("say Avon Barksdale is not a factor.", 2.5);
        mob.Command("emote returns his gaze to the courtyard.", 4.0);
        return true;
    }

    if (question.indexOf("vacants") >= 0 || question.indexOf("bodies") >= 0) {
        mob.Command("emote looks at you with a flatness that is more unsettling than anger.");
        mob.Command("emote does not answer. The non-answer is the answer.", 3.0);
        return true;
    }

    // Marlo mostly does not talk
    var defaults = [
        "emote looks at you without expression. He is waiting for you to say something worth answering.",
        "emote says nothing.",
        "emote watches the courtyard."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("chris") >= 0 || question.indexOf("brother") >= 0) {
        mob.Command("emote is quiet for longer than is comfortable.");
        mob.Command("say Chris makes different choices than me.", 2.0);
        mob.Command("emote looks somewhere other than where Chris is standing.", 3.5);
        mob.Command("say Good for him.", 4.5);
        return true;
    }

    if (question.indexOf("ace") >= 0 || question.indexOf("merrill") >= 0) {
        mob.Command("say Ace runs things. That's how it is.");
        mob.Command("emote shrugs in a way that is not entirely a shrug.", 2.0);
        return true;
    }

    var defaults = [
        "emote looks at you briefly and looks away.",
        "say Not interested.",
        "emote watches Ace instead of answering."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

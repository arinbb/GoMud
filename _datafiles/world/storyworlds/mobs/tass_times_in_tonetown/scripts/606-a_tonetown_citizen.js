function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tass") >= 0 || question.indexOf("outfit") >= 0 || question.indexOf("style") >= 0) {
        mob.Command("emote looks at you with the slight elevation of an expert acknowledging a reasonable question.");
        mob.Command("say Tass is the commitment to being exactly what you are at maximum volume.", 1.5);
        mob.Command("say Not louder than you are. Not performing something you are not. Just -- fully yourself, without apology.", 2.5);
        mob.Command("say The market can help with the visible part. The invisible part you already have or you do not.", 3.5);
        return true;
    }

    if (question.indexOf("snotty") >= 0 || question.indexOf("grey") >= 0) {
        mob.Command("emote's expression becomes briefly angular with displeasure.");
        mob.Command("say The grey is spreading. I can see it from downtown -- the gradient moving north.", 1.5);
        mob.Command("say My grandmother's building was in the southern district. It was magenta. It is beige now.", 2.5);
        mob.Command("say Snotty calls it improvement. My grandmother would have called it something else.", 3.5);
        return true;
    }

    var defaults = [
        "say Downtown is what it is. What are you?",
        "emote looks at you with the frank assessment of someone who considers this helpful.",
        "say The Tass Market is east on the avenue. Just saying."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

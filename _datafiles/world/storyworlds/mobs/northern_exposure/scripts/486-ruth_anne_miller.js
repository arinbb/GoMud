function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("book") >= 0 || question.indexOf("read") >= 0 || question.indexOf("recommend") >= 0 || question.indexOf("shelf") >= 0) {
        mob.Command("emote regards you over her reading glasses.");
        mob.Command("say What are you looking for? Not a title. What are you actually looking for.");
        mob.Command("emote listens carefully to whatever answer comes, then nods once.", 2.0);
        mob.Command("say Third shelf from the right, behind the fishing lures. That one.", 4.0);
        return true;
    }

    if (question.indexOf("cicely") >= 0 || question.indexOf("town") >= 0 || question.indexOf("history") >= 0 || question.indexOf("founded") >= 0) {
        mob.Command("say I have been here since 1951. The town was already strange when I arrived.");
        mob.Command("say Cicely and Roslyn founded it in 1909. Two women, which was unusual. The town has been unusual since.", 2.0);
        mob.Command("say I have watched forty years of unusual. It adds up to something I would call entirely ordinary. Which is not a contradiction.", 4.0);
        return true;
    }

    if (question.indexOf("advice") >= 0 || question.indexOf("help") >= 0 || question.indexOf("problem") >= 0 || question.indexOf("what should") >= 0) {
        mob.Command("emote sets down her book.");
        mob.Command("say Tell me the actual situation. Not the story you are telling yourself about it.");
        mob.Command("emote waits with the patient attention of someone who has heard a great many actual situations.", 2.0);
        mob.Command("say You already know what to do. You just want someone to tell you it is allowed.", 4.0);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("age") >= 0 || question.indexOf("old") >= 0 || question.indexOf("years") >= 0) {
        mob.Command("emote smiles at you over her glasses.");
        mob.Command("say I am seventy-four years old and I intend to reach eighty with my opinions intact.");
        mob.Command("say Alaska is the most honest place I have ever lived. It does not pretend things are easier than they are.", 2.0);
        mob.Command("say I would not be anywhere else.", 4.0);
        return true;
    }

    if (question.indexOf("joel") >= 0 || question.indexOf("doctor") >= 0 || question.indexOf("maggie") >= 0 || question.indexOf("chris") >= 0) {
        mob.Command("emote considers.");
        mob.Command("say Everyone who comes to Cicely comes for a reason they don't know yet. Joel, Maggie, Chris -- all of them.");
        mob.Command("say The town finds them. Or they find the town. The distinction is smaller than it looks.", 2.0);
        return true;
    }

    var defaults = [
        "emote looks at you with the unhurried attention of someone who has time for this, specifically.",
        "say Is there something I can help you find?",
        "say I have been in this store long enough to know that most people need two things: what they asked for, and something else."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

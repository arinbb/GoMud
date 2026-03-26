function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("news") >= 0 || question.indexOf("gossip") >= 0 || question.indexOf("hear") >= 0) {
        mob.Command("emote leans against the chair and takes on the expression of a man about to share something important.");
        mob.Command("say Now I should not say this -- and I want you to understand I am not one for gossip --", 1.5);
        mob.Command("emote pauses meaningfully.", 3.5);
        mob.Command("say But what I heard -- and you did NOT hear this from me -- was that somebody on Elm Street left their porch light on ALL night. Two nights running.", 4.5);
        mob.Command("emote nods slowly.", 7.0);
        mob.Command("say I am not drawing any conclusions. I am just saying what I heard.", 8.0);
        return true;
    }

    if (question.indexOf("haircut") >= 0 || question.indexOf("hair") >= 0 || question.indexOf("style") >= 0) {
        mob.Command("say Now your hair -- and I say this professionally -- has real potential.");
        mob.Command("emote circles you once, scissors in hand.", 1.5);
        mob.Command("say There is something there that with the right cut -- nothing dramatic, just a slight adjustment here, maybe a little more off the -- yes.", 3.0);
        mob.Command("say Sit down. I have an idea.", 5.0);
        mob.Command("emote moves toward the chair with professional purpose.", 6.0);
        return true;
    }

    if (question.indexOf("mayberry") >= 0 || question.indexOf("town") >= 0) {
        mob.Command("say Mayberry is a fine town. A very fine town.");
        mob.Command("emote sweeps a hair from the counter.", 1.5);
        mob.Command("say There are some people who would disagree with that and I will tell you who they are, but -- no. No, I should not.", 3.0);
        mob.Command("say It is a fine town. That is the main point.", 5.5);
        mob.Command("emote nods with the satisfaction of a man who has successfully kept part of a secret.", 7.0);
        return true;
    }

    if (question.indexOf("andy") >= 0 || question.indexOf("barney") >= 0) {
        mob.Command("say Andy is a wonderful man. And Barney --");
        mob.Command("emote pauses with the expression of someone choosing their words carefully.", 2.0);
        mob.Command("say Barney is very -- dedicated. Yes. Very dedicated to his work.", 3.5);
        mob.Command("emote trims air near your ear to fill the pause.", 5.0);
        mob.Command("say I have a lot of respect for dedication.", 6.5);
        return true;
    }

    // Default: building to something
    var responses = [
        "emote sets down the scissors and picks them up again differently, which means a story is coming.",
        "say Now this is interesting that you ask that. Because just this morning -- well, I should not say.",
        "say I heard something. About that. I do not know all of it yet. But I heard.",
        "emote begins sweeping and glances sideways. The information is being assembled."
    ];
    var pick = Math.floor(Math.random() * responses.length);

    return false;
}

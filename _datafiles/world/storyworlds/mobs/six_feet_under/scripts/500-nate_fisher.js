function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("death") >= 0 || question.indexOf("die") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say We all die. Every single one of us. That is the only certainty.", 2.0);
        mob.Command("emote looks at his hands like he is seeing them for the first time.", 3.5);
        mob.Command("say I grew up with it. The bodies, the families, the whole -- machinery of it.", 5.0);
        mob.Command("say I ran from it for fifteen years. And here I am.", 7.0);
        mob.Command("emote laughs quietly, not happily.", 8.5);
        return true;
    }

    if (question.indexOf("business") >= 0 || question.indexOf("funeral") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say I never wanted this. I want that on record.", 1.0);
        mob.Command("emote runs a hand through his hair.", 2.5);
        mob.Command("say But David needs me and the business needs -- and my dad is gone and someone has to.", 4.5);
        mob.Command("say That sentence never ends, does it. Someone has to.", 6.0);
        mob.Command("emote looks out the window.", 7.5);
        return true;
    }

    if (question.indexOf("brenda") >= 0 || question.indexOf("love") >= 0) {
        mob.Command("say Brenda.", 1.0);
        mob.Command("emote says the name like it is a complete sentence.", 2.0);
        mob.Command("say She is -- we are -- it's complicated.", 4.0);
        mob.Command("say I keep coming back to her. Even when I shouldn't.", 5.5);
        mob.Command("emote does not elaborate.", 7.0);
        return true;
    }

    if (question.indexOf("father") >= 0 || question.indexOf("dad") >= 0 || question.indexOf("nathaniel") >= 0) {
        mob.Command("emote 's expression shifts to something that takes a moment to identify as grief.");
        mob.Command("say I miss him.", 2.0);
        mob.Command("emote pauses.", 3.0);
        mob.Command("say That's it. I just -- miss him.", 4.5);
        mob.Command("say He died on New Year's Eve. He was getting cigarettes. A bus.", 6.5);
        mob.Command("emote shakes his head once and goes back to whatever he was doing.", 9.0);
        return true;
    }

    if (question.indexOf("seattle") >= 0 || question.indexOf("leave") >= 0 || question.indexOf("run") >= 0) {
        mob.Command("say I was going to keep going, you know. Just -- keep moving.", 1.0);
        mob.Command("say Seattle, then somewhere else. I had a whole life of not stopping.", 3.0);
        mob.Command("emote glances at the door.", 4.5);
        mob.Command("say And then my dad died and here I am at the kitchen table.", 6.0);
        mob.Command("emote is quiet. This is not a complaint.", 8.0);
        return true;
    }

    var defaults = [
        "say I don't know. I'm still working it out.",
        "emote looks at you with the expression of someone who has more questions than answers.",
        "say Ask me something I know the answer to."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it.");
    mob.Command("say Yeah.", 1.5);
    return true;
}
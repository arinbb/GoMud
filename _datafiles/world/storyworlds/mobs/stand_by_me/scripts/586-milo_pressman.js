function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("chopper") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote looks at you and then toward the yard.");
        mob.Command("say Chopper is the meanest goddamn dog I ever owned and I've owned six. He does what I tell him.", 1.5);
        mob.Command("say I tell him to stay put, he stays put. I tell him to get someone, he gets them.", 3.0);
        mob.Command("say So I'd think very careful about what you're doing in my junkyard.", 4.5);
        return true;
    }

    if (question.indexOf("junk") >= 0 || question.indexOf("car") >= 0 || question.indexOf("yard") >= 0) {
        mob.Command("say I got three hundred and twelve vehicles in this yard. I know where every one of them is.");
        mob.Command("emote crosses his arms.", 2.0);
        mob.Command("say And I know when something's been moved.", 3.0);
        return true;
    }

    var defaults = [
        "say Get off my property.",
        "emote looks toward where the dog chain is and back at you.",
        "say You got business here or you just passing through my land without asking?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

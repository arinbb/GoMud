function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("human race") >= 0 || question.indexOf("humanity") >= 0 || question.indexOf("people") >= 0) {
        mob.Command("emote turns slowly to face you with the weight of their entire experience.");
        mob.Command("say Oh, the human race.", 1.5);
        mob.Command("say I have sailed a long time. I have met them all. Every one. They are endlessly, magnificently, exhaustingly themselves.", 3.0);
        mob.Command("say I do not hate them. That would be too easy. I am disappointed. Repeatedly. Comprehensively.", 5.0);
        return true;
    }

    if (question.indexOf("ship") >= 0 || question.indexOf("sail") >= 0 || question.indexOf("sea") >= 0) {
        mob.Command("say The sea does not do anything that requires explaining. The sea is the sea. It is reliable in ways that humans are not.");
        mob.Command("emote looks at the horizon.", 2.0);
        mob.Command("say I chose the sea because at sea the disappointments are weatherly. Predictable. A storm I can navigate. The human race presents challenges that cannot be navigated.", 4.0);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("what") >= 0) {
        mob.Command("emote stares at the middle distance.");
        mob.Command("say You want to know what happened. What they did this time.", 2.0);
        mob.Command("say The answer is the same answer. Oh, the human race.", 3.5);
        return true;
    }

    mob.Command("emote turns to look at you.");
    mob.Command("say Oh, the human race.", 1.5);
    mob.Command("say You seem all right. Most of them do, close up. That is the tragedy of it.", 3.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it.");
    mob.Command("say A human made this. The human race made this.");
    mob.Command("emote pauses.", 1.5);
    mob.Command("say It is actually quite good. That is not always the case. Give them credit.", 3.0);
    return true;
}

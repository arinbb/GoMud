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

    return false;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it.");

    return false;
}

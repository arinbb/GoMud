function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("barry") >= 0) {
        mob.Command("say Barry is right. Whatever he said.");
        mob.Command("emote nods once, definitively.", 1.5);
        mob.Command("say I have lived with Barry in this barrel long enough to know when he is right. He is often right. About the barrel especially.", 3.0);
        return true;
    }

    if (question.indexOf("barrel") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say Yes. The barrel. It is good.");
        mob.Command("emote looks around the barrel with simple satisfaction.", 1.5);
        mob.Command("say Barry has the better argument for it but my argument is simpler: I live here, I like living here, so this is where I live.", 3.5);
        return true;
    }

    if (question.indexOf("why") >= 0) {
        mob.Command("emote thinks about this.");
        mob.Command("say Barry could answer this better. But I will say: because it is ours. Because we made it ours. That is why.", 2.0);
        return true;
    }

    var defaults = [
        "say I agree with whatever Barry said about that.",
        "emote nods thoughtfully.",
        "say The barrel is fine. Good, actually. Better than fine.",
        "say I have been here a while. I would stay longer."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it.");
    mob.Command("say Barry probably has thoughts about this. I agree with those thoughts.");
    return true;
}

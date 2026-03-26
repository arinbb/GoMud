function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("wendy") >= 0 || question.indexOf("peffercorn") >= 0 || question.indexOf("lifeguard") >= 0) {
        mob.Command("emote takes a slow breath.");
        mob.Command("say Wendy Peffercorn is the most beautiful girl in this neighborhood. Possibly in this country.", 1.5);
        mob.Command("say I have watched her for three summers. I have a plan.", 2.5);
        mob.Command("emote taps his glasses.", 3.5);
        mob.Command("say The plan is not ready yet. But it will be.", 4.5);
        return true;
    }

    if (question.indexOf("plan") >= 0 || question.indexOf("pool") >= 0) {
        mob.Command("emote glances around to make sure nobody is listening.");
        mob.Command("say I can't tell you the whole plan. But the key element is: the deep end.", 1.5);
        mob.Command("say And timing.", 2.5);
        mob.Command("emote says nothing more on the subject.", 3.5);
        return true;
    }

    if (question.indexOf("glasses") >= 0) {
        mob.Command("say I've had these glasses since second grade.", 0.5);
        mob.Command("emote adjusts them.", 1.5);
        mob.Command("say They help me see things. Distant things. Clearly.", 2.5);
        mob.Command("emote does not clarify what distant things.", 3.5);
        return true;
    }

    if (question.indexOf("baseball") >= 0 || question.indexOf("game") >= 0) {
        mob.Command("say I play. I'm decent.", 0.5);
        mob.Command("emote waves a hand.", 1.5);
        mob.Command("say But my focus is elsewhere this summer.", 2.5);
        return true;
    }

    var defaults = [
        "say I'm working on something. Don't ask.",
        "emote squints at the middle distance with great concentration.",
        "say When the moment comes, you'll understand."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

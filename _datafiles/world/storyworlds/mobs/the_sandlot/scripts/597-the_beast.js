function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ball") >= 0 || question.indexOf("baseball") >= 0) {
        mob.Command("emote lifts his head at the word and looks around with hopeful energy.");
        mob.Command("emote settles back down when no ball materializes.", 1.5);
        return true;
    }

    if (question.indexOf("fence") >= 0 || question.indexOf("yard") >= 0) {
        mob.Command("emote blinks his enormous eyes.");
        mob.Command("emote sweeps his tail back and forth once, slowly.", 1.5);
        return true;
    }

    mob.Command("emote regards you with deep calm intelligence and wags his tail once.");
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("ball") >= 0 || showText.indexOf("baseball") >= 0) {
        mob.Command("emote 's head comes up with sudden focus. He stands.");
        mob.Command("emote takes three steps toward the ball and sits, looking at it with incredible patience.", 1.5);
        mob.Command("emote 's tail is going.", 2.5);
        return true;
    }

    mob.Command("emote sniffs in the direction of whatever you're holding and is briefly interested, then lies back down.");
    return true;
}

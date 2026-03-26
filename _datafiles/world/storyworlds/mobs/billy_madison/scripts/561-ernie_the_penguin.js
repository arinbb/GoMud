
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("real") >= 0 || question.indexOf("imaginary") >= 0 || question.indexOf("exist") >= 0) {
        mob.Command("emote tilts its head at the question.");
        mob.Command("emote blinks once, slowly.", 1.5);
        mob.Command("emote adjusts its invisible bow tie and looks at you with an expression that is both serene and deeply diagnostic.", 3.0);
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("friend") >= 0) {
        mob.Command("emote makes a small warm sound.");
        mob.Command("emote waddles slightly in the direction of the mansion.", 1.5);
        mob.Command("emote turns back and looks at you. It seems satisfied with something.", 3.0);
        return true;
    }

    if (question.indexOf("pool") >= 0 || question.indexOf("swim") >= 0 || question.indexOf("water") >= 0) {
        mob.Command("emote turns toward the pool with expert penguin authority.");
        mob.Command("emote regards the water with the confidence of an animal that was built for exactly this.", 2.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("beard") >= 0 || question.indexOf("hair") >= 0 || question.indexOf("facial") >= 0) {
        mob.Command("emote strokes the beard with slow deliberateness.");
        mob.Command("say In space, the beard is different.", 1.5);
        mob.Command("say On Earth it has weight. Direction. Here it has only presence. It expands into the available space. As do I.", 3.5);
        mob.Command("emote drifts slightly to the left.", 5.0);
        return true;
    }

    if (question.indexOf("space") >= 0 || question.indexOf("station") >= 0 || question.indexOf("orbit") >= 0) {
        mob.Command("say Space is quiet. The beard is not loud. We are compatible.");
        mob.Command("emote gestures at the viewport.", 2.0);
        mob.Command("say The planet below does not know we are here. The beard does not require acknowledgment. I have learned this from the beard.", 3.5);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("what") >= 0) {
        mob.Command("emote strokes the beard.");
        mob.Command("say The beard knows. I ask the beard.", 2.0);
        mob.Command("say The beard has not given me the answer to your specific question but it has given me patience regarding questions for which there are no answers.", 4.0);
        return true;
    }

    mob.Command("emote turns to face you, beard drifting magnificently.");

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

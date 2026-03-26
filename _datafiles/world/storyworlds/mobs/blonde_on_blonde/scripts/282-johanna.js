
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("chelsea") >= 0 || question.indexOf("hotel") >= 0) {
        mob.Command("emote flickers in the candlelight. Something almost like a direction.");
        mob.Command("say Chelsea.", 2.0);
        return true;
    }

    if (question.indexOf("louise") >= 0) {
        mob.Command("emote is everywhere the candles are. Nowhere you look directly.");
        return true;
    }

    if (question.indexOf("museum") >= 0 || question.indexOf("painting") >= 0 || question.indexOf("countess") >= 0) {
        mob.Command("emote makes the museum visible for one moment at the corner of vision. Gone before you can look.");
        return true;
    }

    return false;
}

function onIdle(mob, room) {
    var r = Math.floor(Math.random() * 8);
    if (r == 0) {
        mob.Command("emote makes all the candles gutter at once without any wind.");
    }
    return false;
}


function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("say Shh. The game is on.");
        mob.Command("emote does not look away from the television.", 1.0);
        return true;
    }

    if (question.indexOf("bills") >= 0 || question.indexOf("football") >= 0 || question.indexOf("game") >= 0) {
        mob.Command("say NOW you're talking. Did you see that play?");
        mob.Command("say Third and seven, they run a slant route, and the RECEIVER drops it. DROPS it.", 1.5);
        mob.Command("say We could be up by fourteen if people would just DO THEIR JOBS.", 3.0);
        return true;
    }

    if (question.indexOf("super bowl") >= 0) {
        mob.Command("emote 's expression goes hard as granite.");
        mob.Command("say Four times. We went FOUR TIMES.", 1.0);
        mob.Command("say Don't. Just don't.", 2.5);
        return true;
    }

    if (question.indexOf("jimmy") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("emote waves a hand dismissively without looking.");
        mob.Command("say He's fine. He's in the other room. He's always in the other room.");
        return true;
    }

    if (question.indexOf("dinner") >= 0 || question.indexOf("meatloaf") >= 0) {
        mob.Command("say Meatloaf's on the table. Eat it or don't. I'm watching the game.");
        return true;
    }

    if (question.indexOf("season") >= 0 || question.indexOf("year") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("emote finally looks away from the screen, just for a moment.");
        mob.Command("say Six and four. SIX AND FOUR. We should be eight and two. The officiating in the Cincinnati game alone—", 1.0);
        mob.Command("say They had FOUR holding calls. FOUR. All on us. None on them.", 2.5);
        mob.Command("emote turns back to the game, jaw set.", 4.0);
        mob.Command("say But we're still in it. We're ALWAYS still in it.", 5.5);
        return true;
    }

    if (question.indexOf("kelly") >= 0 || question.indexOf("quarterback") >= 0 || question.indexOf("jim") >= 0) {
        mob.Command("emote straightens up with genuine reverence.");
        mob.Command("say Jim Kelly is the greatest quarterback who ever lived. I will not hear otherwise.", 1.0);
        mob.Command("say That arm. That poise. That man took this city to four Super Bowls.", 2.5);
        mob.Command("emote shakes her head slowly.", 4.0);
        mob.Command("say It wasn't HIS fault. It was never his fault.", 5.5);
        return true;
    }

    if (question.indexOf("happy") >= 0 || question.indexOf("sad") >= 0 || question.indexOf("feel") >= 0 || question.indexOf("how are") >= 0) {
        mob.Command("emote blinks, as if the question is in a foreign language.");
        mob.Command("say I'm fine. Bills are playing. Why wouldn't I be fine?", 1.0);
        mob.Command("emote turns back to the screen. The question has already been forgotten.", 2.5);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

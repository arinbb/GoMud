
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

    mob.Command("say Can't talk. Game's on.");
    mob.Command("emote turns back to the television.", 1.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("say Not now. Third quarter.");
    mob.Command("emote does not look at what you are showing her.");
    return true;
}

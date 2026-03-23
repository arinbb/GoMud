
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("brown") >= 0) {
        mob.Command("emote 's smile broadens, but his eyes stay flat.");
        mob.Command("say Billy Brown? Yeah, I know Billy. Billy owes people.", 1.5);
        mob.Command("say Everybody owes somebody in this town.", 3.0);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("debt") >= 0 || question.indexOf("owe") >= 0) {
        mob.Command("say Debts are debts. They don't go away just because you do time.");
        mob.Command("emote rolls the coin across his knuckles, slow and deliberate.", 1.5);
        mob.Command("say Sooner or later, everybody pays.", 3.0);
        return true;
    }

    if (question.indexOf("buffalo") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("say Buffalo is a good town. Good for business.");
        mob.Command("say Cold keeps people indoors. Indoors is where the money changes hands.", 2.0);
        return true;
    }

    var defaults = [
        "emote looks at you for a long moment, weighing something.",
        "say You asking a lot of questions for someone who doesn't look like they want the answers.",
        "say Buy a drink or take a walk. Your choice."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the practiced eye of someone who appraises everything.");
    mob.Command("say Interesting. What do you want for it?", 1.5);
    return true;
}

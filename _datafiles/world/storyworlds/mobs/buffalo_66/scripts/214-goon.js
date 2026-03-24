
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

    if (question.indexOf("bet") >= 0 || question.indexOf("wager") >= 0 || question.indexOf("super bowl") >= 0) {
        mob.Command("emote 's expression doesn't change at all, which is its own answer.");
        mob.Command("say People bet on things. Sometimes they lose. That's the business.", 1.5);
        mob.Command("say The Bills losing four Super Bowls was very good for this city's economy.", 3.0);
        mob.Command("say For some people in this city.", 4.5);
        return true;
    }

    if (question.indexOf("prison") >= 0 || question.indexOf("jail") >= 0 || question.indexOf("time") >= 0) {
        mob.Command("emote rolls the coin across his knuckles once, twice, three times.");
        mob.Command("say Five years is a long time to think about things.", 1.5);
        mob.Command("say A man comes out of five years one of two ways.", 3.0);
        mob.Command("emote lets the coin rest", 5.0);
        mob.Command("say I'm watching to see which way Billy came out.", 6.5);
        return true;
    }

    if (question.indexOf("dangerous") >= 0 || question.indexOf("threat") >= 0 || question.indexOf("hurt") >= 0 || question.indexOf("scared") >= 0) {
        mob.Command("emote looks at you with something between amusement and pity.");
        mob.Command("say I'm just a guy in a bar. Minding my business.", 1.5);
        mob.Command("emote 's eyes say something very different.", 3.0);
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

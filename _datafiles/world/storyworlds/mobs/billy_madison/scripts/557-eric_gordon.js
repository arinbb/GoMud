
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("madison") >= 0) {
        mob.Command("emote's expression goes very smooth.");
        mob.Command("say Billy is a good person. Genuinely. He's just not qualified to run a hotel empire. I am. That's not an insult, it's a fact.", 1.5);
        mob.Command("emote adjusts his tie. 'Someone has to make the difficult decisions. I'm prepared to make them.'", 3.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("company") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("say The Madison Hotel chain is a significant asset with significant potential. Under proper management, it could be three times its current size in five years.");
        mob.Command("say Frank understands this. I've made it very clear to him.", 2.0);
        return true;
    }

    if (question.indexOf("frank") >= 0 || question.indexOf("father") >= 0) {
        mob.Command("emote pauses for exactly the right amount of time.");
        mob.Command("say Frank is a visionary. Truly. What he built from nothing is extraordinary. I'm simply proposing to build on what he started.", 1.5);
        mob.Command("emote opens his briefcase and glances at something. 'It's what he would have wanted, in the end.'", 3.0);
        return true;
    }

    if (question.indexOf("academic") >= 0 || question.indexOf("decathlon") >= 0) {
        mob.Command("say I have a master's degree in business administration and seventeen years of hotel management experience.");
        mob.Command("emote straightens his lapel. 'Billy has a juice box at his podium. I think we can all see how this ends.'", 2.0);
        return true;
    }

    var defaults = [
        "say I appreciate the question. The answer is yes, whatever it is.",
        "emote checks his watch with the efficiency of a man whose time is always money.",
        "say Let's keep this brief. I have a board meeting."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

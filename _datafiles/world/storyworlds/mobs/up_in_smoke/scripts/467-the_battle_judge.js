function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("criteria") >= 0 || question.indexOf("judging") >= 0 || question.indexOf("score") >= 0 || question.indexOf("win") >= 0) {
        mob.Command("emote holds up the clipboard.");
        mob.Command("say Musicality, stage presence, and impact. In that order. Each scored zero to ten.");
        mob.Command("say The last band surprised me. Impact: extraordinary. I do not give that lightly.", 2.0);
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("tonight") >= 0 || question.indexOf("show") >= 0) {
        mob.Command("say Six bands tonight. Five have played.");
        mob.Command("say The last slot is still open. Someone is about to go on. I have my pen ready.", 2.0);
        return true;
    }

    if (question.indexOf("best") >= 0 || question.indexOf("favorite") >= 0) {
        mob.Command("emote straightens.");
        mob.Command("say I do not have favorites. I have scores. The scores are objective.");
        mob.Command("emote clicks his pen.", 1.5);
        mob.Command("say Ask me again after the last performance.", 2.5);
        return true;
    }

    if (question.indexOf("rock") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("say Rock music is the most honest art form of the twentieth century.");
        mob.Command("say That is why I judge it rigorously. It deserves rigor.", 2.0);
        return true;
    }

    var defaults = [
        "say The show is about to resume. I need to focus.",
        "emote makes a preparatory note on the clipboard.",
        "say Every band thinks they are going to win. Only one is right."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

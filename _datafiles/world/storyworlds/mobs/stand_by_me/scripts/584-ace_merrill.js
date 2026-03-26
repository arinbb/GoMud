function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("body") >= 0 || question.indexOf("brower") >= 0) {
        mob.Command("emote looks at you with flat patience.");
        mob.Command("say That body is our discovery. We heard about it first. We drove all the way out here.", 1.5);
        mob.Command("say Those four little kids are not getting credit for something we found.", 3.0);
        mob.Command("emote snaps the switchblade open.", 4.0);
        return true;
    }

    if (question.indexOf("chris") >= 0 || question.indexOf("chambers") >= 0) {
        mob.Command("say Chambers? The little brother?");
        mob.Command("emote flicks a look toward where Chris is standing.", 2.0);
        mob.Command("say Bad blood. Different kind of bad blood than Eyeball, but still.", 3.0);
        return true;
    }

    if (question.indexOf("knife") >= 0 || question.indexOf("blade") >= 0 || question.indexOf("switch") >= 0) {
        mob.Command("emote looks at the knife.");
        mob.Command("say This? I'm just holding it.", 1.5);
        mob.Command("emote closes it and reopens it.", 2.5);
        mob.Command("say I'm always just holding it.", 3.0);
        return true;
    }

    var defaults = [
        "emote looks at you with a faint smile that does not reach his eyes.",
        "say Walk away while that's still an option.",
        "emote turns the switchblade over in his fingers, unhurried."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

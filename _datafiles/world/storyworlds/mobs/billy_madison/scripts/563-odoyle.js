
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("rules") >= 0 || question.indexOf("odoyle") >= 0 || question.indexOf("o'doyle") >= 0) {
        mob.Command("say ODoyle rules.");
        mob.Command("emote says this with zero irony and maximum conviction.", 1.5);
        mob.Command("say We've always ruled. Going back to my grandfather. ODoyle rules.", 3.0);
        return true;
    }

    if (question.indexOf("van") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("say That van has been in the family since 1987. She's reliable.");
        mob.Command("emote glances at the van with uncomplicated affection. 'ODoyle rules.'", 2.0);
        return true;
    }

    if (question.indexOf("school") >= 0 || question.indexOf("parking") >= 0 || question.indexOf("spot") >= 0) {
        mob.Command("say This is ODoyle territory. Has been since my dad went here. His dad before him.");
        mob.Command("emote gestures at the spray paint on the asphalt. 'It's in writing.'", 2.0);
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("madison") >= 0) {
        mob.Command("emote considers this.");
        mob.Command("say Billy Madison. He's alright. Weird. Carries a juice box.", 1.5);
        mob.Command("say He said ODoyle rules once. Said it right. Good form. Respect.", 3.0);
        return true;
    }

    mob.Command("say ODoyle rules.");
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it.");
    mob.Command("say ODoyle rules.", 1.5);
    return true;
}

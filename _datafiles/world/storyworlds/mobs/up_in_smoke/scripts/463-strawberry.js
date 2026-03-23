function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("where") >= 0 || question.indexOf("going") >= 0 || question.indexOf("destination") >= 0) {
        mob.Command("emote smiles and gestures in a direction that could be any direction.");
        mob.Command("say Anywhere. I go wherever the ride goes.");
        mob.Command("say That is the whole plan. It has worked out pretty well so far.", 2.0);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("say Strawberry.");
        mob.Command("emote smiles like that explains everything, because it does.");
        return true;
    }

    if (question.indexOf("show") >= 0 || question.indexOf("roxy") >= 0 || question.indexOf("concert") >= 0 || question.indexOf("band") >= 0) {
        mob.Command("emote lights up.");
        mob.Command("say Oh, the show! I heard there is a Battle of the Bands at the Roxy.");
        mob.Command("say I might get a ride there. I always end up at the right place eventually.", 2.0);
        return true;
    }

    if (question.indexOf("ride") >= 0 || question.indexOf("lift") >= 0 || question.indexOf("hitchhike") >= 0) {
        mob.Command("say Oh, I always get a ride. People are nice, mostly.");
        mob.Command("emote holds her thumb out briefly, demonstrating technique.");
        mob.Command("say The trick is you have to actually want to go. If you mean it, they stop.", 2.0);
        return true;
    }

    var defaults = [
        "say It is a beautiful night, is it not?",
        "emote smiles at you with genuine warmth and says nothing, which is somehow enough.",
        "say Things have a way of working out. I have noticed this."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it with open, uncomplicated delight.");
    mob.Command("say Oh, that is great. Where is that from?");
    mob.Command("emote hands it back and smiles.", 1.5);
    return true;
}

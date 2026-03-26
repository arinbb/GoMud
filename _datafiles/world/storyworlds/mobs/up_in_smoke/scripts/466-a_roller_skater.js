function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("skate") >= 0 || question.indexOf("skating") >= 0 || question.indexOf("wheels") >= 0) {
        mob.Command("emote looks down at the skates with the expression of someone asked about breathing.");
        mob.Command("say I have been skating this boardwalk since I was nine.");
        mob.Command("say At some point you stop thinking about it. Your feet just know where to go.", 2.0);
        return true;
    }

    if (question.indexOf("beach") >= 0 || question.indexOf("venice") >= 0) {
        mob.Command("say Venice Beach is the best place in Los Angeles.");
        mob.Command("say Maybe the best place anywhere. Sunset, the ocean, people doing their thing.");
        mob.Command("emote does a slow backward glide, arms out, face to the evening sky.", 2.0);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("emote smiles.");
        mob.Command("say Does it matter?");
        mob.Command("say I am the person skating. That is what I am right now.", 2.0);
        return true;
    }

    if (question.indexOf("tonight") >= 0 || question.indexOf("show") >= 0 || question.indexOf("roxy") >= 0) {
        mob.Command("say I heard there is a Battle of the Bands on the Strip tonight.");
        mob.Command("say I might skate over. The Strip is beautiful at night when the signs are all on.", 2.0);
        return true;
    }

    var defaults = [
        "say It is a beautiful evening.",
        "emote does a little spin and glides backward for a moment, then forward again.",
        "say You should skate sometime. It is the best feeling."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

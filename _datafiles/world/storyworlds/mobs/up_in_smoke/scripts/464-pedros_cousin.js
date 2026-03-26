function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pedro") >= 0 || question.indexOf("cousin") >= 0) {
        mob.Command("emote laughs and waves her hand.");
        mob.Command("say Pedro! He never calls. He just appears. Since we were kids, always the same.");
        mob.Command("say But I always have enough. This is the rule. There is always enough.", 2.0);
        return true;
    }

    if (question.indexOf("food") >= 0 || question.indexOf("tamale") >= 0 || question.indexOf("eat") >= 0 || question.indexOf("hungry") >= 0) {
        mob.Command("emote is already moving toward the kitchen.");
        mob.Command("say Sit. I will get you something. You look like you need tamales.");
        mob.Command("emote returns with a plate.", 1.5);
        mob.Command("say Eat. There is more on the stove.", 2.5);
        return true;
    }

    if (question.indexOf("kids") >= 0 || question.indexOf("children") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("emote makes a gesture that encompasses the entire house.");
        mob.Command("say Three are mine. Two are the neighbors. One I have not identified yet. They are welcome.");
        mob.Command("say This house has always been like this. My mother kept it this way. I keep it this way.", 2.0);
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("roxy") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("say Pedro says they are going to win the Battle of the Bands. I said: of course.");
        mob.Command("say He always wins the thing he really wants. That is Pedro.", 2.0);
        return true;
    }

    var defaults = [
        "say You want something? There is always something.",
        "emote stirs the pot on the stove without looking at it, having done this ten thousand times.",
        "say Sit down. People are always rushing. Sit. Eat."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote accepts it and looks at it warmly.");
    mob.Command("say Thank you. You did not have to. But thank you.");
    mob.Command("emote sets it on the counter where it will be found later by someone.", 1.5);
    return true;
}

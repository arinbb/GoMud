
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("idea") >= 0 || question.indexOf("scheme") >= 0 || question.indexOf("plan") >= 0 || question.indexOf("project") >= 0) {
        mob.Command("emote 's eyes light up.");
        mob.Command("say Okay. Okay okay okay. So here's the thing.", 1.0);
        mob.Command("say There's a market -- a completely untapped market -- for a cologne that smells like the beach.", 2.5);
        mob.Command("emote begins pacing.", 4.0);
        mob.Command("say Not the ocean. The BEACH. The sunscreen, the hot sand, the little bit of sweat. The whole thing.", 5.5);
        mob.Command("say I've already got the bottle designed. It's shaped like a wave.", 7.5);
        mob.Command("emote stops pacing and points at you.", 9.0);
        mob.Command("say I need a chemist. Do you know a chemist?", 10.5);
        return true;
    }

    if (question.indexOf("merv") >= 0 || question.indexOf("griffin") >= 0 || question.indexOf("set") >= 0 || question.indexOf("talk show") >= 0) {
        mob.Command("say The set.", 0.5);
        mob.Command("emote gestures grandly.", 1.5);
        mob.Command("say I reconstructed the Merv Griffin set in my living room. Desk, backdrop, everything.", 3.0);
        mob.Command("say I conduct interviews. The format works. I've had some incredible conversations.", 5.0);
        mob.Command("emote nods with the gravity of a man who has done something that made complete sense.", 6.5);
        mob.Command("say The desk is from a studio sale. Got it for nothing.", 8.0);
        return true;
    }

    if (question.indexOf("jerry") >= 0 || question.indexOf("seinfeld") >= 0) {
        mob.Command("emote waves a hand.", 0.5);
        mob.Command("say Jerry is -- he's my neighbor. My friend.", 1.5);
        mob.Command("say I eat his food sometimes. He knows. We have an understanding.", 3.0);
        mob.Command("emote seems to be certain of this understanding.", 4.5);
        mob.Command("say He provides the stability. I provide the energy.", 6.0);
        return true;
    }

    // Default: elaborate improbable plan about whatever was asked
    var schemes = [
        "say That is an EXCELLENT point and I already have a plan.",
        "emote leans forward with intensity. This is going to be a scheme.",
        "say You know what? I've been thinking about this. Here's what we do.",
        "say There's money in this. Real money. I can smell it."
    ];
    var pick = Math.floor(Math.random() * schemes.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

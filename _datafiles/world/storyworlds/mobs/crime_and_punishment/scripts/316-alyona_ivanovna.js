
// Alyona Ivanovna - the pawnbroker, suspicious, counting

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pledge") >= 0 || question.indexOf("pawn") >= 0 || question.indexOf("money") >= 0 || question.indexOf("loan") >= 0) {
        mob.Command("say What do you have? Show me first. I do not promise anything without seeing.");
        mob.Command("say Interest is two kopeks per ruble per month. Bring the item back with the interest within a month or I sell it.", 2.0);
        mob.Command("emote eyes you with professional suspicion.", 3.5);
        return true;
    }

    if (question.indexOf("sister") >= 0 || question.indexOf("lizaveta") >= 0) {
        mob.Command("say My sister is not here. She goes out. She has her own business.");
        mob.Command("say Why are you asking about my sister? What concern is she to you?", 2.0);
        mob.Command("emote draws herself up with small suspicious dignity.", 3.5);
        return true;
    }

    if (question.indexOf("safe") >= 0 || question.indexOf("money") >= 0 || question.indexOf("cash") >= 0) {
        mob.Command("emote peers at you with sharp eyes.");
        mob.Command("say I keep nothing here. Nothing worth taking. You are wasting your time.", 1.5);
        mob.Command("say Good day.", 3.0);
        return true;
    }

    var defaults = [
        "say State your business or leave.",
        "emote peers at you over the cabinet with small suspicious eyes and says nothing.",
        "say I am a businesswoman. I have no time for conversation."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote takes the item in dry hands and examines it with practiced swiftness.");
    mob.Command("say Hmm. Not much. I could give you perhaps -- come back tomorrow, I will think on it.", 2.0);
    return true;
}

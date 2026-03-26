
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("movie") >= 0 || question.indexOf("script") >= 0 || question.indexOf("screenplay") >= 0 || question.indexOf("film") >= 0 || question.indexOf("cleaver") >= 0) {
        mob.Command("say Cleaver. It's called Cleaver. It's based on my life experiences.", 1.0);
        mob.Command("emote leans forward, suddenly more alive.", 2.5);
        mob.Command("say The protagonist is in waste management, see, but he's also an artist. Nobody understands him.", 4.5);
        mob.Command("say Tony read it. He had notes. His notes were wrong but I listened to them anyway.", 6.5);
        mob.Command("emote sits back and checks his phone.", 8.0);
        return true;
    }

    if (question.indexOf("tony") >= 0 || question.indexOf("boss") >= 0) {
        mob.Command("say T is my mentor. He's taught me everything. Everything real.", 1.0);
        mob.Command("emote 's expression is complicated.", 2.5);
        mob.Command("say We have our issues. Families have issues. That's normal.", 4.0);
        return true;
    }

    if (question.indexOf("drug") >= 0 || question.indexOf("heroin") >= 0 || question.indexOf("addict") >= 0) {
        mob.Command("emote looks at you with sudden flat eyes.");
        mob.Command("say I don't know what you're talking about.", 2.0);
        mob.Command("emote checks his phone and does not look up again.", 3.5);
        return true;
    }

    var defaults = [
        "say You ever think about mortality? Like every day?",
        "say I'm working on the second act. The second act is where character is revealed.",
        "emote shows you his phone screen. Something on it. He takes it back quickly."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

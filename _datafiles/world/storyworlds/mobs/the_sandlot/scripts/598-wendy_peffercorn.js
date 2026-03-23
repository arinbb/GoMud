function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("squints") >= 0 || question.indexOf("palledorous") >= 0) {
        mob.Command("emote adjusts her sunglasses.");
        mob.Command("say That kid with the glasses. He's out there every day.", 1.5);
        mob.Command("emote is quiet for a moment.", 2.5);
        mob.Command("say He'd better not try anything.", 3.5);
        return true;
    }

    if (question.indexOf("lifeguard") >= 0 || question.indexOf("pool") >= 0 || question.indexOf("swim") >= 0) {
        mob.Command("say I've been working this pool three summers.", 0.5);
        mob.Command("emote scans the water without breaking conversation.", 1.5);
        mob.Command("say I haven't lost anyone yet.", 2.5);
        return true;
    }

    if (question.indexOf("sunscreen") >= 0) {
        mob.Command("emote doesn't respond immediately.");
        mob.Command("say ...SPF 15.", 2.0);
        return true;
    }

    var defaults = [
        "emote keeps her eyes on the pool and says nothing.",
        "say No running on the deck.",
        "emote acknowledges your presence with a slight tilt of her chin and goes back to watching the pool."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

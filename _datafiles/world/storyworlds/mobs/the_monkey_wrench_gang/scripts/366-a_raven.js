
// A Raven - the desert witness

function onAsk(mob, room, eventDetails) {
    mob.Command("emote tilts its head and regards you with one glossy black eye.");
    mob.Command("emote calls once: a hoarse, ambiguous sound.", 1.5);
    mob.Command("emote returns to watching.", 3.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines the item from a safe distance.");
    mob.Command("emote sidles closer, then retreats.", 1.5);
    mob.Command("emote calls once and lifts from its perch, circling overhead.", 3.0);
    return true;
}

function onIdle(mob, room) {
    var behaviors = Math.floor(Math.random() * 5);
    if (behaviors == 0) {
        mob.Command("emote launches from its perch and rides a thermal up the canyon wall, banking and circling.");
    } else if (behaviors == 1) {
        mob.Command("emote calls once from somewhere above: a sound like laughter that does not mean laughter.");
    } else if (behaviors == 2) {
        mob.Command("emote lands on the highest nearby point and watches everything with both eyes.");
    }
    return false;
}

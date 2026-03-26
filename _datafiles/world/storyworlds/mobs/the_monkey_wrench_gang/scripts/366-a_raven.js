
// A Raven - the desert witness

function onAsk(mob, room, eventDetails) {

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
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

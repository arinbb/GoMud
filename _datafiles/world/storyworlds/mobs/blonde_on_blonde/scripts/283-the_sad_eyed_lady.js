
function onAsk(mob, room, eventDetails) {
    mob.Command("emote holds the window light. She does not turn. The organ chord sustains.");
    return true;
}

function onIdle(mob, room) {
    var r = Math.floor(Math.random() * 10);
    if (r == 0) {
        mob.Command("emote lets the morning light move across her silhouette, slow as eleven minutes.");
    }
    return false;
}

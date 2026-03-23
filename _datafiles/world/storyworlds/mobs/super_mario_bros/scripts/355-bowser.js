
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("princess") >= 0 || question.indexOf("peach") >= 0) {
        mob.Command("emote breathes a short burst of fire.");
        mob.Command("say The princess is MINE.");
        mob.Command("emote stomps one enormous foot for emphasis.", 1.5);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("reason") >= 0) {
        mob.Command("emote narrows his small red eyes.");
        mob.Command("say Because I am the King. Because the Mushroom Kingdom should be MINE.");
        mob.Command("emote roars, the sound shaking the stone walls.", 1.5);
        return true;
    }

    mob.Command("emote regards you with reptilian contempt.");
    mob.Command("say I do not speak to you. I only speak to Mario. And then I fight him.");
    return true;
}

function onDie(mob, room) {
    SendRoomMessage(room.RoomId(), "<ansi fg=\"red\">Bowser falls into the lava with a tremendous roar and a splash of orange fire. The roar echoes off the stone for a long moment after he is gone.</ansi>", -1);
}

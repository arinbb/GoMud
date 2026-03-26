
// The Bulldozer Operator - just doing his job

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0 || question.indexOf("mine") >= 0) {
        mob.Command("say Good job. Good pay. That is most of it.", 0.5);
        mob.Command("say Union rates. Benefits. My daughter is going to college.", 2.0);
        return true;
    }

    if (question.indexOf("desert") >= 0 || question.indexOf("land") >= 0 || question.indexOf("canyon") >= 0) {
        mob.Command("emote squints at the landscape without particular feeling.");
        mob.Command("say It is all rock out here. Was rock before, will be rock after.", 1.5);
        mob.Command("say That is not my problem.", 2.5);
        return true;
    }

    if (question.indexOf("bulldozer") >= 0 || question.indexOf("machine") >= 0 || question.indexOf("equipment") >= 0) {
        mob.Command("say D9 Cat. Best machine ever built.", 0.5);
        mob.Command("say Two hundred and ten horsepower. If you cannot move it with a D9, it does not move.", 2.0);
        return true;
    }

    var defaults = [
        "say I do not get paid to talk.",
        "emote goes back to his lunch.",
        "say Whatever it is, it is above my pay grade."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

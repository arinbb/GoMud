
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("george") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("emote makes a sound that contains everything.");
        mob.Command("say George.", 1.0);
        mob.Command("say I worry about him. Every day I worry. He's not -- he's not where he should be. At his age!", 2.5);
        mob.Command("emote shakes her head.", 4.5);
        mob.Command("say He had a good job once. With the Yankees. Then something happened. It always happens with George.", 6.0);
        mob.Command("say But I love him. He's my son. What can you do.", 8.0);
        return true;
    }

    if (question.indexOf("frank") >= 0 || question.indexOf("husband") >= 0 || question.indexOf("festivus") >= 0) {
        mob.Command("say Frank.", 0.5);
        mob.Command("emote sighs.", 1.5);
        mob.Command("say He invented a holiday. A holiday! Because of a doll.", 3.0);
        mob.Command("say He put a pole in my living room. An aluminum pole. He says it stays up all year.", 5.0);
        mob.Command("emote gestures toward the pole.", 6.5);
        mob.Command("say But I love him. Forty years. You know how it is.", 8.0);
        return true;
    }

    if (question.indexOf("worry") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("say Of course I worry. That's what I do.", 0.5);
        mob.Command("emote is not apologetic about this.", 1.5);
        mob.Command("say Someone has to worry. If I don't worry, who worries?", 3.0);
        mob.Command("say Frank doesn't worry. Frank has opinions. That is different from worrying.", 5.0);
        return true;
    }

    var defaults = [
        "say Have you eaten? You look thin.",
        "emote worries about you specifically, immediately, without having met you before.",
        "say I just want everyone to be okay. Is that so much?",
        "emote calls for Frank from wherever she is. Frank does not respond."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines what you are showing her.");
    mob.Command("say Does George have one of these? Because if he doesn't, he should.", 2.0);
    return true;
}

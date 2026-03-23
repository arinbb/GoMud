
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("computer") >= 0 || question.indexOf("code") >= 0 || question.indexOf("system") >= 0) {
        mob.Command("say I built this system. Every line of it. The sequencing system, the tour routing, the security, the HVAC — everything talks to everything else because I MADE it talk.");
        mob.Command("emote gestures at the monitor wall with a grandiosity that is not entirely unjustified.", 2.0);
        mob.Command("say And I am not getting paid what that's worth. Not even close.", 3.5);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("pay") >= 0 || question.indexOf("salary") >= 0 || question.indexOf("worth") >= 0) {
        mob.Command("say You want to know what I make? You want to know what Hammond pays me?");
        mob.Command("emote stops typing and turns to face you for the first time.", 1.5);
        mob.Command("say Hammond underpays everyone. He spares no expense on the dinosaurs and the buildings and the tourist experience. The people who make it RUN? Different story.", 3.0);
        return true;
    }

    if (question.indexOf("screensaver") >= 0 || question.indexOf("ah ah ah") >= 0 || question.indexOf("magic word") >= 0) {
        mob.Command("emote grins for the first time.");
        mob.Command("say Ah ah ah. You didn't say the magic word.", 1.5);
        mob.Command("emote turns back to his screen, still grinning.", 3.0);
        return true;
    }

    if (question.indexOf("plan") >= 0 || question.indexOf("leaving") >= 0 || question.indexOf("shaving") >= 0 || question.indexOf("barbasol") >= 0) {
        mob.Command("emote looks at you flatly.");
        mob.Command("say I don't know what you're talking about.", 1.5);
        mob.Command("emote goes back to typing. Much faster.", 3.0);
        return true;
    }

    if (question.indexOf("hammond") >= 0) {
        mob.Command("say Mr. Hammond is a visionary. A genuine visionary. He's also very comfortable spending other people's labor at well below market rate.");
        mob.Command("emote unwraps a candy bar with controlled resentment.", 2.0);
        return true;
    }

    var defaults = [
        "say Do I look like I have time for this right now?",
        "say I have three hundred error messages, two deadlines, and nobody to help me. Come back later.",
        "say You didn't say the magic word."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it briefly.");
    mob.Command("say Is that something I need to log? Because I'm very busy.");
    return true;
}

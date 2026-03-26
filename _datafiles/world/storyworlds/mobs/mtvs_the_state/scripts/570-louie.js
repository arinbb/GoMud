function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pudding") >= 0 || question.indexOf("dip") >= 0) {
        mob.Command("emote spreads their arms to indicate all of it.");
        mob.Command("say Two hundred and forty dollars. That's how much. You want to know what that gets you? THIS. All of this. And I would spend it again.", 1.5);
        mob.Command("say I would spend it every time.", 3.0);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("dollar") >= 0 || question.indexOf("240") >= 0) {
        mob.Command("say I had two hundred and forty dollars. I considered my options carefully.");
        mob.Command("emote pauses for emphasis.", 1.5);
        mob.Command("say There were many options. I chose correctly.", 3.0);
        return true;
    }

    if (question.indexOf("why") >= 0) {
        mob.Command("emote looks at you for a long time.");
        mob.Command("say Why. That is the question.", 2.0);
        mob.Command("say I have thought about this. The answer is: because I want to. Because it is there. Because it is right.", 3.5);
        return true;
    }

    var defaults = [
        "say You could dip something in the pudding. If you wanted. I am just saying.",
        "emote gestures at the pudding meaningfully.",
        "say I have enough pudding. I have always had enough pudding.",
        "say The thing about pudding is that it is always there. It does not judge you."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

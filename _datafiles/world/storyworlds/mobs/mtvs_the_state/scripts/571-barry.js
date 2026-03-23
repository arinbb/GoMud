function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("barrel") >= 0 || question.indexOf("home") >= 0 || question.indexOf("live") >= 0) {
        mob.Command("emote pats the curved wall beside them.");
        mob.Command("say The barrel is home. This is not a metaphor. This is the literal place where I live. It is a good literal place.", 1.5);
        mob.Command("say Some people have houses. We have this. I consider that equivalent. I have thought about it at length and I am settled on this.", 3.5);
        return true;
    }

    if (question.indexOf("levon") >= 0) {
        mob.Command("say Levon is my roommate. He is also my closest friend. This is not a coincidence.");
        mob.Command("emote nods with certainty.", 2.0);
        mob.Command("say When you share a barrel with someone you come to understand them very thoroughly. Levon is good. He is a good person to share a barrel with.", 3.5);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("barrel") >= 0) {
        mob.Command("emote considers the question with genuine seriousness.");
        mob.Command("say People ask about the barrel as if it requires explanation. A house is a barrel with more right angles. I do not see the distinction.", 2.0);
        mob.Command("say I live here because this is where I live. The philosophy of residence is simpler than people make it.", 3.5);
        return true;
    }

    var defaults = [
        "say The barrel is comfortable. You should try sitting in it.",
        "emote gestures at the interior of the barrel with quiet pride.",
        "say Levon and I have made something here. A home. I am proud of that.",
        "say I have thought about many things in this barrel. The barrel has been useful for thinking."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at the item thoughtfully.");
    mob.Command("say Could that fit in the barrel? I ask because storage is something I think about.");
    return true;
}

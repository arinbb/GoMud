
// Doc Sarvis - the intellectual pyromaniac

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billboard") >= 0 || question.indexOf("sign") >= 0 || question.indexOf("burn") >= 0 || question.indexOf("fire") >= 0) {
        mob.Command("emote strikes a match and watches it burn.");
        mob.Command("say Aesthetic terrorism. That is the phrase I use.", 1.5);
        mob.Command("say A billboard is an act of aggression against the landscape. Fire is the appropriate response.", 3.0);
        mob.Command("say I am a surgeon. I remove things that should not be there. The principle is the same.", 5.0);
        return true;
    }

    if (question.indexOf("thoreau") >= 0 || question.indexOf("walden") >= 0 || question.indexOf("philosophy") >= 0) {
        mob.Command("emote takes out his copy of Walden.");
        mob.Command("say He went to Walden Pond because he wanted to live deliberately. To front only the essential facts.", 1.5);
        mob.Command("say We are in the same tradition. The essential fact is the canyon. The dam is a distraction from it.", 3.5);
        mob.Command("say He was right in 1854. He is still right. The problem is the world did not listen.", 5.5);
        return true;
    }

    if (question.indexOf("medicine") >= 0 || question.indexOf("doctor") >= 0 || question.indexOf("surgery") >= 0 || question.indexOf("heal") >= 0) {
        mob.Command("say I heal people. This is true. I take the thing that should not be there and I remove it.", 1.0);
        mob.Command("say The billboard should not be there. The dam should not be there. The mine should not be there.", 2.5);
        mob.Command("say I am consistent in my practice.", 3.5);
        return true;
    }

    if (question.indexOf("abbey") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("say The man was right. I will not say more than that.", 1.0);
        mob.Command("say He wrote from inside the thing he was describing. That is the rarest kind of truth.", 2.5);
        return true;
    }

    if (question.indexOf("law") >= 0 || question.indexOf("crime") >= 0 || question.indexOf("illegal") >= 0) {
        mob.Command("emote sips his wine flask with the calm of a man who has considered this carefully.");
        mob.Command("say Thoreau went to jail. He said the only place for a just man in an unjust society is prison.", 1.5);
        mob.Command("say I have a practice and a reputation and I am risking both. I have decided that is acceptable.", 3.5);
        mob.Command("say The canyon was worth more than my reputation. The arithmetic is not difficult.", 5.0);
        return true;
    }

    if (question.indexOf("hayduke") >= 0 || question.indexOf("george") >= 0) {
        mob.Command("say Hayduke is the most direct person I have ever met.", 0.5);
        mob.Command("say He wants to blow up the dam. He means it. He will do it if we let him.", 2.0);
        mob.Command("say We are his brakes. He is our engine. The arrangement works.", 3.5);
        return true;
    }

    var defaults = [
        "say The landscape does not require my opinions. But it is getting them anyway.",
        "emote lights a match and watches it burn, considering.",
        "say Ask me again in a more interesting way."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails).toLowerCase();

    if (showText.indexOf("match") >= 0 || showText.indexOf("lighter") >= 0 || showText.indexOf("fire") >= 0) {
        mob.Command("emote takes it and examines it with professional interest.");
        mob.Command("say You understand what this is for.", 1.5);
        return true;
    }

    if (showText.indexOf("thoreau") >= 0 || showText.indexOf("walden") >= 0 || showText.indexOf("book") >= 0) {
        mob.Command("emote brightens considerably.");
        mob.Command("say You have read him. Good. We can work with this.", 1.5);
        return true;
    }

    return false;
}

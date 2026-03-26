
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("money") >= 0 || question.indexOf("pay") >= 0 || question.indexOf("paid") >= 0 || question.indexOf("wage") >= 0) {
        mob.Command("emote looks at you with the first real expression you've seen from him — a brief, flat amusement.");
        mob.Command("say I'm paid well enough.", 1.5);
        mob.Command("emote leaves that where it sits.", 2.5);
        return true;
    }

    if (question.indexOf("trefoile") >= 0 || question.indexOf("mrs") >= 0 || question.indexOf("old woman") >= 0) {
        mob.Command("emote considers the question for longer than seems necessary.");
        mob.Command("say Mrs. Trefoile is my employer.", 2.0);
        mob.Command("emote lets that be all he says about it.", 3.0);
        return true;
    }

    if (question.indexOf("patricia") >= 0 || question.indexOf("girl") >= 0 || question.indexOf("woman") >= 0 || question.indexOf("guest") >= 0) {
        mob.Command("emote goes still in a way that registers as a threat.");
        mob.Command("say That's not your concern.", 1.5);
        mob.Command("emote holds eye contact just a beat too long before looking away.", 3.0);
        return true;
    }

    if (question.indexOf("key") >= 0 || question.indexOf("car") >= 0 || question.indexOf("barn") >= 0 || question.indexOf("leave") >= 0) {
        mob.Command("say No one is leaving.", 0.5);
        mob.Command("emote says it simply, as a statement of fact.", 1.5);
        return true;
    }

    if (question.indexOf("stephen") >= 0) {
        mob.Command("emote 's expression doesn't change.");
        mob.Command("say Dead men give a lot of orders in this house.", 1.5);
        mob.Command("emote goes back to what he was doing.", 2.5);
        return true;
    }

    var defaults = [
        "emote looks at you briefly and away again, not answering.",
        "say None of your business.",
        "emote turns back to what he was doing without responding."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}


function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("why") >= 0 || question.indexOf("orders") >= 0 || question.indexOf("reason") >= 0) {
        mob.Command("emote lights the lamp without looking up.");
        mob.Command("say Orders are orders. I light it at night. I extinguish it at dawn.");
        mob.Command("emote extinguishes it. Darkness. Then lights it again.", 2.0);
        mob.Command("say It was better before. The planet was slower. Two lamps a day. Now it never stops.", 3.5);
        return true;
    }

    if (question.indexOf("rest") >= 0 || question.indexOf("sleep") >= 0 || question.indexOf("stop") >= 0 || question.indexOf("break") >= 0) {
        mob.Command("say I have thought about stopping. There is no time to think about stopping.");
        mob.Command("emote extinguishes and relights in a single practiced motion.", 2.0);
        mob.Command("say When the planet was slower, I had a minute of rest. Between. That minute is gone now.", 3.5);
        return true;
    }

    if (question.indexOf("tired") >= 0 || question.indexOf("exhausted") >= 0) {
        mob.Command("emote looks up for exactly one second.");
        mob.Command("say Yes.");
        mob.Command("emote looks back down and lights the lamp.", 2.0);
        return true;
    }

    if (question.indexOf("point") >= 0 || question.indexOf("purpose") >= 0 || question.indexOf("useful") >= 0) {
        mob.Command("say The lamp is on when it should be on. Off when it should be off.");
        mob.Command("say That is the point. That is enough of a point.", 2.0);
        mob.Command("emote wipes the lamp glass with the worn cloth. It was already clean.", 3.5);
        return true;
    }

    if (question.indexOf("change") >= 0 || question.indexOf("new orders") >= 0) {
        mob.Command("say New orders would require asking. Asking would require stopping. I cannot stop.");
        mob.Command("emote extinguishes. Lights. Extinguishes.", 2.0);
        mob.Command("say If I stopped I might notice that I am tired.", 3.5);
        return true;
    }

    var defaults = [
        "emote lights the lamp. Extinguishes it. Lights it. There is no pause.",
        "say I do not have time to talk. I say this while talking.",
        "say I follow my orders. My orders are my orders. This is enough.",
        "emote wipes his brow mid-motion without slowing down."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it for exactly the duration of one lamp cycle.");
    mob.Command("say What is it? Does it need lighting? I can light it.");
    return true;
}

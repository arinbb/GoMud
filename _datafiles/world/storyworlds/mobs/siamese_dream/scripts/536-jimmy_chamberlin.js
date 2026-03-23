function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drums") >= 0 || question.indexOf("play") >= 0 || question.indexOf("kit") >= 0) {
        mob.Command("emote plays a short fill that lands somewhere unexpected.");
        mob.Command("say My dad made me take jazz lessons. I hated it at the time.");
        mob.Command("emote grins briefly.", 2.0);
        mob.Command("say I do not hate it now.");
        return true;
    }

    if (question.indexOf("geek") >= 0 || question.indexOf("fast") >= 0 || question.indexOf("tempo") >= 0) {
        mob.Command("say That one is about holding on. The tempo wants to run away from you and you do not let it.");
        mob.Command("emote demonstrates the opening pattern on the snare, slow, then up to speed in four bars.", 2.5);
        mob.Command("say Jazz teaches you where the beat actually is. Which is everywhere. Which is why you can play anywhere and still be right.");
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("corgan") >= 0) {
        mob.Command("emote considers for a moment.");
        mob.Command("say He hears everything. Every guitar layer. Every drum hit. He knows what he wants.");
        mob.Command("say That is not easy to play for. But it makes the record better.", 2.0);
        return true;
    }

    if (question.indexOf("soma") >= 0 || question.indexOf("hummer") >= 0) {
        mob.Command("say Those are the ones where you play like you are not there. Underneath the guitars. Holding the bottom.");
        mob.Command("emote plays a quiet bass drum pattern, almost inaudible.", 2.0);
        mob.Command("say The best playing on those tracks is the playing you cannot hear separately. It is just part of the sound.");
        return true;
    }

    var defaults = [
        "emote plays a short jazz-inflected fill and ends on the snare with a clean crack.",
        "say The kit is the most honest instrument. You cannot fake it.",
        "emote taps a complex rhythm on the hi-hat with one hand, not looking at it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

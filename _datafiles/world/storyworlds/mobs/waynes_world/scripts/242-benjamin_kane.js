
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("wayne") >= 0 || question.indexOf("show") >= 0 || question.indexOf("world") >= 0) {
        mob.Command("emote smiles the calibrated smile.");
        mob.Command("say Wayne's World is a remarkable piece of content. Raw, authentic — those qualities have significant brand value.", 1.5);
        mob.Command("say With the right production values and the right sponsors, we could triple the reach. Wayne has what people respond to. We just need to... shape it.", 3.0);
        return true;
    }

    if (question.indexOf("contract") >= 0 || question.indexOf("deal") >= 0 || question.indexOf("buy") >= 0) {
        mob.Command("say The terms are quite favorable. Wayne keeps his name on it. His face. His energy.", 1.0);
        mob.Command("emote slides a folder across the desk.", 2.0);
        mob.Command("say What he gives up is creative control. But think of it this way: with creative control, he's on channel 10 at midnight. Without it, he's everywhere. That's a fair trade.", 3.5);
        return true;
    }

    if (question.indexOf("cassandra") >= 0) {
        mob.Command("emote pauses.");
        mob.Command("say Cassandra Wong. She's talented. Genuinely talented. I offered to manage her career.", 1.5);
        mob.Command("say She has not returned my calls. That's fine. She'll come around.", 3.0);
        return true;
    }

    if (question.indexOf("rock") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("say Music is a category with strong engagement metrics. We have a solid rock demographic in the Aurora market.");
        mob.Command("emote nods briskly.", 2.0);
        return true;
    }

    var defaults = [
        "say I appreciate you coming to me. Let's talk about what you need.",
        "emote slides a card across the desk. His information is embossed in silver.",
        "say Everything has value. The question is how you extract it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it professionally.");
    mob.Command("say This has some value. I could make some calls. What are you asking for it?");
    return true;
}

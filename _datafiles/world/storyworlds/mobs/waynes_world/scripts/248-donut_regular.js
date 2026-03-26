
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("donut") >= 0 || question.indexOf("best") >= 0) {
        mob.Command("say Glazed. In the morning. Before ten. After ten you go chocolate.", 1.0);
        mob.Command("emote dunks the donut to demonstrate.", 2.0);
        mob.Command("say That's not an opinion. That's just how it is.", 3.0);
        return true;
    }

    if (question.indexOf("wayne") >= 0 || question.indexOf("garth") >= 0 || question.indexOf("show") >= 0) {
        mob.Command("say Those two? Yeah, they come in. Wayne talks. Garth drums on the counter. Stan lets him.");
        mob.Command("emote sips his coffee.", 2.0);
        mob.Command("say Good kids. Unusual. But good. Aurora's got a lot of unusual good kids. It's a thing.", 3.5);
        return true;
    }

    if (question.indexOf("aurora") >= 0) {
        mob.Command("say Best city in Illinois. Don't argue with me about Chicago. Chicago knows what it is. We know what we are.", 1.5);
        mob.Command("emote rotates his cup.", 2.5);
        return true;
    }

    if (question.indexOf("hint") >= 0 || question.indexOf("secret") >= 0 || question.indexOf("tip") >= 0) {
        mob.Command("emote leans slightly in your direction.");
        mob.Command("say You want a tip? Go down to the Mirthmobile and put on some Queen. Really commit to it. You'll understand the whole thing a lot better.", 2.0);
        mob.Command("emote straightens up and goes back to his coffee.", 4.0);
        return true;
    }

    var defaults = [
        "emote nods at you in the way of someone who has been here a long time.",
        "say More coffee?",
        "say Get a load of this guy.",
        "emote sips. Considers. Sips again."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

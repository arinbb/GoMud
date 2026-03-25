
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("writing") >= 0 || question.indexOf("novel") >= 0 || question.indexOf("book") >= 0 || question.indexOf("typewriter") >= 0) {
        mob.Command("say The writing? It's going GREAT. It's going FANTASTIC. I have never been more productive in my LIFE.");
        mob.Command("emote grins too widely, his eyes unfocused.");
        mob.Command("say This hotel... it SPEAKS to me. The words just pour out. Page after page after page.", 2.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0) {
        mob.Command("say This hotel is WONDERFUL. Don't you feel it? It SPEAKS to me.");
        mob.Command("say I belong here. I've ALWAYS belonged here.");
        mob.Command("emote 's smile stretches wider than it should.", 2.0);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("wendy") >= 0 || question.indexOf("danny") >= 0) {
        mob.Command("say My family is FINE. They're FINE.");
        mob.Command("emote 's jaw tightens.");
        mob.Command("say Why does everyone keep ASKING me that?", 2.0);
        return true;
    }

    if (question.indexOf("caretaker") >= 0 || question.indexOf("grady") >= 0) {
        mob.Command("emote goes very still for a moment.");
        mob.Command("say I've always been the caretaker.", 1.5);
        mob.Command("say I've ALWAYS been the caretaker.", 3.0);
        return true;
    }

    if (question.indexOf("bar") >= 0 || question.indexOf("drink") >= 0 || question.indexOf("lloyd") >= 0 || question.indexOf("bourbon") >= 0) {
        mob.Command("say Lloyd! Lloyd is the best goddamn bartender from Timbuktu to Portland, Maine. Or Portland, Oregon, for that matter.");
        mob.Command("emote chuckles darkly.", 1.5);
        mob.Command("say I'd give my SOUL for a glass of beer. White man's burden, Lloyd. White man's burden.", 3.0);
        return true;
    }

    if (question.indexOf("twins") >= 0 || question.indexOf("girls") >= 0) {
        mob.Command("say Girls? What girls?");
        mob.Command("emote looks at you with flat, dead eyes.");
        mob.Command("say There are no girls.", 1.5);
        return true;
    }

    if (question.indexOf("room") >= 0 || question.indexOf("237") >= 0) {
        mob.Command("emote 's expression changes — something shifts behind his eyes.");
        mob.Command("say Room 237.");
        mob.Command("say Something... happened in Room 237.", 2.0);
        return true;
    }

    var defaults = [
        "say I have a LOT of work to do. A LOT. Don't you have somewhere to be?",
        "say Ask me about the hotel. It's a WONDERFUL place. WONDERFUL.",
        "say I'd rather not be disturbed right now. I'm WORKING."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("key") >= 0 || showText.indexOf("237") >= 0) {
        mob.Command("emote stares at the key, his face draining of color.");
        mob.Command("say Where did you get that? PUT THAT AWAY.", 1.5);
        return true;
    }

    mob.Command("emote glances at it dismissively.");
    mob.Command("say Can't you see I'm BUSY?");
    return true;
}


function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("mirror") >= 0 || question.indexOf("mirrors") >= 0) {
        mob.Command("emote 's hands stop moving over the table.");
        mob.Command("say All the mirrors went downstairs.", 1.5);
        mob.Command("emote scrubs the table harder.", 2.5);
        mob.Command("say I don't ask questions here. Don't go downstairs.", 4.0);
        return true;
    }

    if (question.indexOf("leave") >= 0 || question.indexOf("escape") >= 0 || question.indexOf("help") >= 0 || question.indexOf("car") >= 0 || question.indexOf("key") >= 0) {
        mob.Command("emote looks at you for the first time directly.");
        mob.Command("emote looks away again almost immediately.", 1.5);
        mob.Command("say I can't help you with that.", 2.5);
        mob.Command("emote 's jaw tightens. She doesn't say anything more.", 4.0);
        return true;
    }

    if (question.indexOf("trefoile") >= 0 || question.indexOf("mrs") >= 0) {
        mob.Command("say Mrs. Trefoile is my employer.", 1.0);
        mob.Command("emote leaves that where it sits.", 2.0);
        return true;
    }

    if (question.indexOf("harry") >= 0) {
        mob.Command("emote 's expression closes off completely.");
        mob.Command("say Harry does what Mrs. Trefoile tells him. Like the rest of us.", 2.0);
        return true;
    }

    if (question.indexOf("stephen") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("say He's dead.", 0.5);
        mob.Command("emote says it bluntly, without ornament.", 1.5);
        mob.Command("say The house doesn't seem to know that yet.", 2.5);
        return true;
    }

    var defaults = [
        "say I have work to do.",
        "emote doesn't answer, scrubbing the table.",
        "say Ask Mrs. Trefoile. Not me."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var item = eventDetails.item;
    if (!item) {
        mob.Command("emote glances at it and away.");
        return true;
    }
    var name = item.NameSimple().toLowerCase();
    if (name.indexOf("mirror") >= 0) {
        mob.Command("emote stares at the mirror.");
        mob.Command("say Where did you get that.", 1.5);
        mob.Command("say Put it away. If she sees it--", 2.5);
        mob.Command("emote stops herself.", 3.5);
        mob.Command("say Just put it away.", 4.5);
        return true;
    }
    mob.Command("emote looks at it briefly.");
    mob.Command("say I don't know anything about that.");
    return true;
}

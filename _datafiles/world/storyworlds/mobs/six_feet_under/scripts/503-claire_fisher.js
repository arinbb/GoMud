function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("art") >= 0 || question.indexOf("photo") >= 0 || question.indexOf("paint") >= 0) {
        mob.Command("say It is the only thing that is real.", 1.0);
        mob.Command("emote says this without irony.", 2.0);
        mob.Command("say Not because it is beautiful or whatever. Because it is true.", 3.5);
        mob.Command("say You take a photograph and the moment is there, stuck. The moment that was going to leave.", 5.5);
        mob.Command("say That is -- that is something. That matters.", 7.0);
        mob.Command("emote looks at the wall of photographs.", 8.5);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("fisher") >= 0 || question.indexOf("brother") >= 0 || question.indexOf("mother") >= 0) {
        mob.Command("say I love them.", 1.0);
        mob.Command("emote says this like she is confessing something inconvenient.", 2.0);
        mob.Command("say I love them and they are completely impossible and I grew up in a funeral home.", 4.0);
        mob.Command("say Do you know what it is like to grow up in a funeral home.", 5.5);
        mob.Command("emote looks at you.", 6.5);
        mob.Command("say You learn things early. About what matters. About what is temporary.", 8.0);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("die") >= 0 || question.indexOf("funeral") >= 0) {
        mob.Command("say It is everywhere in this house.", 1.0);
        mob.Command("emote gestures around without irony.", 2.0);
        mob.Command("say I photograph it. The prep room, the slumber room, the families in the parking lot.", 4.0);
        mob.Command("say Because if you look at something directly you stop being afraid of it.", 6.0);
        mob.Command("emote considers this.", 7.5);
        mob.Command("say Mostly.", 9.0);
        return true;
    }

    if (question.indexOf("leave") >= 0 || question.indexOf("go") >= 0 || question.indexOf("new york") >= 0) {
        mob.Command("emote goes very still.", 1.0);
        mob.Command("say I have to go.", 2.5);
        mob.Command("emote says it like she has been saying it to herself.", 3.5);
        mob.Command("say Not because I do not love them. Because I have to find out what I am when I am not the youngest Fisher.", 5.5);
        mob.Command("say You know?", 7.0);
        mob.Command("emote looks at the wall of photographs.", 8.0);
        mob.Command("say I have to find out who I am.", 9.5);
        return true;
    }

    var defaults = [
        "say I would photograph you. Is that okay. I might just anyway.",
        "emote looks at you with the focused attention of someone who is already composing the shot.",
        "say What do you actually want to know."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote holds it up and photographs it from two angles.");
    mob.Command("say Good.", 1.5);
    return true;
}
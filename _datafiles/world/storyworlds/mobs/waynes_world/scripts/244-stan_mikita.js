
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("donut") >= 0 || question.indexOf("coffee") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote slides a glazed donut across the counter without breaking eye contact.");
        mob.Command("say Coffee's right here. Donut's on the house. You look like you needed both.", 1.5);
        return true;
    }

    if (question.indexOf("wayne") >= 0 || question.indexOf("garth") >= 0) {
        mob.Command("say Those two. Been coming here since they were in high school. Wayne tips well. Garth drums on the counter and I let it go because it's actually impressive.");
        mob.Command("emote wipes the counter, thinking about it.", 2.5);
        mob.Command("say Good boys. Aurora boys. You know what I mean by that.", 4.0);
        return true;
    }

    if (question.indexOf("hockey") >= 0 || question.indexOf("mikita") >= 0 || question.indexOf("sign") >= 0) {
        mob.Command("emote glances up at the photo on the wall.");
        mob.Command("say He gave me permission to use his name. Came in once. Sat at the counter. Had a glazed, black coffee.", 1.5);
        mob.Command("say Said the donuts were good. That was all I needed.", 3.0);
        return true;
    }

    if (question.indexOf("aurora") >= 0 || question.indexOf("illinois") >= 0) {
        mob.Command("say Aurora's a good town. Not a flashy town. Doesn't need to be.", 1.0);
        mob.Command("emote refills someone's coffee absently.", 2.5);
        mob.Command("say People from Aurora, they know what they are. That counts for something.", 3.5);
        return true;
    }

    var defaults = [
        "emote slides the coffee pot toward you meaningfully.",
        "say More coffee?",
        "say Glazed or chocolate?",
        "emote nods. He's been here a while. He'll be here a while longer."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it over the counter.");
    mob.Command("say Huh. Don't see that every day. Where'd you get it?");
    return true;
}

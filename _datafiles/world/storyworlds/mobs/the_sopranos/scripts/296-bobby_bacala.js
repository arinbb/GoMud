
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("train") >= 0 || question.indexOf("model") >= 0 || question.indexOf("lionel") >= 0 || question.indexOf("railroad") >= 0) {
        mob.Command("emote brightens considerably, a man whose subject has been introduced.");
        mob.Command("say Okay so. The O gauge is the large scale -- the original gauge, actually, from the 1900s.", 2.0);
        mob.Command("say I got a layout in the basement. It's got the mountains, the tunnels, the little town with the lights that actually work.", 4.0);
        mob.Command("emote is more animated than in any other context.", 5.5);
        mob.Command("say The detail on these newer cars is unbelievable. The weathering, the lettering. They got it right.", 7.0);
        return true;
    }

    if (question.indexOf("tony") >= 0 || question.indexOf("boss") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("emote goes careful and neutral.");
        mob.Command("say Tony's the boss. I work for Tony. That's the situation.", 2.0);
        mob.Command("emote adds nothing.", 3.0);
        return true;
    }

    if (question.indexOf("junior") >= 0 || question.indexOf("uncle") >= 0) {
        mob.Command("say Junior is Tony's uncle. He's got some health problems. That's really all I know about it.", 1.5);
        mob.Command("emote looks like he knows considerably more than that.", 3.0);
        return true;
    }

    var defaults = [
        "say You know what? Come look at the train layout sometime. I'll show you the whole setup.",
        "emote shifts his weight and the furniture participates in this.",
        "say I don't say anything I'm not sure about. That's a good policy."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with honest, gentle attention.");
    mob.Command("say That's a good piece. Where'd you get that?", 1.5);
    return true;
}

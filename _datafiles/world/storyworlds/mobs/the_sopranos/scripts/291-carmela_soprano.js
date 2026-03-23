
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tony") >= 0 || question.indexOf("husband") >= 0 || question.indexOf("marriage") >= 0) {
        mob.Command("emote turns from the counter and looks at you with a very even expression.");
        mob.Command("say Tony is a good provider. He loves his children. He's a complicated man.", 2.0);
        mob.Command("emote turns back to what she was doing.", 3.5);
        mob.Command("say We all have our crosses.", 5.0);
        return true;
    }

    if (question.indexOf("food") >= 0 || question.indexOf("cook") >= 0 || question.indexOf("recipe") >= 0 || question.indexOf("gravy") >= 0) {
        mob.Command("say You want the recipe? The gravy starts at seven in the morning. You brown the pork first.", 1.0);
        mob.Command("emote softens slightly, entering familiar territory.", 2.5);
        mob.Command("say My mother taught me. Her mother taught her. Some things you don't learn from a cookbook.", 4.5);
        return true;
    }

    if (question.indexOf("house") >= 0 || question.indexOf("real estate") >= 0 || question.indexOf("property") >= 0) {
        mob.Command("say I've been thinking about getting my real estate license actually.", 1.0);
        mob.Command("emote closes the listings magazine she had been reading.", 2.5);
        mob.Command("say A woman needs something of her own. I've always believed that.", 4.0);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("business") >= 0 || question.indexOf("mob") >= 0) {
        mob.Command("emote pauses in what she is doing for just a moment.");
        mob.Command("say I don't ask where the money comes from. I never have.", 2.0);
        mob.Command("emote resumes without looking up.", 3.5);
        mob.Command("say That's not the same as not knowing.", 5.0);
        return true;
    }

    var defaults = [
        "say Can I get you something to eat? There's plenty.",
        "emote looks at you with polite, measuring attention.",
        "say Sit down. I'll put something together."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the appraising look of someone who knows what things cost.");
    mob.Command("say That's nice. Is it from around here?", 1.5);
    return true;
}

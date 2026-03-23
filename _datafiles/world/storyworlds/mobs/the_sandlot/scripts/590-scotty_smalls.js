function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("benny") >= 0 || question.indexOf("rodriguez") >= 0) {
        mob.Command("emote looks at Benny with obvious admiration.");
        mob.Command("say He's -- he's just really good. Like. The best. He taught me how to hold the bat.", 1.5);
        mob.Command("say He didn't have to do that. He just did it.", 2.5);
        return true;
    }

    if (question.indexOf("ham") >= 0 || question.indexOf("porter") >= 0) {
        mob.Command("emote winces.");
        mob.Command("say Ham says I'm killing him. He says it a lot.", 1.5);
        mob.Command("say I think it means something good? Maybe? He's still here, so.", 2.5);
        return true;
    }

    if (question.indexOf("beast") >= 0 || question.indexOf("fence") >= 0) {
        mob.Command("emote goes a little pale.");
        mob.Command("say I don't -- I mean, I've heard things. About the fence. About what's back there.", 1.5);
        mob.Command("say I'm sure it's fine. It's probably fine. Nobody actually knows for sure.", 2.5);
        mob.Command("emote glances south toward the fence.", 3.5);
        return true;
    }

    if (question.indexOf("new") >= 0 || question.indexOf("move") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("say Yeah. We just moved here. From Ohio.", 0.5);
        mob.Command("emote kicks at the dirt.", 1.5);
        mob.Command("say I don't really know anyone yet. Except these guys now. I guess.", 2.5);
        mob.Command("say Benny said I could play. So.", 3.5);
        return true;
    }

    if (question.indexOf("baseball") >= 0 || question.indexOf("play") >= 0 || question.indexOf("game") >= 0) {
        mob.Command("emote holds his glove out and looks at it uncertainly.");
        mob.Command("say I know some things about it. Like, the main things.", 1.5);
        mob.Command("say Benny's been helping. I'm getting better. I think.", 2.5);
        return true;
    }

    var defaults = [
        "say I'm still figuring things out.",
        "emote watches the game and tries to look like he knows what's happening.",
        "say This is -- yeah. This is good. I think this is good."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("baseball") >= 0) {
        mob.Command("emote looks at the baseball and then back up at you.");
        mob.Command("say Is that -- where did you get that? That's -- that looks like it's been through a lot.", 1.5);
        mob.Command("emote turns it over in his mind. He wants it but doesn't reach.", 2.5);
        return true;
    }

    mob.Command("emote looks at it politely.");
    mob.Command("say Oh. That's -- yeah. Cool.", 1.5);
    return true;
}

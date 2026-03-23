function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("coins") >= 0 || question.indexOf("penny") >= 0 || question.indexOf("jar") >= 0) {
        mob.Command("emote brightens considerably.");
        mob.Command("say Oh man. Okay. So I buried a jar of pennies under my porch two years ago and I forgot about it, right?", 1.0);
        mob.Command("say And then I heard my brother talking about -- it doesn't matter. The point is I know where it is now. I know exactly where it is.", 2.5);
        mob.Command("emote realizes they are currently not anywhere near his porch.", 3.5);
        mob.Command("say Anyway. We'll get it when we get back.", 4.5);
        return true;
    }

    if (question.indexOf("body") >= 0 || question.indexOf("brower") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("emote swallows hard.");
        mob.Command("say I mean. I thought it would be -- I thought it would be different. Finding it.", 1.5);
        mob.Command("say I thought it would feel like an adventure. It doesn't feel like an adventure.", 3.0);
        mob.Command("emote crosses himself again.", 4.5);
        return true;
    }

    if (question.indexOf("scared") >= 0 || question.indexOf("afraid") >= 0) {
        mob.Command("say I'm not -- okay, yes. I am scared sometimes. That's allowed.");
        mob.Command("emote gestures at the general situation.", 2.0);
        mob.Command("say Look at where we are. It would be crazy not to be scared. I'm the only sane one here.", 3.5);
        return true;
    }

    if (question.indexOf("leech") >= 0 || question.indexOf("swamp") >= 0) {
        mob.Command("emote makes a small high sound.");
        mob.Command("say I would like to never talk about the swamp again.", 1.5);
        mob.Command("say I would like to go the rest of my life without talking about the swamp.", 2.5);
        mob.Command("emote checks his legs reflexively.", 3.5);
        return true;
    }

    if (question.indexOf("chris") >= 0 || question.indexOf("gordie") >= 0 || question.indexOf("teddy") >= 0) {
        mob.Command("say They're my best friends. I'd do anything for them.");
        mob.Command("emote pauses.", 2.0);
        mob.Command("say Most things. A lot of things. I'd do a lot of things for them.", 3.0);
        mob.Command("emote looks at the swamp they recently crossed.", 3.5);
        mob.Command("say I did just do that for them.", 4.0);
        return true;
    }

    var defaults = [
        "emote looks around nervously.",
        "say What was that sound?",
        "emote reaches into his pocket for the rest of whatever he was eating."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

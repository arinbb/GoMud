function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("david") >= 0 || question.indexOf("love") >= 0 || question.indexOf("partner") >= 0) {
        mob.Command("say David.", 1.0);
        mob.Command("emote says the name with uncomplicated directness.", 2.0);
        mob.Command("say He is the best person I know. I am not sure he knows that about himself.", 3.5);
        mob.Command("say He carries everything. He makes everything work.", 5.5);
        mob.Command("emote looks in the direction David went.", 7.0);
        mob.Command("say I watch him do this every day. He does not see what I see.", 8.5);
        return true;
    }

    if (question.indexOf("cop") >= 0 || question.indexOf("police") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say Fifteen years.", 1.0);
        mob.Command("emote says it straight.", 2.0);
        mob.Command("say You see a lot in fifteen years on the force in LA.", 3.5);
        mob.Command("say I left when I left. The right time.", 5.0);
        mob.Command("emote 's face does not elaborate on this.", 6.5);
        return true;
    }

    if (question.indexOf("strong") >= 0 || question.indexOf("tough") >= 0 || question.indexOf("brave") >= 0) {
        mob.Command("say You do what needs doing.", 1.0);
        mob.Command("emote says it simply.", 2.0);
        mob.Command("say Courage is not -- it is not a feeling. It is a choice you make every morning.", 4.0);
        mob.Command("say Some mornings are easier than others.", 5.5);
        mob.Command("emote goes back to his weights.", 7.0);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("fisher") >= 0) {
        mob.Command("say They are -- a lot.", 1.0);
        mob.Command("emote 's expression is fond.", 2.5);
        mob.Command("say Ruth feeds me too much. David worries too much. Nate is --", 4.5);
        mob.Command("emote pauses diplomatically.", 5.5);
        mob.Command("say Nate is figuring it out.", 6.5);
        mob.Command("say Claire I like. She sees things straight.", 8.0);
        return true;
    }

    var defaults = [
        "say What do you need.",
        "emote looks at you with the direct assessment of a former cop who has long since stopped making it obvious.",
        "say Say what you came to say."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
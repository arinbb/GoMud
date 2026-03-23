
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dad") >= 0 || question.indexOf("father") >= 0 || question.indexOf("tony") >= 0) {
        mob.Command("emote puts his phone face-down on the table.");
        mob.Command("say My dad is... it's complicated.", 2.0);
        mob.Command("say He provides for us. That's what he says. He provides.", 3.5);
        mob.Command("emote 's voice does something complicated on the word 'provides.'", 5.0);
        return true;
    }

    if (question.indexOf("school") >= 0 || question.indexOf("college") >= 0 || question.indexOf("study") >= 0) {
        mob.Command("say School is like -- what's the point? You go, you learn things, you get a job, you die.", 1.0);
        mob.Command("emote appears to have given this considerable thought.", 2.5);
        mob.Command("say That's the whole arc. Meadow goes to Columbia and then what? Then she works?", 4.0);
        return true;
    }

    if (question.indexOf("nietzsche") >= 0 || question.indexOf("existential") >= 0 || question.indexOf("meaning") >= 0 || question.indexOf("philosophy") >= 0) {
        mob.Command("emote sits up slightly, interested despite himself.");
        mob.Command("say Okay but have you actually thought about the heat death of the universe?", 1.5);
        mob.Command("say Like everything -- everything -- eventually just stops. All of this is temporary.", 3.0);
        mob.Command("say I find that either really freeing or really depressing depending on the day.", 5.0);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("career") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say I don't know. I don't know what I want.", 1.0);
        mob.Command("emote picks his phone up and puts it down again.", 2.5);
        mob.Command("say I'm not going into the family business, if that's what you're asking.", 4.0);
        mob.Command("emote does not sound entirely certain.", 5.5);
        return true;
    }

    var defaults = [
        "say I've been thinking about the concept of nothingness. Like actual nothingness.",
        "emote shrugs with the complete, eloquent, devastating shrug of the adolescent.",
        "say What do you want me to say? Everything is futile."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it with performed disinterest and then looks again more carefully.");
    mob.Command("say That's actually kind of interesting. What is that?", 2.0);
    return true;
}

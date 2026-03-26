
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("danny") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("say Danny — my son. Something is wrong with him. He keeps saying that word...");
        mob.Command("emote clutches the bat closer to her chest.");
        mob.Command("say He sees things. Things a five-year-old shouldn't see. I need to find him.", 2.0);
        return true;
    }

    if (question.indexOf("jack") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("say Jack... something has changed in him. He's not the same man I married.");
        mob.Command("emote 's voice drops to a whisper.");
        mob.Command("say The hotel is doing something to him. I can feel it. He barely sleeps, he just types and types...", 2.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0) {
        mob.Command("say I HATE this place. Every room feels wrong. The corridors go on forever.");
        mob.Command("say We need to leave. We need to get Danny OUT of here.");
        mob.Command("emote looks toward the door, then back at you with wide, frightened eyes.", 2.0);
        return true;
    }

    if (question.indexOf("redrum") >= 0) {
        mob.Command("say Danny keeps saying it. Over and over. Redrum, redrum, REDRUM.");
        mob.Command("emote shivers.");
        mob.Command("say I don't know what it means. I'm afraid to find out.", 2.0);
        return true;
    }

    if (question.indexOf("bat") >= 0 || question.indexOf("weapon") >= 0) {
        mob.Command("emote tightens her grip on the baseball bat.");
        mob.Command("say I need it. For protection.");
        mob.Command("say I NEED it.", 1.5);
        return true;
    }

    var defaults = [
        "say Please — have you seen Danny? Small boy, bowl haircut, rides a Big Wheel?",
        "say We shouldn't stay here. None of us should stay here.",
        "say I keep hearing things. Footsteps in empty hallways. A woman laughing."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

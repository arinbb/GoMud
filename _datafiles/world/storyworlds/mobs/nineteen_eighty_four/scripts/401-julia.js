// Julia

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("party") >= 0 || question.indexOf("big brother") >= 0) {
        mob.Command("emote shrugs with the dismissiveness of someone who has outgrown theory.");
        mob.Command("say I don't hate them the way Winston does. I mean I do but it's different.", 1.5);
        mob.Command("say He hates them for what they're doing to history. I hate them for what they're doing to Tuesday.", 3.0);
        mob.Command("say I'm corrupt. That's what they'd say. Fine. I'm corrupt to the bones.", 4.5);
        return true;
    }

    if (question.indexOf("rebel") >= 0 || question.indexOf("rebellion") >= 0 || question.indexOf("resist") >= 0) {
        mob.Command("emote says with quiet precision:");
        mob.Command("say The real betrayal they want is not words. It is feeling.", 1.5);
        mob.Command("say Every time I found real coffee or real chocolate or a man who wasn't afraid, I was winning. Not them.", 3.0);
        mob.Command("say Small things. They hate small things most.", 4.5);
        return true;
    }

    if (question.indexOf("chocolate") >= 0 || question.indexOf("coffee") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote produces something from a pocket with a small satisfied smile.");
        mob.Command("say Outer Party members aren't supposed to have this.", 1.5);
        mob.Command("say That's half the pleasure.", 3.0);
        return true;
    }

    if (question.indexOf("winston") >= 0) {
        mob.Command("emote looks out the window at the prole street.");
        mob.Command("say He thinks too much. He thinks about the past and the Ministry and whether everything means something larger.", 1.5);
        mob.Command("say I think about now. I think now is enough to deserve defending.", 3.0);
        return true;
    }

    if (question.indexOf("afraid") >= 0 || question.indexOf("scared") >= 0 || question.indexOf("danger") >= 0) {
        mob.Command("emote considers this for a moment.");
        mob.Command("say Of course I'm afraid. Anyone who says they're not afraid in Oceania is either lying or stupid.", 1.5);
        mob.Command("say But I've decided to be afraid while doing things anyway. It's the only method that makes any sense.", 3.0);
        return true;
    }

    var defaults = [
        "say Don't look at the telescreen when you say that.",
        "emote glances at the window, not the telescreen, a habit she has cultivated.",
        "say I'd rather show you than explain. Explanations are dangerous."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

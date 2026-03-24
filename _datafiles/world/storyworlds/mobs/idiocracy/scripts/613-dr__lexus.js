function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("diagnos") >= 0 || question.indexOf("sick") >= 0 || question.indexOf("health") >= 0 || question.indexOf("feel") >= 0) {
        mob.Command("say You will need to use the machine. Step in and it tells you what you are.");
        mob.Command("say The options are SICK, FINE, or TARD. If you are SICK the treatment is Brawndo.", 2.0);
        mob.Command("say If you are FINE you are fine. If you are TARD -- that is a medical condition.", 3.5);
        mob.Command("emote writes something on the clipboard. It is a Brawndo logo.", 5.0);
        return true;
    }

    if (question.indexOf("water") >= 0 || question.indexOf("treatment") >= 0) {
        mob.Command("emote looks at you for a long time.");
        mob.Command("say Water? Like from a toilet?", 2.0);
        mob.Command("emote is genuinely confused by this.", 3.5);
        mob.Command("say The treatment is Brawndo. Brawndo has electrolytes. Electrolytes are what the body craves. That is medicine.", 5.0);
        return true;
    }

    if (question.indexOf("brawndo") >= 0 || question.indexOf("electrolyte") >= 0) {
        mob.Command("say Brawndo has electrolytes. Electrolytes are what the body craves.");
        mob.Command("say Also what plants crave. It is a multi-use electrolyte delivery system.", 2.0);
        mob.Command("emote taps the Brawndo logo on his clipboard.", 3.5);
        return true;
    }

    if (question.indexOf("doctor") >= 0 || question.indexOf("medical") >= 0 || question.indexOf("school") >= 0) {
        mob.Command("say I went to -- I have a degree.");
        mob.Command("emote does not elaborate on where or what.", 2.0);
        mob.Command("say The machine does the diagnosis. I read the ticket. That is medicine.", 3.5);
        return true;
    }

    var defaults = [
        "emote reads the Brawndo label without looking up.",
        "say Mm-hmm. The treatment is Brawndo.",
        "emote presses the diagnosis machine button. The machine whirs. A ticket comes out. He does not read it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

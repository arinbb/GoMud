
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("krell") >= 0 || question.indexOf("machine") >= 0 || question.indexOf("apparatus") >= 0|| question.indexOf("boost") >= 0 || question.indexOf("brain") >= 0) {
        mob.Command("emote looks up from his specimen jars with an expression caught between professional excitement and something shadowed.");
        mob.Command("say The brain boost apparatus. A direct neural link to the most powerful computing substrate ever built.");
        mob.Command("say The Krell used it to expand their intelligence beyond biological limits. The medical implications are -- they are extraordinary.", 2.0);
        mob.Command("emote pauses and looks at his hands.", 3.5);
        mob.Command("say I should not use it. I know I should not use it. But I need to understand what it does to the human mind. Scientifically speaking.", 4.5);
        mob.Command("say Scientifically speaking.", 6.0);
        return true;
    }

    if (question.indexOf("morbius") >= 0 || question.indexOf("doctor") >= 0 || question.indexOf("intelligence") >= 0 || question.indexOf("iq") >= 0) {
        mob.Command("say Morbius used the apparatus twenty years ago. His intellectual capacity is -- remarkable. Extraordinary. Beyond anything in my medical charts.");
        mob.Command("emote makes a note in his journal.", 1.5);
        mob.Command("say The question I keep returning to is: what else did it expand? The apparatus reads the whole mind, not just the intellect.", 2.5);
        mob.Command("say There are parts of the mind that should not be made larger. We learned that with certain pharmacological experiments. The id does not benefit from amplification.", 4.0);
        mob.Command("emote pauses. His pen stops. He rereads what he has just written.", 5.5);
        return true;
    }

    if (question.indexOf("monster") >= 0 || question.indexOf("attack") >= 0 || question.indexOf("danger") >= 0) {
        mob.Command("say The energy readings from the attack site do not correspond to any naturally occurring phenomenon in my database.");
        mob.Command("emote spreads his field notes on a flat surface.", 1.5);
        mob.Command("say The pattern matches, very approximately, the emission profile of the Krell apparatus operating at maximum capacity.", 2.5);
        mob.Command("say But the apparatus is underground. It should not be able to -- unless someone is operating it. Or something that is operating through someone.", 4.0);
        mob.Command("emote stares at his notes for a long moment and then closes the journal.", 6.0);
        return true;
    }

    var defaults = [
        "say The medical mysteries here would occupy a full research team for decades. I have a notebook and good intentions.",
        "say Ask me about the physiology of Krell-enhanced cognition. I have theories. Too many theories.",
        "say I am keeping careful records. When we return to Earth, this data will be the most important medical document in history. If we return."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("disc") >= 0 || showText.indexOf("krell") >= 0) {
        mob.Command("emote examines the disc with careful medical attention.");
        mob.Command("say The alloy emits a low-frequency harmonic I can feel but not measure. That is interesting.", 1.5);
        mob.Command("say My instruments can not account for it. Which means the effect is neurological. Which means the disc is doing something to your brain while you hold it.", 3.0);
        mob.Command("say You may want to put it down. Or you may not. I find I am not sure either way.", 4.5);
        return true;
    }

    mob.Command("emote examines it with clinical attention.");
    mob.Command("say Nothing anomalous. But I would want to run tests before concluding that.");
    return true;
}

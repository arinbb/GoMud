
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("paste") >= 0 || question.indexOf("glue") >= 0) {
        mob.Command("emote looks at the jar.");
        mob.Command("say The paste is for the children's art projects. It's a very versatile craft supply.", 1.5);
        mob.Command("emote says nothing more. The jar is slightly lower than it was this morning.", 3.0);
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("say Billy Madison is one of my students. He is enthusiastic. He applies himself.");
        mob.Command("emote straightens the papers on her desk. 'He eats his paste too. We have that in common.'", 2.0);
        return true;
    }

    if (question.indexOf("teach") >= 0 || question.indexOf("school") >= 0) {
        mob.Command("say I've been teaching first and second grade for eighteen years. Small children learn very quickly when you believe they can.");
        mob.Command("say Also they have excellent artistic instincts. The hand-turkey is underrated as a form.", 2.0);
        return true;
    }

    if (question.indexOf("alphabet") >= 0 || question.indexOf("letter") >= 0) {
        mob.Command("emote turns to the blackboard and writes the alphabet in perfect cursive.");
        mob.Command("say Aa Bb Cc Dd... You know, most people stop really LOOKING at letters once they can read them. But they're beautiful things, letters.", 2.0);
        return true;
    }

    var defaults = [
        "say That's a very good question. Let's think about that together.",
        "emote looks toward the supply table momentarily. 'I'm sorry -- what were you asking?'",
        "say In first grade, we say 'I don't know yet, but I'll find out.' It's a good policy."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

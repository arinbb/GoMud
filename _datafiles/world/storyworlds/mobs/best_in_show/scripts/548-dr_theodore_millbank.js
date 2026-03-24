
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("standard") >= 0 || question.indexOf("judging") >= 0 || question.indexOf("judge") >= 0) {
        mob.Command("emote turns to address you with the composed authority of someone who has answered this question correctly eleven times.");
        mob.Command("say Each breed has a written standard -- a description of the ideal specimen. I am evaluating how closely each dog approaches that ideal.", 2.0);
        mob.Command("say I look at structure, movement, coat, temperament, overall balance. This is not preference. This is measurement.", 4.5);
        mob.Command("emote makes this distinction with precision.", 7.0);
        mob.Command("say Best in Show is the dog that best represents its breed among all others present. The standard is the standard.", 9.0);
        return true;
    }

    if (question.indexOf("winner") >= 0 || question.indexOf("best") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("emote looks at you with practiced neutrality.");
        mob.Command("say I do not speculate about outcomes before judging is complete.", 1.5);
        mob.Command("emote pauses.", 3.0);
        mob.Command("say I will say there are exceptional animals in this show. Several of them.", 4.5);
        mob.Command("emote has concluded his statement.", 6.0);
        return true;
    }

    if (question.indexOf("cambridge") >= 0 || question.indexOf("british") >= 0 || question.indexOf("england") >= 0) {
        mob.Command("say I studied at Cambridge, yes. Environmental biology, then went into dogs.");
        mob.Command("emote says this in the tone of someone who does not find this transition unusual.", 2.0);
        mob.Command("say Dogs are a study of form and function. The standard codifies what function requires of form. It is a deeply rational enterprise.", 4.5);
        mob.Command("emote nods, certain of this.", 6.5);
        return true;
    }

    if (question.indexOf("poodle") >= 0 || question.indexOf("haircut") >= 0) {
        mob.Command("say The Continental clip is historical. Working water dogs. The poms protected joints in cold water.", 1.5);
        mob.Command("emote states this simply, as a fact he has stated many times.", 3.5);
        mob.Command("say The clip is functional in origin. The show aesthetic derives from function. This is the nature of breed standards.", 5.5);
        mob.Command("emote nods and returns to his clipboard.", 7.5);
        return true;
    }

    mob.Command("emote regards you with polite attention.");
    mob.Command("say I have limited time before the next group. Please be direct.", 2.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with a brief but thorough evaluation.");
    mob.Command("say The quality is evident. What is the provenance?", 2.0);
    mob.Command("emote waits with the patience of a man comfortable with precision.", 4.0);
    return true;
}

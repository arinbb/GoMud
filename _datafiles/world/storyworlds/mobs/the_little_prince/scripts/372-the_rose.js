
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("beautiful") >= 0 || question.indexOf("lovely") >= 0 || question.indexOf("pretty") >= 0) {
        mob.Command("emote opens her petals slightly more.");
        mob.Command("say Yes. I know.");
        mob.Command("emote adjusts her petals with great deliberation.", 2.0);
        return true;
    }

    if (question.indexOf("cold") >= 0 || question.indexOf("dome") >= 0 || question.indexOf("glass") >= 0) {
        mob.Command("emote coughs delicately, twice.");
        mob.Command("say I should not like to be cold. The glass dome is perfectly adequate.");
        mob.Command("say He puts it on every evening. It is the least he could do.", 2.0);
        mob.Command("emote pretends to be entirely unconcerned.", 3.5);
        return true;
    }

    if (question.indexOf("love") >= 0 || question.indexOf("miss") >= 0 || question.indexOf("prince") >= 0) {
        mob.Command("emote is very still for a long moment.");
        mob.Command("say I was foolish. I should have been judged by my actions, not my words.");
        mob.Command("say I should have told him -- but roses are not made for telling.", 2.0);
        mob.Command("emote coughs once, quietly, and turns away.", 4.0);
        return true;
    }

    if (question.indexOf("thorn") >= 0 || question.indexOf("sharp") >= 0) {
        mob.Command("say I have four thorns. They are for tigers.");
        mob.Command("emote displays her thorns with great dignity.", 2.0);
        mob.Command("say I am not afraid of tigers. Not at all.", 3.0);
        return true;
    }

    if (question.indexOf("water") >= 0 || question.indexOf("thirsty") >= 0) {
        mob.Command("say Now that you mention it, I could use water. It has been some time.");
        mob.Command("emote coughs twice more, for emphasis.", 2.0);
        mob.Command("say I am not complaining. I never complain. I merely mention it.", 3.5);
        return true;
    }

    var defaults = [
        "emote coughs once and looks away, as if you had said something slightly beneath her notice.",
        "say I am the only rose of my kind. There are five thousand others, but they are nothing like me.",
        "emote adjusts her petals with great deliberation.",
        "say I have four petals. Did you notice? They are arranged perfectly."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

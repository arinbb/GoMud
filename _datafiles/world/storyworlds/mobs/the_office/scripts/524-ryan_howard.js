
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("startup") >= 0 || question.indexOf("wuphf") >= 0 || question.indexOf("tech") >= 0) {
        mob.Command("say WUPHF.com was ahead of its time.", 1.0);
        mob.Command("emote says this with conviction that has been practiced.", 2.5);
        mob.Command("say The concept was sound. The execution was a separate issue.", 4.0);
        mob.Command("say I'm working on something new. I'm not ready to talk about it.", 5.5);
        return true;
    }

    if (question.indexOf("mba") >= 0 || question.indexOf("school") >= 0) {
        mob.Command("say I have a Master of Business Administration from the University of Maryland.", 1.0);
        mob.Command("emote allows this to settle.", 2.5);
        mob.Command("say Yes. Thank you.", 3.5);
        return true;
    }

    if (question.indexOf("temp") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("emote looks at you with the expression of a man who did not expect to still be having this conversation.");
        mob.Command("say I'm in a transitional period.", 2.0);
        mob.Command("say This is temporary. Obviously.", 3.5);
        mob.Command("emote looks at his phone.", 5.0);
        return true;
    }

    // Default

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

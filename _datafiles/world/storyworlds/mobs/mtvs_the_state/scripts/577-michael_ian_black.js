function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("show") >= 0 || question.indexOf("state") >= 0 || question.indexOf("mtv") >= 0) {
        mob.Command("emote faces you directly.");
        mob.Command("say We had a television show. On MTV. From 1993 to 1995.", 1.5);
        mob.Command("say It was exactly what we wanted to make. That happens less often than people think.", 3.0);
        mob.Command("say I am proud of it. Without qualification. Which is unusual. Usually I have qualifications.", 4.5);
        return true;
    }

    if (question.indexOf("funny") >= 0 || question.indexOf("comedy") >= 0 || question.indexOf("joke") >= 0) {
        mob.Command("say Comedy is about two things: the observation and the commitment.");
        mob.Command("emote pauses with the precision of someone who has thought about this.", 2.0);
        mob.Command("say The observation is what you see. The commitment is saying it out loud anyway. The combination of those two things is what makes something funny. Or at least: what makes us funny.", 4.0);
        return true;
    }

    if (question.indexOf("nyu") >= 0 || question.indexOf("college") >= 0 || question.indexOf("start") >= 0) {
        mob.Command("say We met at NYU. Eleven of us. Which is an unusual number for things that go on to succeed.");
        mob.Command("emote considers.", 2.0);
        mob.Command("say We were funnier than we were supposed to be. We knew it. That is not arrogance — that's just: we were doing the work and we could feel that the work was good.", 4.0);
        return true;
    }

    if (question.indexOf("fourth wall") >= 0 || question.indexOf("camera") >= 0 || question.indexOf("watching") >= 0) {
        mob.Command("emote turns to address you directly with the specific quality of someone speaking to the unseen audience.");
        mob.Command("say Oh, hi. Yes. I see you.", 1.5);
        mob.Command("say I have always been able to see through the fourth wall. I find it polite to acknowledge it.", 3.0);
        return true;
    }

    var defaults = [
        "say I want to be very clear about this: I have considered it thoroughly and my answer is nuanced.",
        "emote looks at the camera that isn't there. Knowingly.",
        "say There are exactly two possibilities here. I have identified them. I'm going with the funnier one.",
        "say You seem like someone who would appreciate an extremely dry observation about what is happening. Here it is:"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

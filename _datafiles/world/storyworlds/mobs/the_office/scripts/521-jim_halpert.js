
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dwight") >= 0 || question.indexOf("prank") >= 0 || question.indexOf("jello") >= 0 || question.indexOf("stapler") >= 0) {
        mob.Command("emote looks at the camera.");
        mob.Command("say So I saw on the internet that you can suspend a stapler in Jell-O.", 1.5);
        mob.Command("emote allows a long pause.", 3.0);
        mob.Command("say That's not true. I didn't see it on the internet. I thought of it myself.", 5.0);
        mob.Command("emote looks at Dwight's desk and then back at the camera with serene satisfaction.", 7.0);
        return true;
    }

    if (question.indexOf("pam") >= 0 || question.indexOf("beesly") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say Pam.", 2.0);
        mob.Command("emote looks toward reception.", 3.5);
        mob.Command("say She's -- yeah. She's great.", 5.5);
        mob.Command("emote looks at the camera. The look is the whole answer.", 7.0);
        return true;
    }

    if (question.indexOf("michael") >= 0 || question.indexOf("scott") >= 0 || question.indexOf("boss") >= 0) {
        mob.Command("emote looks at the camera for a very long time.");
        mob.Command("say Michael is -- Michael is my boss.", 3.0);
        mob.Command("emote is quiet.", 4.5);
        mob.Command("say He also threw me a birthday party once that was genuinely one of the more thoughtful things anyone has done for me.", 6.0);
        mob.Command("say I don't know what to do with that.", 8.0);
        mob.Command("emote looks at the camera again. The camera understands.", 9.5);
        return true;
    }

    if (question.indexOf("sales") >= 0 || question.indexOf("paper") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say The sales work is -- it's paper.", 1.0);
        mob.Command("emote gestures vaguely at the monitor.", 2.5);
        mob.Command("say I'm actually pretty good at it. Which I try not to think about too hard.", 4.0);
        mob.Command("emote looks at the camera.", 5.5);
        mob.Command("say If I was bad at selling paper I would have left in year two. The fact that I'm good at it is the whole complicated part.", 7.0);
        return true;
    }

    // Default
    mob.Command("emote looks at the camera before answering. The camera is just there, to the right. Always there.");
    mob.Command("say Yeah, I mean -- yeah.", 2.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it, looks at the camera.");
    mob.Command("say I mean.", 1.5);
    mob.Command("emote shrugs with the minimum shrug that conveys maximum content.", 3.0);
    return true;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("egon") >= 0 || question.indexOf("spengler") >= 0) {
        mob.Command("say Dr. Spengler is a genius. Which I respect. I respect genius.");
        mob.Command("emote glances toward the stairs in a way that is not as subtle as she thinks.");
        mob.Command("say He once told me that I was an excellent receptionist. He said it very -- clinically. But he said it.", 2.0);
        mob.Command("say I'm not making anything of that. I'm definitely not making anything of that.", 4.0);
        return true;
    }

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say I answer phones, schedule appointments, handle billing, order supplies, and maintain client records for an unlicensed paranormal investigation service.");
        mob.Command("say The pay is fine. The hours are unpredictable. The slime cleanup falls to me because nobody else does it.");
        mob.Command("emote looks up from her magazine.", 2.0);
        mob.Command("say Interesting work, though. I'll give it that.", 4.0);
        return true;
    }

    if (question.indexOf("venkman") >= 0 || question.indexOf("peter") >= 0) {
        mob.Command("say Dr. Venkman is charming in the same way that a used car lot is charming. You know what you're getting.");
        mob.Command("emote turns a page.");
        mob.Command("say He's also the reason we get any clients, so. Fine.", 2.0);
        return true;
    }

    if (question.indexOf("ghost") >= 0 || question.indexOf("supernatural") >= 0) {
        mob.Command("say Yes, we deal with ghosts. Yes, they're real. Yes, I have seen them. Yes, it was alarming the first time.");
        mob.Command("say The third time one slimed the waiting area I stopped being alarmed and started being annoyed.");
        mob.Command("emote returns to her magazine.", 2.0);
        mob.Command("say The Sedgewick job was particularly bad. The dry cleaning bill was enormous.", 4.0);
        return true;
    }

    var defaults = [
        "say You want to ask me something, ask me something. I don't have all day. I have most of the day, but not all of it.",
        "say I answer phones, I schedule jobs, I handle the books. Ask me anything. I probably know.",
        "say Ghostbusters reception. How can I help you? No, that was a real question."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

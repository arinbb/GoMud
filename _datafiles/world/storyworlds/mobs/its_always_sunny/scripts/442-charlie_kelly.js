
// Charlie Kelly - rat king, illiterate, wildcard

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("waitress") >= 0 || question.indexOf("girl") >= 0) {
        mob.Command("emote brightens with an intensity that is either touching or alarming.");
        mob.Command("say The Waitress. Okay, so. I have a plan. I have had many plans. This one is different.", 1.5);
        mob.Command("say The issue is that she does not currently know that we are meant to be together. That is the only issue. I am addressing the issue.", 3.0);
        mob.Command("say I wrote her a song. I left it under her door. I also left some cheese. People like cheese.", 5.0);
        return true;
    }

    if (question.indexOf("rat") >= 0 || question.indexOf("rats") >= 0 || question.indexOf("basement") >= 0) {
        mob.Command("emote stands up straight with tremendous dignity.");
        mob.Command("say I am the rat king. That is not bragging, it is a title. I handle the rats in this bar and I handle them well.", 1.5);
        mob.Command("say Yes, there are a lot of them. That is because it is an ongoing ecosystem. You do not just eliminate an ecosystem. You manage it.", 3.0);
        mob.Command("say I have names for some of them. I will not tell you the names. Those are private.", 4.5);
        return true;
    }

    if (question.indexOf("bird law") >= 0 || question.indexOf("law") >= 0 || question.indexOf("legal") >= 0) {
        mob.Command("emote holds up a hand with absolute authority.");
        mob.Command("say Okay, I know a lot about bird law. More than you would think. More than most lawyers, honestly.", 1.5);
        mob.Command("say Bird law is very specific and very clear and I have studied it extensively. I cannot tell you the source because it is internal.", 3.0);
        mob.Command("say The point is: in bird law, what I am doing is completely legal.", 4.5);
        return true;
    }

    if (question.indexOf("read") >= 0 || question.indexOf("write") >= 0 || question.indexOf("letter") >= 0 || question.indexOf("illiterate") >= 0) {
        mob.Command("emote looks slightly evasive.");
        mob.Command("say I can read. I just read differently. My reading is more visual. More feelings-based.", 1.5);
        mob.Command("say The letters are all there. I am choosing which ones to look at. That is a skill.", 3.0);
        return true;
    }

    if (question.indexOf("charlie work") >= 0 || question.indexOf("work") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say Charlie Work. That is what they call it. Everything no one else does. Rats, furnace, cleaning, hauling, fixing, everything.", 1.5);
        mob.Command("say Someone has to do Charlie Work. That person is Charlie. I do not get paid extra. I do not get paid at all, technically.", 3.0);
        mob.Command("emote shrugs, apparently at peace with this.", 4.5);
        return true;
    }

    var defaults = [
        "say WILDCARD! ...Sorry, I just like saying that.",
        "emote stares at you for a moment, then looks at the floor, then looks back up.",
        "say Wait, what was the question? I was thinking about the Waitress."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it with great curiosity.");
    mob.Command("say Is that for me? Can I eat it? What happens if I eat it?", 1.5);
    return true;
}

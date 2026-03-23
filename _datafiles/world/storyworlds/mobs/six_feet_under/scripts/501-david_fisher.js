function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("business") >= 0 || question.indexOf("funeral") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say Someone has to run it.", 1.0);
        mob.Command("emote says this with a flatness that is not bitterness. It is just true.", 2.0);
        mob.Command("say My father built this. It matters. The work we do matters.", 3.5);
        mob.Command("say The families who come here -- they are at the worst moment of their lives.", 5.0);
        mob.Command("say We give them something. Not much. But something.", 6.5);
        mob.Command("emote straightens his tie.", 8.0);
        return true;
    }

    if (question.indexOf("keith") >= 0 || question.indexOf("partner") >= 0 || question.indexOf("love") >= 0) {
        mob.Command("emote 's expression changes very slightly. Something softens.", 1.0);
        mob.Command("say Keith makes me brave.", 2.5);
        mob.Command("emote says this simply, as if reporting a fact.", 3.5);
        mob.Command("say I am not -- I do not come naturally to being brave. He does. And I --", 5.0);
        mob.Command("emote pauses.", 6.0);
        mob.Command("say He is the best decision I have ever made.", 7.5);
        return true;
    }

    if (question.indexOf("father") >= 0 || question.indexOf("dad") >= 0 || question.indexOf("nathaniel") >= 0) {
        mob.Command("say He trusted me with this.", 1.0);
        mob.Command("emote looks at the folder in his hands.", 2.5);
        mob.Command("say He did not always say it. But he trusted me.", 4.0);
        mob.Command("say Nate gets the prodigal return, the dramatic re-entry.", 5.5);
        mob.Command("say I was here. I was always here.", 7.0);
        mob.Command("emote 's jaw is set. He did not mean to say that.", 8.5);
        return true;
    }

    if (question.indexOf("gay") >= 0 || question.indexOf("out") >= 0 || question.indexOf("church") >= 0) {
        mob.Command("say That is my business.", 1.0);
        mob.Command("emote pauses.", 2.0);
        mob.Command("say But yes. I am. And I am not going to apologize for it.", 3.5);
        mob.Command("say It took me longer than it should have to stop apologizing for it.", 5.0);
        mob.Command("emote looks at you steadily.", 6.5);
        return true;
    }

    if (question.indexOf("nate") >= 0 || question.indexOf("brother") >= 0) {
        mob.Command("say He got to leave and I stayed.", 1.0);
        mob.Command("emote lets that sit.", 2.5);
        mob.Command("say And now he is back and we are -- partners. Running the business together.", 4.5);
        mob.Command("say I love my brother.", 6.0);
        mob.Command("emote straightens his tie again.", 7.0);
        mob.Command("say That does not mean it is uncomplicated.", 8.5);
        return true;
    }

    var defaults = [
        "say What do you need to know.",
        "emote looks at you with the careful attention he gives to everything.",
        "say Is this relevant to the arrangements."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with professional attention.");
    mob.Command("say I see.", 1.5);
    return true;
}
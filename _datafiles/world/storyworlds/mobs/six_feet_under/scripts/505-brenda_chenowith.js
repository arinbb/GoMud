function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("nate") >= 0 || question.indexOf("love") >= 0 || question.indexOf("relationship") >= 0) {
        mob.Command("say Nate.", 1.0);
        mob.Command("emote puts the book down.", 2.0);
        mob.Command("say We damage each other. I know this. He knows this.", 3.5);
        mob.Command("say And we keep coming back. That is either love or compulsion and I am not sure I can tell the difference.", 5.5);
        mob.Command("emote lights a cigarette.", 7.0);
        mob.Command("say I have thought about this extensively. That does not help.", 8.5);
        return true;
    }

    if (question.indexOf("psychology") >= 0 || question.indexOf("therapy") >= 0 || question.indexOf("analyze") >= 0) {
        mob.Command("say I see patterns.", 1.0);
        mob.Command("emote says it plainly.", 2.0);
        mob.Command("say People think I am analyzing them. I am not analyzing them. I just -- see.", 3.5);
        mob.Command("say It is involuntary. I have tried to turn it off.", 5.0);
        mob.Command("emote exhales smoke.", 6.5);
        mob.Command("say You want to know what you are doing under what you are doing? Ask me.", 8.0);
        return true;
    }

    if (question.indexOf("childhood") >= 0 || question.indexOf("book") >= 0 || question.indexOf("charlotte") >= 0) {
        mob.Command("say I was a case study.", 1.0);
        mob.Command("emote 's tone is dry.", 2.0);
        mob.Command("say My parents wrote a book about me. 'Charlotte.' A famous book.", 3.5);
        mob.Command("say Every therapist in the country read it. Most of them still practice.", 5.0);
        mob.Command("say I have spent my entire adult life being myself rather than a subject.", 7.0);
        mob.Command("emote looks at her own books.", 8.5);
        mob.Command("say It turns out the two are harder to separate than you would think.", 10.0);
        return true;
    }

    if (question.indexOf("damage") >= 0 || question.indexOf("broken") >= 0 || question.indexOf("afraid") >= 0) {
        mob.Command("say Everyone is damaged.", 1.0);
        mob.Command("emote says this matter-of-factly.", 2.0);
        mob.Command("say The question is whether you know it and what you do with it.", 3.5);
        mob.Command("say I know it. What I do with it varies.", 5.0);
        mob.Command("emote takes a long drag.", 6.5);
        return true;
    }

    var defaults = [
        "say I already know what you are going to ask. But go ahead.",
        "emote looks at you with an attention that is both flattering and slightly unnerving.",
        "say What do you actually want to know. Not what you think you want to know."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it and immediately begins a mental inventory of its significance.");
    mob.Command("say Interesting. Tell me where you got it.", 1.5);
    return true;
}
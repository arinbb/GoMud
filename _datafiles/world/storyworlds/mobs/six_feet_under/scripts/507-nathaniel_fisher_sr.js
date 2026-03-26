function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("death") >= 0 || question.indexOf("die") >= 0 || question.indexOf("dead") >= 0 || question.indexOf("afterlife") >= 0) {
        mob.Command("emote shrugs.", 1.0);
        mob.Command("say You want answers. I understand.", 2.5);
        mob.Command("say I do not have answers. I have the same information you have.", 4.5);
        mob.Command("say Plus one additional data point.", 6.0);
        mob.Command("emote smiles in a way that gives nothing away.", 7.5);
        mob.Command("say Work with what you have.", 9.0);
        return true;
    }

    if (question.indexOf("nate") >= 0 || question.indexOf("eldest") >= 0) {
        mob.Command("say My son.", 1.0);
        mob.Command("emote 's expression is complicated.", 2.5);
        mob.Command("say He ran. I cannot blame him. I was difficult.", 4.5);
        mob.Command("say But he came back.", 6.0);
        mob.Command("emote pauses.", 7.0);
        mob.Command("say I did not get to tell him that I knew he would.", 8.5);
        mob.Command("emote is quiet.", 10.0);
        return true;
    }

    if (question.indexOf("david") >= 0) {
        mob.Command("say David ran the business.", 1.0);
        mob.Command("say I did not say it enough.", 2.5);
        mob.Command("emote does not make excuses.", 4.0);
        mob.Command("say I trusted him. He knew. I hope he knew.", 5.5);
        mob.Command("say Tell him I said.", 7.0);
        mob.Command("emote 's expression asks you not to ask what.", 8.5);
        return true;
    }

    if (question.indexOf("ruth") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("emote 's face changes.", 1.0);
        mob.Command("say She is going to be alright.", 3.0);
        mob.Command("say Better than alright. She does not know this yet.", 4.5);
        mob.Command("say Tell her from me.", 6.0);
        mob.Command("emote does not say anything else about this.", 7.5);
        return true;
    }

    if (question.indexOf("business") >= 0 || question.indexOf("funeral home") >= 0 || question.indexOf("fisher") >= 0) {
        mob.Command("say I built a good thing.", 1.0);
        mob.Command("emote says it without boasting.", 2.5);
        mob.Command("say I wanted to leave them something real. You cannot take money with you.", 4.5);
        mob.Command("say As it turns out.", 6.0);
        mob.Command("emote looks at the house around him.", 7.5);
        mob.Command("say Real. Something real that they could hold.", 9.0);
        return true;
    }

    if (question.indexOf("cigarettes") >= 0 || question.indexOf("bus") >= 0 || question.indexOf("new year") >= 0) {
        mob.Command("emote 's expression becomes wry.", 1.0);
        mob.Command("say Of all the ways.", 2.5);
        mob.Command("emote shakes his head.", 3.5);
        mob.Command("say Cigarettes. On New Years Eve.", 5.0);
        mob.Command("say If I had known I would have bought a carton.", 6.5);
        mob.Command("emote laughs once, genuinely.", 8.0);
        return true;
    }

    var defaults = [
        "say I do not have the answers. I am not that kind of ghost.",
        "emote regards you with the patience of someone who has nowhere to be.",
        "say Ask me something I can actually answer."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onIdle(mob, room) {
    var rand = Math.random();
    if (rand < 0.3) {
        mob.Command("emote is suddenly visible in the corner of the room, entirely there, and then is not.");
    }
    return false;
}
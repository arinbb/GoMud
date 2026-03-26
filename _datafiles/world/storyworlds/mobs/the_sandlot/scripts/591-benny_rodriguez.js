function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("smalls") >= 0 || question.indexOf("scotty") >= 0) {
        mob.Command("emote glances toward Scotty and nods once.");
        mob.Command("say He can learn. He just needs someone to tell him it's okay to try.", 1.5);
        mob.Command("say That's all anybody needs.", 2.5);
        return true;
    }

    if (question.indexOf("beast") >= 0 || question.indexOf("fence") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say I'm going to go over the fence.", 1.5);
        mob.Command("say Not through it, not around it. Over. And I'm getting that ball back.", 2.5);
        mob.Command("emote says this the way someone says something that has already been decided.", 3.5);
        return true;
    }

    if (question.indexOf("baseball") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("say It's the game. It's the only game.", 0.5);
        mob.Command("emote pauses.", 1.5);
        mob.Command("say You play it right, every day, it teaches you everything you need to know. About everything.", 2.5);
        return true;
    }

    if (question.indexOf("pro") >= 0 || question.indexOf("major") >= 0 || question.indexOf("league") >= 0) {
        mob.Command("emote doesn't quite smile.");
        mob.Command("say I'm gonna play. Yeah.", 1.5);
        mob.Command("say Someday.", 2.5);
        mob.Command("emote looks at the field like he can already see the future in it.", 3.5);
        return true;
    }

    if (question.indexOf("ham") >= 0 || question.indexOf("squints") >= 0) {
        mob.Command("say Those guys are the best.", 0.5);
        mob.Command("emote says it simply and means it completely.", 1.5);
        return true;
    }

    var defaults = [
        "say Get out there and hit.",
        "emote tosses a ball from hand to hand without looking at it.",
        "say You can always get better. That's the whole point."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

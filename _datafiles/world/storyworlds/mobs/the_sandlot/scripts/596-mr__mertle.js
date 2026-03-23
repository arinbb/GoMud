function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("baseball") >= 0 || question.indexOf("game") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say The game teaches you things that nothing else can teach you.", 1.5);
        mob.Command("say Patience. Humility. How to lose. How to keep going when you've lost.", 2.5);
        mob.Command("say I played this game for twenty years. I'd play it again tomorrow if I could.", 3.5);
        return true;
    }

    if (question.indexOf("babe") >= 0 || question.indexOf("ruth") >= 0) {
        mob.Command("emote nods slowly.");
        mob.Command("say I played with him once. 1936. Exhibition game.", 1.5);
        mob.Command("say He shook my hand before the game and called me by my name. In 1936, that was not something every man would do.", 2.5);
        mob.Command("say He signed a ball for me. Said, this one's yours. I still have it.", 3.5);
        mob.Command("emote tilts his head toward the house.", 4.5);
        return true;
    }

    if (question.indexOf("negro") >= 0 || question.indexOf("league") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("say I played twelve years in the Negro Leagues.", 0.5);
        mob.Command("say The best players in the world were in those leagues. The world just didn't know it yet.", 1.5);
        mob.Command("say We played because we loved it. That's the only reason that matters.", 2.5);
        return true;
    }

    if (question.indexOf("beast") >= 0 || question.indexOf("hercules") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote almost smiles.");
        mob.Command("say Hercules. He's been with me for years.", 1.5);
        mob.Command("say People see a big dog and they imagine the worst. He's gentle as a pup.", 2.5);
        mob.Command("say Those boys are afraid of him. I keep hoping one of them will come through the fence one day.", 3.5);
        return true;
    }

    if (question.indexOf("blind") >= 0 || question.indexOf("sight") >= 0 || question.indexOf("eyes") >= 0) {
        mob.Command("emote turns his face toward the radio.");
        mob.Command("say I hear the games. The announcer paints a picture.", 1.5);
        mob.Command("say I see more of the game now than I did with two good eyes.", 2.5);
        return true;
    }

    var defaults = [
        "say Those boys on the sandlot. They remind me of something I haven't thought about in a long time.",
        "emote listens to the radio and finds something to appreciate.",
        "say Sit down if you want to. I don't mind the company."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

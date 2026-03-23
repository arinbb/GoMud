function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("car") >= 0 || question.indexOf("engine") >= 0 || question.indexOf("fix") >= 0 || question.indexOf("mechanic") >= 0) {
        mob.Command("emote comes out from under the car immediately, like this is the question he has been waiting for.");
        mob.Command("say Okay, so -- the carburetor is the part that mixes the air and the fuel, right? And what happens is --", 1.0);
        mob.Command("emote begins gesturing at the engine with a wrench, pointing to various parts.", 2.5);
        mob.Command("say It has got this float in it, like a little float, and when the fuel level drops, the float drops, and that opens the needle valve, and the fuel comes in, and then --", 4.0);
        mob.Command("emote notices your expression and recalibrates.", 7.0);
        mob.Command("say Anyway the short version is I can fix it. Just leave it with me.", 8.5);
        return true;
    }

    if (question.indexOf("impression") >= 0 || question.indexOf("cary grant") >= 0 || question.indexOf("voice") >= 0) {
        mob.Command("say Oh you want to hear one? Okay. Okay, here is Cary Grant.");
        mob.Command("emote clears his throat with great preparation.", 2.0);
        mob.Command("say 'Judy. Judy. Judy.'", 3.5);
        mob.Command("emote looks at you for approval.", 5.0);
        mob.Command("say I do a good one, right? Andy says it sounds more like me than Cary Grant, but Andy is real hard to impress with impressions.", 6.5);
        return true;
    }

    if (question.indexOf("gomer") >= 0 || question.indexOf("cousin") >= 0) {
        mob.Command("say Gomer is my cousin. We are real close.");
        mob.Command("emote nods with genuine affection.", 1.5);
        mob.Command("say Gomer is in the Marines now. I miss him. He used to pump gas here and say shazam at things.", 3.0);
        mob.Command("say I still say shazam sometimes just because it reminds me of him.", 5.0);
        return true;
    }

    // Default: helpful and enthusiastic
    var responses = [
        "say I probably know something about that. Let me think.",
        "emote pushes the cap back and gives the question real consideration.",
        "say Hey! Good question. Real good question.",
        "say I do not know a lot about a lot of things but I know a LOT about some things."
    ];
    var pick = Math.floor(Math.random() * responses.length);
    mob.Command(responses[pick]);
    return true;
}

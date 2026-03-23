
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("catalog") >= 0 || question.indexOf("copy") >= 0 || question.indexOf("write") >= 0) {
        mob.Command("emote settles back in his chair.");
        mob.Command("say The catalog.", 1.0);
        mob.Command("emote says this as if it is a destination.", 2.5);
        mob.Command("say The catalog is not a catalog. It is a document of human longing. Every item is a question: who were you when you bought this? Who will you be?", 4.0);
        mob.Command("say Elaine understands this. She has a gift for translating experience into desire, which is the whole of commerce, really.", 7.0);
        mob.Command("emote gazes at something past the window.", 8.5);
        return true;
    }

    if (question.indexOf("travel") >= 0 || question.indexOf("adventure") >= 0 || question.indexOf("where") >= 0) {
        var places = [
            "Morocco. I was there for the leather. I stayed for the light.",
            "Nepal. Above the clouds, a man gave me his coat. I gave him mine. We were both better for it.",
            "Burma. The road was not on any map I had. The coat I found there is not in any catalog -- not yet.",
            "Argentina. The boots I acquired there have walked more miles than most people drive."
        ];
        var pick = Math.floor(Math.random() * places.length);
        mob.Command("emote brightens at the question.");
        mob.Command("say " + places[pick], 1.5);
        mob.Command("emote is already somewhere else in his mind.", 3.5);
        return true;
    }

    if (question.indexOf("elaine") >= 0 || question.indexOf("benes") >= 0) {
        mob.Command("say Elaine.", 0.5);
        mob.Command("emote nods with the gravity of a man assessing an investment.", 1.5);
        mob.Command("say She is the finest copy editor I have had the privilege of employing. Her instincts are sharp. Her taste is, shall we say, catholic.", 3.5);
        mob.Command("say I sometimes cannot reach her because she is in the middle of a situation involving her personal life, which is elaborate.", 6.0);
        mob.Command("say I have found that the best copy comes from elaborate personal lives.", 8.0);
        return true;
    }

    // Default: catalog description of whatever was asked
    mob.Command("emote considers the question.");
    mob.Command("say Everything has a story. Including what you've just asked me.", 2.0);
    mob.Command("emote begins to tell the story.", 3.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote takes the item and turns it over slowly.");
    mob.Command("say There is a catalog entry in this.", 2.0);
    mob.Command("emote is already composing it.", 3.5);
    return true;
}

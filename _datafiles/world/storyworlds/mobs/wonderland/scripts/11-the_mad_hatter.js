
// The Mad Hatter - riddles, time, hats, tea, unbirthdays, madness
// onAsk topics: raven, riddle, time, hat, tea, mad, unbirthday, mercury

function onAsk(mob, room, user, eventDetails) {
    var ask = eventDetails.askText.toLowerCase();

    if (ask.indexOf("raven") >= 0 || ask.indexOf("writing") >= 0 || ask.indexOf("desk") >= 0 || ask.indexOf("riddle") >= 0) {
        mob.Command("say Have you guessed the riddle yet?");
        mob.Command("emote leans forward with enormous intensity.");
        mob.Command("say I haven't the SLIGHTEST idea. I put it to myself at the beginning of the party and never found an answer. It seemed like the polite sort of thing to have on hand.");
        mob.Command("say It is a VERY good riddle precisely because it has no answer. Or perhaps it has too many. Difficult to tell.");
        return true;
    }

    if (ask.indexOf("time") >= 0 || ask.indexOf("clock") >= 0 || ask.indexOf("six") >= 0) {
        mob.Command("say Time! DON'T talk to me about TIME.");
        mob.Command("emote clutches his hat with both hands.");
        mob.Command("say Time and I had a falling-out at the Queen's concert. He won't do a thing I ask now. Always six o'clock. Always teatime. We can never wash the cups because it's ALWAYS time for tea.");
        mob.Command("say I've gone around this table over and over. Clean cup after clean cup. There are no more clean cups. There will never be clean cups again.");
        return true;
    }

    if (ask.indexOf("hat") >= 0 || ask.indexOf("hatter") >= 0 || ask.indexOf("price") >= 0 || ask.indexOf("ten") >= 0) {
        mob.Command("emote points to the card in his hatband.");
        mob.Command("say Ten and six. That was the price. I sell them, you see. Hats. Though I'm not sure I've sold one recently. Time has been rather fixed. Difficult to conduct commerce when it's always six o'clock.");
        mob.Command("say A good hat, though. It stores things. Documents. Small quantities of jam. Emergency biscuits. Do not look inside.");
        return true;
    }

    if (ask.indexOf("tea") >= 0 || ask.indexOf("drink") >= 0 || ask.indexOf("pot") >= 0) {
        mob.Command("say Have some wine!");
        mob.Command("emote gestures grandly at the table.");
        mob.Command("say There isn't any wine. There is only tea. There will only ever be tea. But the OFFER of wine is hospitality. Would you like some tea? It was made at the beginning of the party. Some would say it is past its best. I would say it is AT its best.");
        return true;
    }

    if (ask.indexOf("mad") >= 0 || ask.indexOf("crazy") >= 0 || ask.indexOf("insane") >= 0 || ask.indexOf("sane") >= 0) {
        mob.Command("say Why, yes. Quite mad.");
        mob.Command("emote taps the side of his head knowingly.");
        mob.Command("say It comes from the mercury, originally. Hat-making. Very bad for the nerves. But I find that madness has certain advantages -- excellent creativity, a loose relationship with consequence, and no one expects very much of you, which is wonderfully freeing.");
        return true;
    }

    if (ask.indexOf("unbirthday") >= 0 || ask.indexOf("birthday") >= 0) {
        mob.Command("emote leaps to his feet with extraordinary energy.");
        mob.Command("say A very merry unbirthday to YOU!");
        mob.Command("say There are 364 unbirthdays in a year and only ONE birthday. The mathematics of celebration clearly favor the unbirthday. I am astonished this is not more widely observed.");
        mob.Command("emote sits back down and adjusts his hat.");
        return true;
    }

    if (ask.indexOf("march") >= 0 || ask.indexOf("hare") >= 0 || ask.indexOf("dormouse") >= 0) {
        mob.Command("say The Hare is quite as mad as I am. The Dormouse sleeps through everything and is therefore the wisest of us.");
        mob.Command("emote attempts to butter a piece of bread with his watch.");
        mob.Command("say We make an excellent party of three. Or two and a dormouse, depending on how you count the dormouse.");
        return true;
    }

    mob.Command("say WHY is a raven like a writing-desk?");
    mob.Command("emote regards you with bright, unsettling eyes.");
    mob.Command("say I'm sure you have a better question than THAT tucked away somewhere. Move down!");
    return true;
}

function onIdle(mob, room) {
    var idleRoll = UtilDiceRoll(1, 9);
    if (idleRoll == 1) {
        mob.Command("say Why is a raven like a writing-desk?");
    } else if (idleRoll == 2) {
        mob.Command("emote dunks the Dormouse headfirst into the teapot.");
    } else if (idleRoll == 3) {
        mob.Command("say It's always six o'clock now. Always teatime.");
    } else if (idleRoll == 4) {
        mob.Command("say Have some wine!");
    } else if (idleRoll == 5) {
        mob.Command("say No room! No room!");
    } else if (idleRoll == 6) {
        mob.Command("emote counts the tea cups with increasing urgency.");
    } else if (idleRoll == 7) {
        mob.Command("say A very merry unbirthday to you!");
    } else if (idleRoll == 8) {
        mob.Command("emote shakes his pocket watch, holds it to his ear, and dips it in his tea with a sigh.");
    } else {
        mob.Command("say Move down! Move down! Clean cups!");
    }
    return false;
}

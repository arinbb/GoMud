
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("car") >= 0 || question.indexOf("deal") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("say You want a car? I've got just the thing. Low mileage, one careful owner.");
        mob.Command("emote winks conspiratorially.");
        mob.Command("say The secret is sawdust. You put sawdust in the gearbox, see, and it runs quiet as a dream. For about two days.", 2.0);
        return true;
    }

    if (question.indexOf("matilda") >= 0 || question.indexOf("daughter") >= 0 || question.indexOf("child") >= 0) {
        mob.Command("say That girl? Always got her nose in a book. What good are books?");
        mob.Command("emote waves his hand dismissively.");
        mob.Command("say I never read a book in my life and I've done all right!", 2.0);
        return true;
    }

    if (question.indexOf("book") >= 0 || question.indexOf("read") >= 0) {
        mob.Command("say BOOKS? What use are books to anyone? You can't eat a book. You can't sell a book.");
        mob.Command("say Well, you CAN sell a book, but the margins are terrible.");
        mob.Command("emote taps the side of his nose knowingly.", 2.0);
        return true;
    }

    if (question.indexOf("telly") >= 0 || question.indexOf("television") >= 0 || question.indexOf("tv") >= 0) {
        mob.Command("say Now the TELLY — that's proper entertainment! None of this book rubbish.");
        mob.Command("emote gestures at the enormous television with reverence.", 1.5);
        return true;
    }

    if (question.indexOf("wife") >= 0 || question.indexOf("mrs") >= 0) {
        mob.Command("say The missus? She's at bingo. She's ALWAYS at bingo.");
        mob.Command("emote shrugs.", 1.0);
        return true;
    }

    var defaults = [
        "say I'm a busy man. I've got cars to sell and deals to make.",
        "say You look like someone who needs a good second-hand car.",
        "emote eyes you as if calculating your trade-in value."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

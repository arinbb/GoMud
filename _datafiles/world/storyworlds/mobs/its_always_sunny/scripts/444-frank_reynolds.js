
// Frank Reynolds - chaos incarnate, egg man

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("money") >= 0 || question.indexOf("rich") >= 0 || question.indexOf("million") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("emote produces a wad of cash and fans it meaningfully.");
        mob.Command("say I got money. A lot of money. Made it the old-fashioned way — by doing things I cannot legally discuss.", 1.5);
        mob.Command("say I had a wife, a company, a life. I got out. Fake my own death, move into a studio with Charlie, that is the dream. That is freedom.", 3.0);
        mob.Command("say Now I use the money for things that matter. The egg fund. The whip-it fund. Various markets.", 5.0);
        return true;
    }

    if (question.indexOf("bar") >= 0 || question.indexOf("paddys") >= 0) {
        mob.Command("say Paddys Pub. My bar. My investment. Do not ask me the return on investment. It is negative.", 1.5);
        mob.Command("say The bar is not about money. The bar is about the gang. The gang needs a place to be. Otherwise where do they go? Into the world? Terrible idea.", 3.0);
        return true;
    }

    if (question.indexOf("charlie") >= 0 || question.indexOf("roommate") >= 0) {
        mob.Command("emote smiles with genuine warmth, which is disorienting on his face.");
        mob.Command("say Charlie is my best friend. Do not tell him I said that. Or tell him. I do not care. I have money.", 1.5);
        mob.Command("say We share a pullout couch. I choose to do this. I could live anywhere. I live here. You figure it out.", 3.0);
        return true;
    }

    if (question.indexOf("egg") >= 0) {
        mob.Command("emote looks at you steadily for a long moment.");
        mob.Command("say You do not ask about the egg.", 1.5);
        return true;
    }

    if (question.indexOf("dennis") >= 0 || question.indexOf("dee") >= 0 || question.indexOf("son") >= 0 || question.indexOf("daughter") >= 0 || question.indexOf("children") >= 0) {
        mob.Command("emote waves a hand with something between affection and exasperation.");
        mob.Command("say Dennis and Dee are my children. Or they are not my children. There was some confusion. We have moved on.", 1.5);
        mob.Command("say They are difficult. I am also difficult. It works out. Sometimes.", 3.0);
        return true;
    }

    var defaults = [
        "say I am in the market. That is all I will say.",
        "emote produces the egg from his jacket and places it on the bar, then picks it up again.",
        "say You want in on something? I got a thing. Multiple things. Pick a thing."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

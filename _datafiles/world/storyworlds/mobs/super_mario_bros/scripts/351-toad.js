
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("princess") >= 0 || question.indexOf("peach") >= 0 || question.indexOf("toadstool") >= 0) {
        mob.Command("emote clasps his hands with an expression of warm, practiced apology.");
        mob.Command("say Thank you Mario! But our princess is in another castle!");
        mob.Command("emote gestures vaguely eastward with a tiny emphatic hand.", 1.5);
        return true;
    }

    if (question.indexOf("castle") >= 0 || question.indexOf("next") >= 0 || question.indexOf("where") >= 0) {
        mob.Command("say The princess is in another castle. I know how that sounds.");
        mob.Command("emote looks briefly pained, then recovers his cheerful composure.");
        mob.Command("say Keep going east. You will find her. You always do.", 2.0);
        return true;
    }

    if (question.indexOf("bowser") >= 0 || question.indexOf("king") >= 0 || question.indexOf("koopa") >= 0) {
        mob.Command("emote shivers, his mushroom cap wobbling.");
        mob.Command("say The King of the Koopas is very large and his fire breath is very hot.");
        mob.Command("say But there is always an axe. There is always a bridge. There is always a way.", 2.0);
        return true;
    }

    if (question.indexOf("mushroom") >= 0 || question.indexOf("power") >= 0 || question.indexOf("item") >= 0) {
        mob.Command("emote brightens considerably, this being a subject he knows well.");
        mob.Command("say The Super Mushroom makes you bigger. The Fire Flower gives you fire. The Star makes you invincible!");
        mob.Command("say And the coin -- collect enough coins and you get a whole extra life. Every coin matters.", 2.0);
        return true;
    }

    if (question.indexOf("mario") >= 0 || question.indexOf("plumber") >= 0) {
        mob.Command("emote nods earnestly.");
        mob.Command("say Mario is very brave. He has come through so many castles. He never stops.");
        mob.Command("say I do not know if I could do what he does. I think I could not.", 2.0);
        return true;
    }

    var defaults = [
        "say Thank you for your question! But the answer is in another castle.",
        "say I am doing my best. We all are.",
        "emote bounces on his heels and gives you his most sincere smile."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

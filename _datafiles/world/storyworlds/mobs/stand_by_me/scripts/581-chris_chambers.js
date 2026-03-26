function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("gordie") >= 0 || question.indexOf("lachance") >= 0) {
        mob.Command("emote glances toward Gordie.");
        mob.Command("say Gordie is going to be somebody. He doesn't know it yet. That's fine. I know it.", 1.5);
        mob.Command("say He thinks he's just the writer-type kid who follows us around. He's wrong.", 3.0);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("eyeball") >= 0 || question.indexOf("chambers") >= 0) {
        mob.Command("emote 's face goes careful.");
        mob.Command("say My family is my family. My brother is -- Eyeball makes different choices than me.", 2.0);
        mob.Command("say I'm not going to be like them. I've decided that.", 3.0);
        mob.Command("emote looks at his hands.", 4.0);
        mob.Command("say I've decided that.", 5.0);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("school") >= 0) {
        mob.Command("say People like me don't go to college. That's just true. I've thought about it.");
        mob.Command("emote picks up a rock and skips it off a rail.", 2.0);
        mob.Command("say But Gordie does. If it means he has to do it without us -- if I have to push him toward it -- that's okay.", 3.5);
        mob.Command("say Some friendships are like that. You love someone enough to let them go somewhere you can't follow.", 5.0);
        return true;
    }

    if (question.indexOf("body") >= 0 || question.indexOf("brower") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("say We're not going to take the body. I've been thinking about it.");
        mob.Command("say We call it in anonymously. Let someone else find him properly. Let him go home properly.", 2.0);
        mob.Command("emote looks at the tracks.", 3.5);
        mob.Command("say That's what's right. We know that.", 4.5);
        return true;
    }

    if (question.indexOf("ace") >= 0 || question.indexOf("merrill") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say Ace is seventeen and he's already everything he's going to be. I'm twelve and I'm still deciding.", 2.0);
        mob.Command("say That's the difference.", 3.0);
        return true;
    }

    var defaults = [
        "say What is it?",
        "emote looks at you levelly.",
        "say Say what you're going to say."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("match") >= 0) {
        mob.Command("emote looks at the match.");
        mob.Command("say I've got more.", 1.5);
        return true;
    }

    return false;
}

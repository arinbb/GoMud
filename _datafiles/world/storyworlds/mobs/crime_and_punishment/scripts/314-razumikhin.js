
// Razumikhin - large, cheerful, loyal

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("raskolnikov") >= 0 || question.indexOf("rodya") >= 0 || question.indexOf("friend") >= 0) {
        mob.Command("emote runs a big hand through his hair.");
        mob.Command("say Rodya! That man worries me terribly. He will not eat, he will not talk, he paces around that coffin he calls a room --", 1.5);
        mob.Command("say There is something wrong with him beyond illness. I know it. He will not tell me.", 3.0);
        mob.Command("say But I am here. Whatever it is, I am here. That is what I can do.", 4.5);
        return true;
    }

    if (question.indexOf("eat") >= 0 || question.indexOf("food") >= 0 || question.indexOf("hungry") >= 0) {
        mob.Command("emote immediately begins clearing a space at the table.");
        mob.Command("say Yes! Yes, sit down. I have bread, and I think there is some sausage, and the samovar is still warm --", 1.5);
        mob.Command("say One eats. Whatever else is happening, one eats. This is the rule.", 3.0);
        return true;
    }

    if (question.indexOf("book") >= 0 || question.indexOf("study") >= 0 || question.indexOf("philosophy") >= 0) {
        mob.Command("say Books! Yes! What do you want to know? I have opinions about most things.", 0.5);
        mob.Command("say I am translating something from the German right now -- badly, I admit, but with great enthusiasm.", 2.0);
        mob.Command("say The German philologists are wrong about three-quarters of what they say and magnificent about the rest.", 3.5);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("poor") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say Money! I give lessons. I do translations. Sometimes I do things that are less dignified that I prefer not to specify.", 1.0);
        mob.Command("say One manages. The point is to keep moving. Stop moving and you start thinking about the situation, and the situation does not improve from being thought about.", 3.0);
        mob.Command("emote laughs with genuine pleasure at his own pragmatism.", 5.0);
        return true;
    }

    if (question.indexOf("dunya") >= 0 || question.indexOf("sister") >= 0 || question.indexOf("avdotya") >= 0) {
        mob.Command("emote goes slightly pink.");
        mob.Command("say Rodya's sister is -- she is a remarkable woman. Remarkable. Very capable. Sensible.", 2.0);
        mob.Command("say I have the utmost respect for her. The utmost.", 4.0);
        mob.Command("emote finds something very interesting to look at on the bookshelf.", 5.5);
        return true;
    }

    var defaults = [
        "say What? Yes! Absolutely! Sit down, I'll make tea.",
        "emote claps you on the shoulder with the uncomplicated warmth of someone who genuinely likes people.",
        "say I don't know the answer to that, but I'll think about it loudly if that helps."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

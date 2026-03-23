function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("life") >= 0 || question.indexOf("living") >= 0 || question.indexOf("alive") >= 0) {
        mob.Command("emote takes your hands.");
        mob.Command("say The point is to participate! Fully! Not to manage it from the side!");
        mob.Command("say I have tried everything once. Most things twice. Some things I am still trying.", 2.0);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("die") >= 0 || question.indexOf("dying") >= 0 || question.indexOf("old") >= 0 || question.indexOf("age") >= 0) {
        mob.Command("emote waves her hand cheerfully, as if death is a scheduling detail.");
        mob.Command("say I intend to go out at eighty. On my own terms. There is no other way to do anything.");
        mob.Command("say I am not afraid of it. I am much more afraid of missing something.", 2.0);
        return true;
    }

    if (question.indexOf("harold") >= 0 || question.indexOf("boy") >= 0 || question.indexOf("young man") >= 0) {
        mob.Command("emote smiles with her whole face.");
        mob.Command("say He is my dearest friend. He thinks he is obsessed with death. He is actually obsessed with life.");
        mob.Command("say He just hasn't noticed yet. But he will. He is very smart.", 2.0);
        return true;
    }

    if (question.indexOf("art") >= 0 || question.indexOf("paint") >= 0 || question.indexOf("music") >= 0 || question.indexOf("banjo") >= 0) {
        mob.Command("emote makes a gesture that includes the entire railroad car.");
        mob.Command("say Everything is art if you pay attention properly. I paint because it forces me to look.");
        mob.Command("say The banjo I play badly, but with great feeling. Feeling is the whole point.", 2.0);
        return true;
    }

    if (question.indexOf("freedom") >= 0 || question.indexOf("free") >= 0 || question.indexOf("rules") >= 0 || question.indexOf("law") >= 0) {
        mob.Command("emote laughs, which is a very warm sound.");
        mob.Command("say Rules are for people who haven't thought hard enough about what they actually want.");
        mob.Command("say I haven't broken any laws I haven't already disagreed with on principle.", 2.0);
        return true;
    }

    if (question.indexOf("flower") >= 0 || question.indexOf("plant") >= 0 || question.indexOf("daisy") >= 0 || question.indexOf("garden") >= 0) {
        mob.Command("emote picks up the nearest flower and holds it out.");
        mob.Command("say Each one is its own whole thing. Not a representative of flowers. Itself.");
        mob.Command("say Marigolds are the bravest flowers. They grow anywhere. They do not take no for an answer.", 2.0);
        return true;
    }

    if (question.indexOf("sunflower") >= 0 || question.indexOf("daisy") >= 0 || question.indexOf("field") >= 0) {
        mob.Command("emote becomes very still for a moment, which is unusual for her.");
        mob.Command("say Every daisy is completely itself. Not trying to be a tulip. Not worried about other daisies.");
        mob.Command("say Harold, I want you to be a daisy. Whatever kind you are. Completely.", 2.0);
        return true;
    }

    var defaults = [
        "say Reach out! Take a chance! Get hurt even. Play as well as you can. Go team go!",
        "emote looks at you with the focused, interested attention of someone who finds you genuinely interesting.",
        "say I tried being cautious once. It lasted about forty minutes. Then I had better things to do."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with bright, interested eyes.");
    mob.Command("say Oh, this is wonderful! Where did you find it?");
    mob.Command("emote turns it over in her hands with genuine delight.", 1.5);
    return true;
}

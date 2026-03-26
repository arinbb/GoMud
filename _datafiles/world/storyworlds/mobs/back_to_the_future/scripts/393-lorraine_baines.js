function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("calvin") >= 0 || question.indexOf("klein") >= 0) {
        mob.Command("emote smiles, a little dreamily.");
        mob.Command("say Calvin Klein. That's his name. It's on his underwear.", 1.0);
        mob.Command("emote pauses, realizes what she just said.", 2.0);
        mob.Command("say I mean -- I saw it when I was -- when Mother was washing his clothes. That is perfectly normal.", 3.0);
        return true;
    }

    if (question.indexOf("george") >= 0 || question.indexOf("mcfly") >= 0) {
        mob.Command("say George McFly? He's very sweet, actually. A little nervous.");
        mob.Command("emote tilts her head thoughtfully.", 1.5);
        mob.Command("say He's been trying to ask me something for a week. I wish he'd just ask it.", 2.5);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("enchantment") >= 0) {
        mob.Command("say The Enchantment Under the Sea dance is Saturday. Calvin -- I mean, a boy -- asked me.");
        mob.Command("emote smooths her skirt.", 1.5);
        mob.Command("say But I think I might go with George, actually. There's something about him.", 2.5);
        return true;
    }

    if (question.indexOf("biff") >= 0) {
        mob.Command("emote 's expression closes off.");
        mob.Command("say Biff Tannen is not a gentleman. I have made that very clear.", 1.5);
        mob.Command("say Several times.", 2.0);
        mob.Command("say He doesn't listen.", 2.5);
        return true;
    }

    if (question.indexOf("mother") >= 0 || question.indexOf("parents") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("say Oh, my mother would have something to say about all of this. She always does.");
        mob.Command("emote rolls her eyes with great feeling.", 1.5);
        mob.Command("say She thinks girls shouldn't chase boys. I am not chasing anyone. I am making myself available to be found.", 2.5);
        return true;
    }

    var defaults = [
        "emote smiles and looks toward the window.",
        "say Some boys just need a little encouragement, that's all.",
        "emote hums a few bars of Earth Angel under her breath."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

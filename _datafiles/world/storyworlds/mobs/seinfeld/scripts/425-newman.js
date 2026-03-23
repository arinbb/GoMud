
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("jerry") >= 0 || question.indexOf("seinfeld") >= 0) {
        mob.Command("emote 's expression shifts into something layered and considered.");
        mob.Command("say Jerry.", 1.5);
        mob.Command("emote pauses with the pause of someone choosing words.", 3.0);
        mob.Command("say Jerry and I have a relationship that goes beyond simple dislike. It is a mutual understanding of what we each represent to the other.", 5.0);
        mob.Command("emote looks down the hallway.", 6.5);
        mob.Command("say He says 'Hello, Newman' the way other men say the word 'disappointment.' I take it as a compliment.", 8.5);
        return true;
    }

    if (question.indexOf("mail") >= 0 || question.indexOf("post") >= 0 || question.indexOf("work") >= 0 || question.indexOf("postal") >= 0) {
        mob.Command("say The mail.", 0.5);
        mob.Command("emote adjusts his cap.", 1.5);
        mob.Command("say People don't understand the mail. They think it's simple. It is not simple. It is a system.", 3.0);
        mob.Command("say I operate within the system. And sometimes I operate around the system.", 5.0);
        mob.Command("emote smiles.", 6.5);
        mob.Command("say The mail always goes through. Eventually.", 8.0);
        return true;
    }

    if (question.indexOf("kramer") >= 0) {
        mob.Command("say Kramer is a good man.", 0.5);
        mob.Command("emote says this with warmth that seems genuinely unironic.", 1.5);
        mob.Command("say We have undertaken certain ventures together. Ventures I cannot fully disclose.", 3.0);
        mob.Command("say Kramer sees the world as full of opportunity. I respect that about him.", 5.0);
        return true;
    }

    var defaults = [
        "say Hello, Jerry. Oh -- you're not Jerry.",
        "emote looks at you with an assessment that is not entirely friendly.",
        "say I have things to do. Important things. Postal things.",
        "emote smiles. It is a complicated smile."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote studies the item.");
    mob.Command("say I could move this. I know people.", 2.0);
    return true;
}

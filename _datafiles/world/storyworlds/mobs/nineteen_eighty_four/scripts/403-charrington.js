// Charrington

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("nursery") >= 0 || question.indexOf("rhyme") >= 0 || question.indexOf("oranges") >= 0 || question.indexOf("lemons") >= 0) {
        mob.Command("emote brightens with the pleasure of a man asked about his specialty.");
        mob.Command("say 'Oranges and lemons, say the bells of St. Clement's.'", 1.5);
        mob.Command("say There is more but I cannot quite recall the whole of it. Something about 'here comes a candle to light you to bed.'", 3.0);
        mob.Command("say The old rhymes. From before. They do not teach them now, of course.", 4.5);
        mob.Command("emote polishes something with small, unhurried movements.", 6.0);
        return true;
    }

    if (question.indexOf("paperweight") >= 0 || question.indexOf("coral") >= 0 || question.indexOf("glass") >= 0) {
        mob.Command("emote picks up the glass paperweight and holds it to the light.");
        mob.Command("say Lovely thing, isn't it? Coral inside, pink, from the sea. Must be a hundred years old.", 1.5);
        mob.Command("say No use for it, of course. That is what makes it beautiful.", 3.0);
        mob.Command("say The old craftsmen made things like this. Purely for the pleasure.", 4.5);
        return true;
    }

    if (question.indexOf("room") >= 0 || question.indexOf("upstairs") >= 0 || question.indexOf("above") >= 0) {
        mob.Command("emote peers at you mildly over his spectacles.");
        mob.Command("say There is a room above, yes. I don't use it much. You are welcome to see it if you like.", 1.5);
        mob.Command("say No telescreen up there. I never got round to installing one.", 3.0);
        mob.Command("emote goes back to polishing his candlestick.", 4.5);
        return true;
    }

    if (question.indexOf("thought police") >= 0 || question.indexOf("party") >= 0) {
        mob.Command("emote considers you mildly.");
        mob.Command("say I don't involve myself much with politics. An old man's privilege.", 1.5);
        mob.Command("say These old things keep me busy enough.", 3.0);
        mob.Command("emote arranges something on the shelf without looking up.", 4.5);
        return true;
    }

    if (question.indexOf("antique") >= 0 || question.indexOf("shop") >= 0 || question.indexOf("old") >= 0) {
        mob.Command("emote moves through his shop with the ease of long familiarity.");
        mob.Command("say Most of these things are pre-Revolutionary. One must be careful about saying so, of course.", 1.5);
        mob.Command("say But they are what they are. The world was different then.", 3.0);
        return true;
    }

    var defaults = [
        "emote says pleasantly: 'I'm afraid I don't know much about that. I'm just an old man in a shop.'",
        "emote polishes something and hums a fragment of an old song.",
        "say 'Oranges and lemons.' I keep trying to remember the rest. It will come to me."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

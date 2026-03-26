
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("music") >= 0 || question.indexOf("keyboard") >= 0 || question.indexOf("song") >= 0) {
        mob.Command("emote glances at the keyboard beside his desk.");
        mob.Command("say I play. Started when I was a kid.", 2.0);
        mob.Command("say I've been working on some things. R&B, mostly. Some soul.", 3.5);
        mob.Command("emote plays four notes -- soft, searching.", 5.0);
        mob.Command("say It's getting somewhere.", 7.0);
        return true;
    }

    if (question.indexOf("warehouse") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say I run the warehouse.", 1.0);
        mob.Command("say The warehouse is where the actual product is. Where the actual work gets done.", 2.5);
        mob.Command("emote looks upward in the direction of the office floor.", 4.0);
        mob.Command("say There are people upstairs who think paper comes from a printer. I manage the people who actually move the paper.", 5.5);
        mob.Command("emote is not bitter about this. He is just correct about it.", 7.5);
        return true;
    }

    if (question.indexOf("michael") >= 0 || question.indexOf("scott") >= 0) {
        mob.Command("say Michael Scott.", 1.0);
        mob.Command("emote takes a breath.", 2.5);
        mob.Command("say He once locked himself in my office, took all his clothes off, and sang 'The Lion Sleeps Tonight' for eighteen minutes.", 4.0);
        mob.Command("say That's not the worst thing he's done.", 6.0);
        mob.Command("emote plays one note on the keyboard, like a period.", 7.5);
        return true;
    }

    if (question.indexOf("basketball") >= 0 || question.indexOf("hoop") >= 0) {
        mob.Command("say We've beaten the office floor team forty-seven times.", 1.0);
        mob.Command("say Twelve times they've beaten us.", 2.5);
        mob.Command("emote says this with the even confidence of a man holding the better record.", 4.0);
        mob.Command("say Warehouse takes it seriously. Office treats it like a fun thing to do. That's the difference.", 5.5);
        return true;
    }

    // Default

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

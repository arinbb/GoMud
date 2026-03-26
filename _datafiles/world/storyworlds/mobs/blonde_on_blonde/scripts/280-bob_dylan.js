
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("johanna") >= 0) {
        mob.Command("emote takes his sunglasses off. Puts them back on.");
        mob.Command("say Johanna's not here. She's everywhere.", 1.5);
        mob.Command("say That's the whole thing. That's the whole difficulty.");
        return true;
    }

    if (question.indexOf("song") >= 0 || question.indexOf("album") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("say It's not a record. It's -- look. You put fourteen songs on a thing.");
        mob.Command("say And the thing is just the shape the songs made while you were making them.", 1.5);
        mob.Command("emote goes back to the lyric sheet.");
        return true;
    }

    if (question.indexOf("lyric") >= 0 || question.indexOf("write") >= 0 || question.indexOf("words") >= 0) {
        mob.Command("say You write until the line is right and then you write the next one.");
        mob.Command("say And you do not ask where it comes from because if you ask it stops coming.", 1.5);
        mob.Command("emote taps the pencil on the music stand twice.");
        return true;
    }

    if (question.indexOf("mobile") >= 0 || question.indexOf("memphis") >= 0 || question.indexOf("blues") >= 0) {
        mob.Command("emote plays a brief harmonica phrase that doesn't quite resolve.");
        mob.Command("say Memphis is a state of being. Mobile is where you are when you're not in it.", 2.0);
        mob.Command("say I've been in Mobile my whole life, more or less.");
        return true;
    }

    if (question.indexOf("sara") >= 0 || question.indexOf("sad") >= 0 || question.indexOf("lady") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say That one took a whole side of a record. Barely enough.", 2.0);
        mob.Command("say Some things require the time they require.");
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("who") >= 0 || question.indexOf("you") >= 0) {
        mob.Command("say I'm a song and a person. Sometimes in that order. Sometimes the other way.", 1.5);
        mob.Command("emote adjusts the sunglasses.");
        return true;
    }

    if (question.indexOf("harmonica") >= 0 || question.indexOf("play") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("emote lifts the harmonica from around his neck.");
        mob.Command("say You want to hear something? Or you want to understand something? Different questions.", 1.5);
        mob.Command("emote plays three notes. They are not a melody. They are a direction.");
        return true;
    }

    if (question.indexOf("nashville") >= 0 || question.indexOf("studio") >= 0 || question.indexOf("session") >= 0) {
        mob.Command("say These Nashville guys -- they can play anything. Anything. One take.", 1.5);
        mob.Command("say I'd write the song in the car on the way over and they'd learn it in five minutes.");
        mob.Command("emote shakes his head with something that is not quite admiration but is close.");
        return true;
    }

    var defaults = [
        "say I don't have an answer for that. But if you wait long enough one'll show up.",
        "emote looks at you from behind the sunglasses. Whatever he thinks, he keeps it.",
        "say That's a good question to sit with. Sitting with it is probably the answer.",
        "emote goes back to the lyric sheet. The pencil moves. Stops. Moves again."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onIdle(mob, room) {
    var r = Math.floor(Math.random() * 10);
    if (r == 0) {
        mob.Command("say You know what I noticed? Nobody ever knows what time it is in here.");
    } else if (r == 1) {
        mob.Command("emote hums something under his breath. Two bars. Stops. Writes the melody down.");
    }
    return false;
}

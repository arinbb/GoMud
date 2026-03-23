function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("mcnulty") >= 0 || question.indexOf("jimmy") >= 0) {
        mob.Command("emote takes a long pull on the cigar and exhales slowly.");
        mob.Command("say Jimmy McNulty is the smartest dumb son of a -- he is a good police.", 2.0);
        mob.Command("emote shakes his head with genuine affection and genuine frustration.", 3.5);
        mob.Command("say He is also the source of every professional headache I have had in fifteen years.", 5.5);
        mob.Command("say These two facts are related.", 7.0);
        return true;
    }

    if (question.indexOf("murder") >= 0 || question.indexOf("case") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say I work murders. That is what I do.", 1.5);
        mob.Command("emote taps the cigar.", 3.0);
        mob.Command("say You catch a murder, you solve it. You do the work. You talk to people. You look at the evidence.", 4.5);
        mob.Command("say It is not complicated. It is just work.", 6.0);
        mob.Command("emote looks at you as if that should be obvious, because it should be.", 7.5);
        return true;
    }

    if (question.indexOf("game") >= 0) {
        mob.Command("emote takes a slow, contemplative pull on the cigar.");
        mob.Command("say The game.", 2.0);
        mob.Command("say I am a murder police in Baltimore. I did not choose the game. The game chose the city and I chose the work.", 4.0);
        mob.Command("say I just want to solve murders. That is a clear thing. You have a body. You find out what happened.", 6.5);
        mob.Command("say Everything else is the game being complicated about something that should be simple.", 8.5);
        return true;
    }

    var defaults = [
        "emote regards you through a cloud of cigar smoke.",
        "say What do you need.",
        "emote adjusts his fedora and waits for you to say something worth responding to."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

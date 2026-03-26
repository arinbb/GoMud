function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tass") >= 0 || question.indexOf("cool") >= 0) {
        mob.Command("say Tass is the word but the word is shorthand. What it means is: you decided.", 0.5);
        mob.Command("say Decided to be interesting. Decided not to apologize. Decided that the world is better with you in it at full capacity.", 1.5);
        mob.Command("say The avenue is full of people who decided. That is what makes it the avenue.", 2.5);
        return true;
    }

    if (question.indexOf("jam") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("emote tilts their head toward the west where the bass is coming from.");
        mob.Command("say The Jam Session is the tassest place in Tonetown. Has been since it opened.", 1.5);
        mob.Command("say The Bouncer at the door reads your outfit in under two seconds. No appeal, no explanation.", 2.5);
        mob.Command("say If you get the nod, you will know it. It feels like passing a test you did not know you were taking.", 3.5);
        return true;
    }

    var defaults = [
        "say The avenue is right here. This is it. You are on it.",
        "emote looks at you with the frank directness of someone who considers equivocation untass.",
        "say Do you want to know where the Jam Session is? It is west. You can hear it from here."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

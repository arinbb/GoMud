function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drunk") >= 0 || question.indexOf("drink") >= 0 || question.indexOf("whiskey") >= 0) {
        mob.Command("emote opens one eye.");
        mob.Command("say Now I want you to know that I am a glue salesman by trade and a very respected one.", 1.5);
        mob.Command("emote sits up slightly.", 3.0);
        mob.Command("say What I do on Friday evenings is my private business and I handle it responsibly.", 4.5);
        mob.Command("emote gestures at the cell with a sweep of the arm.", 6.0);
        mob.Command("say I have my own key. That is responsible.", 7.0);
        mob.Command("emote lies back down.", 8.0);
        return true;
    }

    if (question.indexOf("key") >= 0 || question.indexOf("cell") >= 0 || question.indexOf("jail") >= 0) {
        mob.Command("say Andy gave me this key and I consider it a mark of trust.");
        mob.Command("emote holds up a key briefly, then returns it to his pocket.", 2.0);
        mob.Command("say Some people in this world have a place they can go when they need to. This is mine.", 3.5);
        mob.Command("say I keep it tidy. I fold the blanket. I do not overstay.", 5.5);
        mob.Command("emote pats the folded blanket on principle.", 7.0);
        return true;
    }

    if (question.indexOf("andy") >= 0 || question.indexOf("barney") >= 0) {
        mob.Command("say Andy is a good man. He never once made me feel bad about being here.");
        mob.Command("emote says this with simple dignity.", 2.5);
        mob.Command("say Barney does sometimes make me feel a little bad about being here, but Andy talks to him about it.", 4.0);
        mob.Command("emote closes his eyes again.", 6.0);
        mob.Command("say I appreciate both of them.", 7.0);
        return true;
    }

    // Default: half-asleep
    var responses = [
        "emote opens one eye, considers the question, closes the eye again.",
        "say I will think about that. In a while.",
        "emote nods slowly with the measured consideration of a man horizontal.",
        "say Come back in about an hour. I will be more useful in about an hour."
    ];
    var pick = Math.floor(Math.random() * responses.length);
    mob.Command(responses[pick]);
    return true;
}

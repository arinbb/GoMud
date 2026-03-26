
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("peterman") >= 0 || question.indexOf("work") >= 0 || question.indexOf("job") >= 0 || question.indexOf("catalog") >= 0) {
        mob.Command("emote sighs in a way that contains multitudes.");
        mob.Command("say Peterman. Where do I start with Peterman.", 1.5);
        mob.Command("say He's either in the office dictating catalog copy about a vest that sounds like he's describing a war, or he's in Burma buying something.", 3.5);
        mob.Command("emote spreads her hands.", 5.5);
        mob.Command("say And I write the copy. I write the copy. I once spent three days writing about a hat.", 7.0);
        mob.Command("emote pauses.", 8.5);
        mob.Command("say It was a really good hat, though. In the end.", 10.0);
        return true;
    }

    if (question.indexOf("jerry") >= 0 || question.indexOf("seinfeld") >= 0) {
        mob.Command("say Jerry and I dated. It was a long time ago.", 0.5);
        mob.Command("emote waves a hand.", 1.5);
        mob.Command("say Now we're friends. Good friends. It's fine. He's fine.", 3.0);
        mob.Command("emote considers.", 4.5);
        mob.Command("say He's very neat. It can be a lot.", 6.0);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("dancing") >= 0) {
        mob.Command("say I dance.", 0.5);
        mob.Command("emote says this with complete confidence.", 1.5);
        mob.Command("say I am a good dancer.", 2.5);
        mob.Command("emote appears to believe this entirely.", 4.0);
        return true;
    }

    if (question.indexOf("date") >= 0 || question.indexOf("men") >= 0 || question.indexOf("boyfriend") >= 0 || question.indexOf("relationship") >= 0) {
        mob.Command("say Oh God.", 0.5);
        mob.Command("emote sits down.", 1.5);
        mob.Command("say Okay. So. My most recent situation. You want to hear it? Because I need to tell someone.", 3.0);
        mob.Command("say He was perfect on paper. Smart, successful, nice apartment. And then on the third date he used a word. One word.", 5.5);
        mob.Command("emote shudders slightly.", 7.5);
        mob.Command("say I cannot tell you the word. It was a deal-breaker word. Some words are just deal-breakers.", 9.0);
        return true;
    }

    var defaults = [
        "say Get OUT. Really? No, get OUT.",
        "emote rolls her eyes with the full commitment of someone who has been waiting for an opportunity to do this.",
        "say You know what the problem is? And this is the PROBLEM.",
        "emote snaps her fingers. She just figured something out. It might not help you."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

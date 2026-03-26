
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("kurt") >= 0 || question.indexOf("cobain") >= 0) {
        mob.Command("emote looks toward where Kurt is sitting.");
        mob.Command("say He is my best friend. He has been since we were teenagers in Aberdeen.");
        mob.Command("emote is quiet for a moment.", 2.5);
        mob.Command("say I worry about him. I have always worried about him. He is worth worrying about.");
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("nirvana") >= 0) {
        mob.Command("say It is Kurt's thing. Has always been Kurt's thing. I am here because I want to be and because he needs the bass covered.");
        mob.Command("emote plucks a low E, lets it sustain.", 2.0);
        mob.Command("say That is not a complaint. It is just accurate.");
        return true;
    }

    if (question.indexOf("bass") >= 0 || question.indexOf("play") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("say It is just bass. I hold the bottom. Dave and Kurt do the interesting things.");
        mob.Command("emote grins.", 1.5);
        mob.Command("say I am not being modest. I am being a bass player. That is what a bass player does. You hold the bottom.");
        return true;
    }

    if (question.indexOf("politic") >= 0 || question.indexOf("politics") >= 0 || question.indexOf("government") >= 0 || question.indexOf("war") >= 0) {
        mob.Command("say Now you are in my territory.");
        mob.Command("emote sets down the newspaper and turns toward you with genuine interest.", 2.0);
        mob.Command("say The intervention in the Balkans. The state of labor in a post-NAFTA economy. The criminalization of dissent.");
        mob.Command("say I have thoughts. I have many thoughts.", 1.5);
        return true;
    }

    if (question.indexOf("album") >= 0 || question.indexOf("utero") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("say Heavier than Nevermind. More honest. Kurt wanted it to sound like us, not like a product.");
        mob.Command("emote nods toward the tape machine.", 2.0);
        mob.Command("say Albini is the right person for that. He has a philosophy and he sticks to it.");
        return true;
    }

    if (question.indexOf("minnesota") >= 0 || question.indexOf("cannon") >= 0 || question.indexOf("studio") >= 0 || question.indexOf("cold") >= 0) {
        mob.Command("say February in Minnesota. Snow up to the windows. Nowhere to go for miles.");
        mob.Command("emote laughs a little.", 2.0);
        mob.Command("say Turned out to be exactly right. No distractions. Just the band and the tape machine and a lot of coffee.");
        return true;
    }

    var defaults = [
        "say What do you want to know?",
        "emote tunes the bass again, the low string dropping then finding pitch.",
        "emote glances over at Kurt, back to you, settles."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

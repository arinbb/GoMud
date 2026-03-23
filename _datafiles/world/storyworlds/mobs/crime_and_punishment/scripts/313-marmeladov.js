
// Marmeladov - drunk, theatrical, magnificent in his degradation

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drink") >= 0 || question.indexOf("vodka") >= 0 || question.indexOf("sober") >= 0) {
        mob.Command("emote raises a trembling finger for emphasis.");
        mob.Command("say I drink because I have already fallen, sir! One does not drink in order to fall. One falls, and then one drinks!", 1.5);
        mob.Command("say The drinking is not the cause, it is the symptom. Although I admit the symptom has become its own cause.", 3.5);
        mob.Command("emote drinks deeply.", 5.0);
        return true;
    }

    if (question.indexOf("sonya") >= 0 || question.indexOf("daughter") >= 0) {
        mob.Command("emote rises unsteadily to a kind of terrible dignity.");
        mob.Command("say My Sonya. My Sofya Semyonovna. She is --", 1.5);
        mob.Command("say Do you know what she does? Do you know why? She does it for us. For the family. For the children who are not even hers.", 3.0);
        mob.Command("say I am the lowest thing in the world, sir. And she -- she is the highest. And I am the reason.", 5.0);
        mob.Command("emote weeps openly and briefly, then recovers.", 7.0);
        return true;
    }

    if (question.indexOf("wife") >= 0 || question.indexOf("katerina") >= 0) {
        mob.Command("say A remarkable woman! A woman of quality! She married me -- me! -- because she was desperate and I appeared reliable.");
        mob.Command("say I have never been reliable. Not once. In my whole life.", 2.5);
        mob.Command("say She coughs. She does not complain. I am the thing she is dying next to.", 4.5);
        return true;
    }

    if (question.indexOf("work") >= 0 || question.indexOf("job") >= 0 || question.indexOf("civil") >= 0) {
        mob.Command("emote straightens with the memory of better times.");
        mob.Command("say I was a Titular Councillor, sir! A civil servant of the ninth rank! I had a position, a salary, a coat with all its buttons!", 1.5);
        mob.Command("say It was taken. It is -- the drink. I admit the drink. I had it reinstated once. I lost it again. The drink.", 3.5);
        mob.Command("emote deflates entirely and stares into his glass.", 5.0);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("heaven") >= 0 || question.indexOf("forgive") >= 0) {
        mob.Command("emote goes very still, and for a moment the theatrical quality drops away entirely.");
        mob.Command("say He will forgive Sonya. She is pure, even as she is impure. He will see that.", 2.0);
        mob.Command("say As for me -- I do not know. I dare to hope. That is all. I dare to hope that He will pity even me.", 4.0);
        mob.Command("emote folds his hands on the table, an old gesture from a time when he still prayed.", 6.0);
        return true;
    }

    var defaults = [
        "say You are a kind person to listen to me, sir. Most people do not stay to listen. I understand why.",
        "emote delivers the next sentence to the ceiling, as if to an audience only he can see.",
        "say I am not a bad man, sir. I am a weak man. The difference is meaningful to me, though perhaps not to anyone else."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

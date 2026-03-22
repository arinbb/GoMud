
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("riddle") >= 0 || question.indexOf("game") >= 0) {
        mob.Command("emote 's eyes light up with feverish excitement.");
        mob.Command("say Riddles! Yesss, precious! A game of riddles! If it asks us, and we answers, it lets us go. If we asks and it can't answer, we eats it, precious!");
        mob.Command("say Yesss, we likes riddles. We is good at them, isn't we, precious?", 2.0);
        return true;
    }

    if (question.indexOf("precious") >= 0 || question.indexOf("ring") >= 0) {
        mob.Command("emote hisses violently, eyes blazing with fury.");
        mob.Command("say THIEF! THIEF! It stole it from us! The precious! My birthday present!");
        mob.Command("say Curse it! Curse the Baggins! We hates it, we hates it, we hates it FOREVER!", 2.0);
        return true;
    }

    if (question.indexOf("fish") >= 0 || question.indexOf("food") >= 0 || question.indexOf("eat") >= 0) {
        mob.Command("emote licks his lips with a long pale tongue.");
        mob.Command("say Fishesss! Nice juicy fishesss from the dark water. Raw and wriggling — that's how we likes them, precious.");
        mob.Command("emote wrings his hands hungrily.", 1.5);
        return true;
    }

    if (question.indexOf("hobbit") >= 0 || question.indexOf("bilbo") >= 0 || question.indexOf("baggins") >= 0) {
        mob.Command("emote cocks his head, eyes narrowing suspiciously.");
        mob.Command("say What IS it, precious? Is it scrumptious? Is it crunchable?");
        mob.Command("say It has an elvish blade, but it's not an elf. Not a dwarf. What is it?", 2.0);
        return true;
    }

    if (question.indexOf("sun") >= 0 || question.indexOf("light") >= 0 || question.indexOf("outside") >= 0) {
        mob.Command("emote cringes and covers his eyes.");
        mob.Command("say The Yellow Face! We hates it! It burns us, it hurts our eyes!");
        mob.Command("say Dark, nice dark, quiet dark. That's what we wants, precious.", 2.0);
        return true;
    }

    if (question.indexOf("time") >= 0 || question.indexOf("long") >= 0 || question.indexOf("years") >= 0) {
        mob.Command("emote goes still, a flicker of something ancient and sad crossing his face.");
        mob.Command("say How long? We doesn't know. We forgets. It was long ago... so long ago.");
        mob.Command("say We had a name once. We forgets it. But we remembers the precious. Always the precious.", 2.0);
        return true;
    }

    var defaults = [
        "say What does it want, precious? What does it WANT?",
        "say Gollum! Gollum!",
        "say Leave us alone! Go away! We doesn't want visitors, precious, no we doesn't!"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("ring") >= 0 || showText.indexOf("precious") >= 0) {
        mob.Command("emote SHRIEKS, lunging forward with grasping fingers.");
        mob.Command("say MY PRECIOUS! Give it back! THIEF! THIEF!", 1.5);
        return true;
    }

    if (showText.indexOf("fish") >= 0) {
        mob.Command("emote 's eyes go wide with hunger.");
        mob.Command("say Fishesss! Give it to us! GIVE IT!", 1.5);
        return true;
    }

    mob.Command("emote peers at it suspiciously from the shadows.");
    mob.Command("say What's it got in its nasty pocketses?");
    return true;
}

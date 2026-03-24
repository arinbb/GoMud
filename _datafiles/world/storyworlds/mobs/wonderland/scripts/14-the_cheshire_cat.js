
// The Cheshire Cat - directions, madness, disappearing, philosophy, grins
// onAsk topics: direction, mad, grin, cat, disappear, where, advice, way

function onAsk(mob, room, user, eventDetails) {
    var ask = eventDetails.askText.toLowerCase();

    if (ask.indexOf("direction") >= 0 || ask.indexOf("way") >= 0 || ask.indexOf("where") >= 0 || ask.indexOf("go") >= 0) {
        mob.Command("emote materializes slowly, starting with the ears.");
        mob.Command("say That depends a good deal on where you want to get to.");
        mob.Command("say If you don't know where you want to get to, then it doesn't much matter which way you go. You'll get SOMEWHERE, as long as you walk long enough.");
        mob.Command("emote begins to fade at the edges.");
        mob.Command("say All the roads here go somewhere. Whether that somewhere is where you meant to go is another matter entirely.");
        return true;
    }

    if (ask.indexOf("mad") >= 0 || ask.indexOf("crazy") >= 0 || ask.indexOf("sane") >= 0 || ask.indexOf("madness") >= 0) {
        mob.Command("say Oh, you can't help that. We're all mad here.");
        mob.Command("emote settles comfortably onto a branch, or at least the grin does.");
        mob.Command("say I'm mad. You're mad.");
        mob.Command("say How do I know you're mad? You came here. Only mad people come here. Or people who fell down rabbit holes -- but that is, at root, the same category.");
        return true;
    }

    if (ask.indexOf("grin") >= 0 || ask.indexOf("smile") >= 0 || ask.indexOf("teeth") >= 0 || ask.indexOf("disappear") >= 0 || ask.indexOf("invisible") >= 0 || ask.indexOf("fade") >= 0) {
        mob.Command("emote begins to vanish, body first, until only the grin remains.");
        mob.Command("say Most things, when they disappear, leave nothing at all. I prefer to leave something to remember me by.");
        mob.Command("say A grin without a cat is quite possible. A cat without a grin is considerably more commonplace. I prefer to distinguish myself.");
        mob.Command("emote reappears, upside-down on a different branch.");
        return true;
    }

    if (ask.indexOf("cat") >= 0 || ask.indexOf("kitten") >= 0 || ask.indexOf("tabby") >= 0) {
        mob.Command("say I am a Cheshire Cat. We grin.");
        mob.Command("emote grins with enormous satisfaction at this fact.");
        mob.Command("say The reason Cheshire Cats grin is a matter of some historical debate. I grin because I find most situations mildly amusing, and some situations very amusing indeed.");
        mob.Command("say This situation, for instance, is quite amusing.");
        return true;
    }

    if (ask.indexOf("queen") >= 0 || ask.indexOf("heart") >= 0 || ask.indexOf("king") >= 0) {
        mob.Command("say The Queen? Quite mad.");
        mob.Command("emote waves a paw.");
        mob.Command("say The King, too, though differently. But then, as I said, we're all mad here.");
        mob.Command("say The Queen loses her temper frequently. The King finds it again and puts it back, which the Queen then loses again. This cycle has been going on for some time. I find it delightful.");
        return true;
    }

    if (ask.indexOf("advice") >= 0 || ask.indexOf("help") >= 0 || ask.indexOf("what") >= 0 || ask.indexOf("should") >= 0) {
        mob.Command("say Begin at the beginning.");
        mob.Command("emote fades to just eyes and grin.");
        mob.Command("say Go on till you come to the end. Then stop. This is excellent advice for stories. Also for walks. And for most things, really.");
        mob.Command("say Whether you are presently at the beginning or the end is something only you can determine. I have my suspicions.");
        return true;
    }

    if (ask.indexOf("wonder") >= 0 || ask.indexOf("land") >= 0 || ask.indexOf("place") >= 0 || ask.indexOf("here") >= 0) {
        mob.Command("say Wonderland. Yes.");
        mob.Command("emote contemplates the word with apparent pleasure.");
        mob.Command("say It is called that because everything here is wonderful, in the older sense of the word. Full of wonder. Wonder is not always comfortable. It is always interesting.");
        mob.Command("say You are wondering things right now. That means you are, technically, in the right place.");
        return true;
    }

    mob.Command("emote appears, quite suddenly, much closer than before.");
    mob.Command("say Did you want to know something, or did you want to feel as though you know something? They are different. Both are available.");
    mob.Command("emote fades, leaving only the grin, which persists for a moment longer than expected.");
    return true;
}

function onIdle(mob, room) {
    var idleRoll = UtilDiceRoll(1, 9);
    if (idleRoll == 1) {
        mob.Command("say We're all mad here. I'm mad. You're mad.");
    } else if (idleRoll == 2) {
        mob.Command("emote begins to fade, starting with the tail and ending with the grin.");
    } else if (idleRoll == 3) {
        mob.Command("say Would you tell me, please, which way I ought to go from here?");
    } else if (idleRoll == 4) {
        mob.Command("say That depends a good deal on where you want to get to.");
    } else if (idleRoll == 5) {
        mob.Command("emote reappears suddenly, upside-down on a different branch.");
    } else if (idleRoll == 6) {
        mob.Command("say How do you like the Queen?");
    } else if (idleRoll == 7) {
        mob.Command("emote grins so widely the grin briefly detaches from the face.");
    } else if (idleRoll == 8) {
        mob.Command("say Most things here will help you, if you ask the right question. The question is knowing what the right question is.");
    } else {
        mob.Command("emote watches you with amber eyes from a branch that does not exist.");
    }
    return false;
}

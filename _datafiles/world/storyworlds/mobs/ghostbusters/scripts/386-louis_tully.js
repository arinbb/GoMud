function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dog") >= 0 || question.indexOf("terror") >= 0 || question.indexOf("chase") >= 0) {
        mob.Command("say There was a dog! A big dog! Except it wasn't a dog, it was -- it was -- the eyes were wrong.");
        mob.Command("emote looks behind him involuntarily.");
        mob.Command("say I was at my own party. I threw a party. A very nice party with tax seminars as icebreakers. And then there was a dog and I was running.", 2.0);
        mob.Command("say I ended up in Central Park. It's a long story. Mostly running.", 4.0);
        return true;
    }

    if (question.indexOf("tax") >= 0 || question.indexOf("account") >= 0) {
        mob.Command("say I'm an accountant! CPA. Certified. I handle the whole building's taxes.");
        mob.Command("say Dana upstairs, she's a lovely person, I've been trying to ask her to dinner, her withholding is completely above board.");
        mob.Command("emote brightens briefly at the memory of normal things.", 2.0);
        mob.Command("say The deductibility of supernatural damages is an interesting gray area. I've been drafting a position paper.", 4.0);
        return true;
    }

    if (question.indexOf("dana") >= 0 || question.indexOf("barrett") >= 0) {
        mob.Command("say Dana! Dana Barrett. She lives upstairs. She's a cellist.");
        mob.Command("say I've been trying to invite her to my wine and cheese party for months.");
        mob.Command("emote looks wistful.", 2.0);
        mob.Command("say She seems... different lately. Something about her eyes. I'm sure it's fine.", 4.0);
        return true;
    }

    if (question.indexOf("ghostbuster") >= 0) {
        mob.Command("say The Ghostbusters! Yes! I called them! Janine answered.");
        mob.Command("say She has a very nice voice. Very -- anyway. I told them about the refrigerator.");
        mob.Command("emote pushes his glasses up.", 2.0);
        mob.Command("say The refrigerator had a temple in it. A whole temple. Inside the refrigerator.", 4.0);
        mob.Command("say I felt this was worth reporting.", 5.5);
        return true;
    }

    var defaults = [
        "say I am locked out. Again. This is the fifteenth time this year and I cannot figure out which key.",
        "say Ask me about the dog, the taxes, Dana, or the Ghostbusters! I have information on all of these! Some of it is relevant!",
        "say I just want to get back into my apartment. Is that so much to ask? Apparently yes."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

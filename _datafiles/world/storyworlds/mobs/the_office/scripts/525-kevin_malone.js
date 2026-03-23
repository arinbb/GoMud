
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("chili") >= 0) {
        mob.Command("emote brightens.");
        mob.Command("say My chili. Okay. So.", 1.0);
        mob.Command("say The secret is I slow-roast the tomatoes. And I add a little soy sauce, which sounds weird but it's not weird. And I undercook the onions on purpose.", 3.0);
        mob.Command("say I bring it every year. In my mother's pot. Which is huge.", 5.5);
        mob.Command("emote's expression becomes briefly complicated.", 7.0);
        mob.Command("say Last time I brought it, I dropped it. I'm not going to say more about it.", 8.5);
        return true;
    }

    if (question.indexOf("accounting") >= 0 || question.indexOf("numbers") >= 0) {
        mob.Command("say I'm good at numbers.", 1.0);
        mob.Command("emote says this with quiet certainty.", 2.5);
        mob.Command("say Not everybody knows that. But I am.", 4.0);
        return true;
    }

    if (question.indexOf("food") >= 0 || question.indexOf("eat") >= 0 || question.indexOf("lunch") >= 0) {
        mob.Command("emote considers the question as if you have asked something genuinely important.");
        mob.Command("say Today I have a sandwich and chips and something I'm not sure about that Angela put in the fridge.", 2.0);
        mob.Command("say I'm going to eat all of it.", 3.5);
        return true;
    }

    // Default
    mob.Command("say Yeah?", 1.0);
    mob.Command("emote waits with open, uncomplicated attention.", 2.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it.");
    mob.Command("say Is it food?", 1.5);
    mob.Command("emote waits for the answer.", 3.0);
    return true;
}

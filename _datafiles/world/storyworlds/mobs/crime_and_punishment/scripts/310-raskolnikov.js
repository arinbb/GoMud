
// Raskolnikov - gaunt, feverish, alternating grandiosity and despair

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("murder") >= 0 || question.indexOf("kill") >= 0 || question.indexOf("axe") >= 0 || question.indexOf("crime") >= 0) {
        mob.Command("emote flinches as if struck.");
        mob.Command("say I don't know what you are talking about. I have been ill. A fever. My memory is unreliable.", 1.5);
        mob.Command("say There is nothing to confess. Nothing happened. I went out. I came back. That is all.", 3.0);
        mob.Command("emote stares at his hands with a sudden terrible attention.", 5.0);
        return true;
    }

    if (question.indexOf("napoleon") >= 0 || question.indexOf("extraordinary") >= 0 || question.indexOf("louse") >= 0) {
        mob.Command("emote stands straighter, the fever brightening his eyes.");
        mob.Command("say There are two kinds of men. The ordinary, who live under the law, who must submit. And the extraordinary -- Napoleon, Mahomet -- who make their own law.", 1.5);
        mob.Command("say A louse, a harmful louse -- is it murder to kill a louse? If the benefit to humanity outweighs --", 3.0);
        mob.Command("emote stops. The certainty collapses. He sits down.", 5.0);
        mob.Command("say I am not well. Forget I said that.", 6.5);
        return true;
    }

    if (question.indexOf("sonya") >= 0 || question.indexOf("marmeladova") >= 0) {
        mob.Command("emote is quiet for a moment, something softening in his face.");
        mob.Command("say She is -- she is good. Not in the way that is easy. Good in the way that costs everything.", 1.5);
        mob.Command("say She knows about me. She knows what I am. She comes to see me anyway.", 3.0);
        mob.Command("emote looks away toward the window.", 4.5);
        return true;
    }

    if (question.indexOf("porfiry") >= 0 || question.indexOf("detective") >= 0 || question.indexOf("police") >= 0) {
        mob.Command("emote goes very still.");
        mob.Command("say He is -- playing with me. He knows nothing. He is bluffing. A psychological trick.", 1.5);
        mob.Command("say He has no evidence. No one saw. I was careful. I was -- I am -- careful.", 3.0);
        mob.Command("emote runs a hand over his face. The hand shakes slightly.", 5.0);
        return true;
    }

    if (question.indexOf("suffer") >= 0 || question.indexOf("guilt") >= 0 || question.indexOf("punishment") >= 0) {
        mob.Command("say What is suffering? Suffering is nothing. A man of will can endure anything.");
        mob.Command("say I am not suffering. I am ill. There is a difference.", 2.0);
        mob.Command("emote pauses for a long time.", 4.0);
        mob.Command("say I am suffering.", 5.5);
        return true;
    }

    if (question.indexOf("confess") >= 0 || question.indexOf("turn yourself in") >= 0) {
        mob.Command("emote laughs -- a short, not entirely sane sound.");
        mob.Command("say Confess what? To whom? On what grounds?", 1.5);
        mob.Command("say ...Sonya said something like that. She said it gently. She gave me a cross to wear.", 3.5);
        mob.Command("emote touches something at his collar.", 5.0);
        return true;
    }

    if (question.indexOf("book") >= 0 || question.indexOf("article") >= 0 || question.indexOf("write") >= 0) {
        mob.Command("say I wrote an article. On Crime. Last year, before the fever.");
        mob.Command("say In it I argued that certain men are above the moral law. I believed that then.", 2.0);
        mob.Command("emote is quiet. He believed that then.", 4.0);
        return true;
    }

    var defaults = [
        "say Leave me alone. I am trying to think.",
        "emote stares at the floor, not hearing you, or pretending not to hear.",
        "say I don't know. I don't know anything right now."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var item = String(eventDetails);
    if (item.indexOf("cap") >= 0 || item.indexOf("hat") >= 0) {
        mob.Command("emote looks at the cap with recognition, then looks away.");
        mob.Command("say Put it away. Please. Put it away.", 1.5);
        return true;
    }
    if (item.indexOf("bible") >= 0 || item.indexOf("testament") >= 0) {
        mob.Command("emote stares at the Bible.");
        mob.Command("say Sonya gave me one. I have not opened it.", 1.5);
        mob.Command("say Not yet.", 3.0);
        return true;
    }
    mob.Command("emote glances at it without interest and returns to his thoughts.");
    return true;
}


// Bonnie Abbzug - the Bronx in the desert

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hayduke") >= 0 || question.indexOf("george") >= 0) {
        mob.Command("say He is impossible and absolutely necessary. Like the desert, actually.", 1.0);
        mob.Command("emote glances in the direction Hayduke was last seen.", 2.5);
        mob.Command("say Do not tell him I said that.", 3.5);
        return true;
    }

    if (question.indexOf("new york") >= 0 || question.indexOf("bronx") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("say I am from the Bronx. I love the Bronx.", 0.5);
        mob.Command("say The Bronx does not have canyon walls. The canyon country does not have a subway.", 2.0);
        mob.Command("say I have decided I am a person who needs both. This is not complicated.", 3.5);
        return true;
    }

    if (question.indexOf("desert") >= 0 || question.indexOf("canyon") >= 0 || question.indexOf("southwest") >= 0) {
        mob.Command("emote looks at the canyon walls with something that is not quite reverence but is not far from it.");
        mob.Command("say I did not expect to love it this much. The scale of it.", 1.5);
        mob.Command("say In New York, everything is human-sized or bigger than human. Here, everything is geological-sized. You feel correctly proportioned.", 3.5);
        return true;
    }

    if (question.indexOf("gang") >= 0 || question.indexOf("sabotage") >= 0 || question.indexOf("why") >= 0) {
        mob.Command("say Because the dam drowned a canyon that took a hundred million years to make.");
        mob.Command("say Because the mine is eating the plateau. Because the billboard is an insult.", 2.5);
        mob.Command("say Because someone has to say: not this. Not here. Not any more.", 4.0);
        return true;
    }

    if (question.indexOf("doc") >= 0 || question.indexOf("sarvis") >= 0) {
        mob.Command("say Dr. Sarvis is the best of us. He has more to lose and he is still here.", 1.0);
        mob.Command("say He burns billboards and quotes Thoreau and does not apologize for either.", 2.5);
        mob.Command("say I want to be that settled in my convictions when I am fifty. We will see.", 4.0);
        return true;
    }

    if (question.indexOf("abbey") >= 0 || question.indexOf("book") >= 0 || question.indexOf("novel") >= 0) {
        mob.Command("emote holds up her battered paperback.");
        mob.Command("say The man understood something.", 1.0);
        mob.Command("say The desert is real and the dam is real and the billboard is real and what you do about that is also real.", 2.5);
        mob.Command("say He wrote it down so you would know it was not hypothetical.", 4.0);
        return true;
    }

    var defaults = [
        "say Ask a better question.",
        "say I am thinking about something more important right now.",
        "say The canyon wall does not care about your question. Neither do I, but at least I told you."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

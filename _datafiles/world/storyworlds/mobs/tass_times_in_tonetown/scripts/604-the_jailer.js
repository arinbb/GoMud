function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("regulation") >= 0 || question.indexOf("rule") >= 0 || question.indexOf("law") >= 0) {
        mob.Command("emote opens the binder to a page they clearly know well.");
        mob.Command("say The tass minimums are Level Four in public spaces, Level Three in commercial zones, no minimum in private residences.", 1.5);
        mob.Command("say These regulations came from Snotty Industries. The council was not consulted.", 2.5);
        mob.Command("say I implement the regulations. That is my job. What the council should have said is not my job.", 3.5);
        mob.Command("emote closes the binder.", 4.5);
        return true;
    }

    if (question.indexOf("snotty") >= 0) {
        mob.Command("emote is still for a moment.");
        mob.Command("say Donn Snotty's company wrote the regulation binder. The council did not vote on it.", 1.5);
        mob.Command("say I have been implementing regulations that the city did not choose. I am aware of this.", 2.5);
        mob.Command("emote glances at the face-down photograph.", 3.5);
        mob.Command("say I have been thinking about what to do about it.", 4.5);
        return true;
    }

    if (question.indexOf("jail") >= 0 || question.indexOf("prisoner") >= 0 || question.indexOf("cell") >= 0) {
        mob.Command("say The people in these cells dressed below the minimum in public areas.", 0.5);
        mob.Command("say They are free to leave when they demonstrate commitment to the minimum.", 1.5);
        mob.Command("emote looks at the cells.", 2.5);
        mob.Command("say The minimums have been raised four times this year. Each time, more people fall below them.", 3.5);
        mob.Command("say I did not write the minimums.", 4.5);
        return true;
    }

    if (question.indexOf("tass") >= 0) {
        mob.Command("emote is quiet.");
        mob.Command("say I used to go to the Jam Session. Before the regulations took up the evenings.", 1.5);
        mob.Command("say Tass is -- it is the reason this city is interesting.", 2.5);
        mob.Command("emote glances at the photograph again.", 3.5);
        mob.Command("say I have been thinking about that too.", 4.5);
        return true;
    }

    var defaults = [
        "say The regulations are in the binder. I implement what is in the binder.",
        "emote looks at you with the neutral assessment that has become their professional default.",
        "say What brings you to the jail? Not your outfit -- your outfit is acceptable."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}


function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0 || question.indexOf("history") >= 0) {
        mob.Command("say The Overlook was built in 1907. Four presidents have stayed here. Vanderbilts, Rockefellers — all the best people.");
        mob.Command("say It was built on an Indian burial ground, actually. They had to fight off a few Indian attacks while building it.");
        mob.Command("emote waves a hand dismissively.", 2.0);
        mob.Command("say But that's ancient history. The Overlook is one of the finest resort hotels in the world.", 3.5);
        return true;
    }

    if (question.indexOf("grady") >= 0 || question.indexOf("caretaker") >= 0 || question.indexOf("previous") >= 0) {
        mob.Command("say Grady. Yes. The previous winter caretaker.");
        mob.Command("emote clears his throat uncomfortably.");
        mob.Command("say He... well, he went a bit berserk. Killed his family and himself. Stacked them neatly in one of the rooms. Terrible business.", 2.0);
        mob.Command("say But this is a FINE hotel. These things happen in isolated environments. It's extremely rare.", 3.5);
        return true;
    }

    if (question.indexOf("winter") >= 0 || question.indexOf("isolation") >= 0 || question.indexOf("snow") >= 0 || question.indexOf("close") >= 0) {
        mob.Command("say The hotel closes in October. The roads close shortly after.");
        mob.Command("say Complete isolation for five months. Phone lines go down, roads impassable.");
        mob.Command("say It's quite... peaceful. So they tell me.", 2.0);
        return true;
    }

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0 || question.indexOf("position") >= 0 || question.indexOf("hire") >= 0) {
        mob.Command("say The caretaker position. Maintain the building through the winter. Check the boiler, prevent pipe freezing.");
        mob.Command("say Simple enough work. Plenty of time for personal projects.");
        mob.Command("emote shuffles papers on the desk.", 2.0);
        mob.Command("say I'm sure you'll do just fine.", 3.5);
        return true;
    }

    var defaults = [
        "say Is there anything else you need to know about the Overlook? It really is a marvelous property.",
        "emote adjusts his tie and smiles professionally.",
        "say The hotel practically runs itself. You'll barely need to lift a finger."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

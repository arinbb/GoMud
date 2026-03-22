
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drink") >= 0 || question.indexOf("bourbon") >= 0 || question.indexOf("beer") >= 0 || question.indexOf("whiskey") >= 0) {
        mob.Command("emote sets a glass of bourbon on the bar with a soft clink.");
        mob.Command("say Your money's no good here, Mr. Torrance. Orders from the house.");
        mob.Command("emote smiles pleasantly — too pleasantly.", 2.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0) {
        mob.Command("say The Overlook takes care of its own, sir.");
        mob.Command("say It always has.");
        mob.Command("emote polishes a glass that is already spotless.", 2.0);
        return true;
    }

    if (question.indexOf("party") >= 0 || question.indexOf("guests") >= 0 || question.indexOf("ball") >= 0) {
        mob.Command("say The party, sir? Oh, the party has been going on for a very long time.");
        mob.Command("emote gestures at the empty room, but somehow it doesn't feel empty.");
        mob.Command("say Some of these guests have been here since 1921.", 2.0);
        return true;
    }

    if (question.indexOf("jack") >= 0 || question.indexOf("torrance") >= 0) {
        mob.Command("say Mr. Torrance is a fine gentleman, sir. A fine gentleman indeed.");
        mob.Command("emote 's eyes glimmer with something cold.");
        mob.Command("say We've known each other for a very long time. A very long time.", 2.0);
        return true;
    }

    if (question.indexOf("grady") >= 0 || question.indexOf("caretaker") >= 0) {
        mob.Command("say Mr. Grady? Yes, he's about somewhere. The previous caretaker, you know.");
        mob.Command("say He corrected his daughters, sir. Corrected them very thoroughly.");
        mob.Command("emote 's smile doesn't waver.", 2.0);
        return true;
    }

    if (question.indexOf("women") >= 0 || question.indexOf("woman") >= 0 || question.indexOf("wife") >= 0 || question.indexOf("wendy") >= 0) {
        mob.Command("emote 's eyes go flat and cold.");
        mob.Command("say Women, sir, can be a terrible hindrance.");
        mob.Command("say A terrible hindrance indeed.", 2.0);
        return true;
    }

    var defaults = [
        "say What'll it be, sir? The bar is always open at the Overlook.",
        "emote smiles his perfect, pleasant, empty smile.",
        "say The Overlook is a fine establishment, sir. The finest."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

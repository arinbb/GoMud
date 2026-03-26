function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bass") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("emote looks at the bass guitar resting across her lap.");
        mob.Command("emote says nothing.");
        return true;
    }

    if (question.indexOf("today") >= 0 || question.indexOf("greatest") >= 0) {
        mob.Command("emote turns toward the window where the impossible sunshine of the Today room bleeds through.");
        mob.Command("say It is.");
        mob.Command("emote turns back to wherever she was looking before.", 2.0);
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("smashing") >= 0) {
        mob.Command("emote is quiet for a while.");
        mob.Command("say We are making something.");
        mob.Command("emote does not elaborate.", 2.0);
        return true;
    }

    var defaults = [
        "emote sits very still in the corner, the bass guitar untouched across her lap.",
        "emote looks somewhere past you, present but not present.",
        "say ..."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

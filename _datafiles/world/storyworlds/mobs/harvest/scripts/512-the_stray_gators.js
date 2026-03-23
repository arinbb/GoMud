
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pedal steel") >= 0 || question.indexOf("steel") >= 0 || question.indexOf("instrument") >= 0) {
        mob.Command("say The pedal steel is the loneliest instrument in American music.");
        mob.Command("emote bends the E string slowly, the note climbing and settling.", 2.0);
        mob.Command("say It bends toward things. That is what it does. It bends toward the note that is not quite there yet.");
        return true;
    }

    if (question.indexOf("neil") >= 0 || question.indexOf("session") >= 0 || question.indexOf("recording") >= 0) {
        mob.Command("say He knows what he wants before he can always say what he wants.");
        mob.Command("emote adjusts the volume pedal with one foot.", 1.5);
        mob.Command("say So you listen to the song and play what the song needs. Nashville guys know how to do that.");
        return true;
    }

    if (question.indexOf("harvest") >= 0 || question.indexOf("album") >= 0) {
        mob.Command("say Some of it we recorded here at the ranch. Some in Nashville. The London tracks he did without us.");
        mob.Command("say The barn sessions were the best.", 2.0);
        mob.Command("emote looks around at the barn approvingly.", 1.5);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("country") >= 0 || question.indexOf("ready") >= 0) {
        mob.Command("say That one is fun to play. Up-tempo. Straightforward. Let the band breathe.");
        mob.Command("emote plays the opening riff of the song, bright and forward.", 2.0);
        mob.Command("say You ready for the country? Then come on.");
        return true;
    }

    var defaults = [
        "say Ask us about the music. We are not much else when we are not playing.",
        "emote tunes the pedal steel, the string settling into pitch.",
        "say We are waiting for the next number. He will show up."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

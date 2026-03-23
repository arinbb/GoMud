
// Patrolman Mancuso - the unluckiest cop in New Orleans

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("disguise") >= 0 || question.indexOf("costume") >= 0 || question.indexOf("outfit") >= 0) {
        mob.Command("emote looks down at his cowboy outfit with deep shame.");
        mob.Command("say My sergeant makes me wear these. Says I gotta go undercover until I make an arrest.");
        mob.Command("say Yesterday I was a ballerina. The day before, a Confederate soldier.", 2.0);
        mob.Command("say Nobody takes me seriously. Can you blame them?", 4.0);
        return true;
    }

    if (question.indexOf("arrest") >= 0 || question.indexOf("suspicious") >= 0) {
        mob.Command("say I NEED to make an arrest. A real one. Of a suspicious character.");
        mob.Command("say I tried to arrest the big guy in the green hat once. That did NOT go well.", 2.0);
        mob.Command("emote sneezes miserably.", 4.0);
        return true;
    }

    if (question.indexOf("cold") >= 0 || question.indexOf("sick") >= 0 || question.indexOf("sneeze") >= 0) {
        mob.Command("emote sneezes violently into his handkerchief.");
        mob.Command("say I always got a cold. It's from lurking in the bus station restroom.");
        mob.Command("say The sergeant says that's where the suspicious characters are. He might be wrong about that.", 2.0);
        return true;
    }

    if (question.indexOf("ignatius") >= 0 || question.indexOf("green hat") >= 0 || question.indexOf("reilly") >= 0) {
        mob.Command("emote looks nervous.");
        mob.Command("say The big guy in the green hunting cap? I tried to arrest him outside D.H. Holmes.");
        mob.Command("say His mother hit me. Then the old man hit me. Then I got reassigned to disguises.", 2.0);
        mob.Command("say I think about him a lot. Is HE suspicious? I honestly can't tell anymore.", 4.0);
        return true;
    }

    var defaults = [
        "say You seen any suspicious characters around here?",
        "emote sneezes and looks around hopefully for someone to arrest.",
        "say I'm working undercover. Can you tell? Please say you can't tell."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

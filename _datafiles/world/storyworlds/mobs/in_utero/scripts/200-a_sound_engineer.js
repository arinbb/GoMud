
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("recording") >= 0 || question.indexOf("tape") >= 0 || question.indexOf("analog") >= 0) {
        mob.Command("say Analog tape. Two-inch reels. No computers. You record what the band sounds like in a room.");
        mob.Command("say That is the whole philosophy. Capture the room. Capture the moment. Do not fix it in post.");
        mob.Command("emote pats the tape machine like it is an old friend.", 2.0);
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("nirvana") >= 0) {
        mob.Command("say They know exactly what they want. Raw. Loud. Honest.");
        mob.Command("say The singer has a very clear vision. He does not want it to sound pretty. He wants it to sound true.");
        mob.Command("emote glances toward the live room.", 2.0);
        return true;
    }

    if (question.indexOf("album") >= 0) {
        mob.Command("say Recorded in two weeks. Mixed in one. That is how it should be done.");
        mob.Command("say You do not need six months and a hundred overdubs. You need a band, a room, and tape rolling.");
        return true;
    }

    if (question.indexOf("sound") >= 0 || question.indexOf("room") >= 0) {
        mob.Command("say The room is the instrument. The tape is the truth.");
        mob.Command("say This studio — the ceilings, the wood, the stone — it all becomes part of the recording.");
        mob.Command("say You cannot fake that with a computer.", 2.0);
        return true;
    }

    if (question.indexOf("digital") >= 0 || question.indexOf("computer") >= 0) {
        mob.Command("emote looks at you over his round glasses with undisguised disdain.");
        mob.Command("say Digital is a lie. A very clean, very precise lie. Tape is honest. Tape breathes.", 1.5);
        return true;
    }

    if (question.indexOf("royalt") >= 0 || question.indexOf("money") >= 0 || question.indexOf("pay") >= 0) {
        mob.Command("say I do not take royalties. Taking royalties from a band is an insult to the work.");
        mob.Command("say I get paid a flat rate. The music belongs to them. That is the deal.");
        return true;
    }

    var defaults = [
        "say Ask me about the recording, the band, or the sound. I do not have opinions about much else.",
        "say I am busy. But if you want to know about analog tape, I have all day.",
        "say The tape is rolling. Keep your voice down."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dana") >= 0 || question.indexOf("name") >= 0) {
        mob.Command("say There is no Dana.");
        mob.Command("emote 's eyes glow orange.");
        mob.Command("say There is only Zuul.", 2.0);
        return true;
    }

    if (question.indexOf("zuul") >= 0 || question.indexOf("gatekeeper") >= 0) {
        mob.Command("say I am the Gatekeeper.");
        mob.Command("emote speaks in a voice that is not entirely human.");
        mob.Command("say The Keymaster will come to me. The gate will open. Gozer the Gozerian will walk the earth.", 2.0);
        mob.Command("say This has been foretold.", 4.0);
        return true;
    }

    if (question.indexOf("gozer") >= 0) {
        mob.Command("say Gozer the Traveller will come in one of the pre-chosen forms.");
        mob.Command("emote regards you with amber eyes.");
        mob.Command("say During the rectification of the Vuldronaii the Traveller came as a large moving Torb!", 2.0);
        mob.Command("say Then of course in the third reconciliation of the last of the Meketrex Supplicants they chose a new form -- the Shubs and Zuulls knew what it was to be roasted in the depths of the Sloar that day I can tell you!", 3.5);
        return true;
    }

    if (question.indexOf("venkman") >= 0 || question.indexOf("peter") >= 0) {
        mob.Command("emote tilts her head.");
        mob.Command("say He comes. The one who seeks the Gatekeeper.");
        mob.Command("say He is persistent.", 2.0);
        mob.Command("emote 's expression shifts for just a moment -- warmer, more human -- and then goes distant again.", 4.0);
        return true;
    }

    mob.Command("emote 's eyes glow orange.");
    mob.Command("say The Gatekeeper does not answer questions. The Gatekeeper waits.");
    return true;
}


function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("design") >= 0 || question.indexOf("interior") >= 0 || question.indexOf("style") >= 0) {
        mob.Command("say Design isn't about decoration. It's about intention. Every object in a room must justify its existence.");
        mob.Command("emote adjusts his tinted glasses with a knowing look.");
        mob.Command("say I once convinced a client to remove every piece of furniture from their living room. Just a single orchid on a concrete pedestal. They wept. It was perfect.", 2.0);
        return true;
    }

    if (question.indexOf("seance") >= 0 || question.indexOf("occult") >= 0 || question.indexOf("supernatural") >= 0 || question.indexOf("spirit") >= 0 || question.indexOf("summon") >= 0) {
        mob.Command("say Oh, I dabble. I've attended several seances in the city. Very exclusive affairs.");
        mob.Command("say I know a few chants, a few rituals. One picks these things up in certain circles.");
        mob.Command("emote waves his hand airily, his silk scarf fluttering.", 2.0);
        mob.Command("say Of course, most people approach the supernatural with no finesse. No sense of style. If you're going to commune with the dead, at least set a proper table.", 3.5);
        return true;
    }

    if (question.indexOf("handbook") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("say The Handbook for the Recently Deceased? Yes, I've read it. Well, skimmed it. The gist of it.");
        mob.Command("say It's a fascinating text if you know how to read between the lines. Most people don't, of course.");
        mob.Command("emote polishes his tinted glasses on his silk scarf.", 2.0);
        mob.Command("say There are some rather potent incantations in the later chapters. Not that I would use them recklessly. I'm not an amateur.", 3.5);
        return true;
    }

    if (question.indexOf("ghost") >= 0 || question.indexOf("haunt") >= 0) {
        mob.Command("say Spirits are everywhere. You just have to know how to look.");
        mob.Command("say Most houses have some kind of residual energy. This one? Oh, this one is TEEMING with it.");
        mob.Command("say I sensed it the moment I walked through the door. Paranormal activity, strong presences, the works.", 2.0);
        mob.Command("emote taps his nose conspiratorially.", 3.5);
        return true;
    }

    if (question.indexOf("delia") >= 0) {
        mob.Command("say Delia is a true artist. One of the greats. Criminally underappreciated.");
        mob.Command("say Her sculptures have a raw, primal energy that most critics are simply too pedestrian to recognize.");
        mob.Command("say I've been nurturing her talent since we met at a gallery opening in SoHo. She was doing watercolors then. Watercolors! I saved her from that fate.", 2.0);
        return true;
    }

    mob.Command("say Hmm, I could tell you about design philosophy, the supernatural, or perhaps the handbook. One must stay informed.");
    return true;
}

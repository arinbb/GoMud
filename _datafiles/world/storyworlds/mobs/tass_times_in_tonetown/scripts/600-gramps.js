function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hoop") >= 0 || question.indexOf("portal") >= 0 || question.indexOf("build") >= 0) {
        mob.Command("emote sets down his papers and looks at you with the expression of someone who has been waiting to explain this.");
        mob.Command("say The hoop works on resonance. Every dimension has a boundary frequency. Match it, hold it, and the boundary opens.", 1.5);
        mob.Command("say I built the frame from iron because iron holds the frequency without degrading. Took me four years to get the calibration right.", 2.5);
        mob.Command("say I thought it was the discovery of the century. Franklin thought it was a business opportunity. That is where we diverged.", 3.5);
        return true;
    }

    if (question.indexOf("snotty") >= 0 || question.indexOf("franklin") >= 0 || question.indexOf("snarl") >= 0) {
        mob.Command("emote is quiet for a moment, looking at something you cannot see.");
        mob.Command("say He was my partner. Before all this. A good mind -- better than good. He understood the theory immediately.", 1.5);
        mob.Command("say He wanted to control access to Tonetown. License the hoop. Charge admission. Turn it into a product.", 2.5);
        mob.Command("say I said no. I said Tonetown was not something to be owned. He left the partnership and started Snotty Industries.", 3.5);
        mob.Command("emote is quiet again. The dungeon is very still.", 4.5);
        mob.Command("say I do not think he hates Tonetown. I think he is afraid of it. That is worse.", 5.5);
        return true;
    }

    if (question.indexOf("tonetown") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("emote looks up at the dungeon ceiling as if he can see through it.");
        mob.Command("say The first time I came through, I stood in the middle of downtown and just -- stopped.", 1.5);
        mob.Command("say Everything in the normal world tells you that being too colorful, too committed, too yourself is a problem.", 2.5);
        mob.Command("say Tonetown says the opposite. It says the failure mode is being less than you are. That was new to me.", 3.5);
        mob.Command("say I have been trying to protect it ever since. I am, from the dungeon, doing my best.", 4.5);
        return true;
    }

    if (question.indexOf("tass") >= 0 || question.indexOf("cool") >= 0 || question.indexOf("style") >= 0) {
        mob.Command("emote tilts his head.");
        mob.Command("say Tass is not fashion. Fashion changes. Tass is -- commitment. To being what you are, completely, without apology.", 1.5);
        mob.Command("say The clothes are just the visible part. The deep part is the decision to be interesting.", 2.5);
        mob.Command("say Snotty calls it a pathology. He is wrong. The pathology is the alternative.", 3.5);
        return true;
    }

    if (question.indexOf("device") >= 0 || question.indexOf("invent") >= 0 || question.indexOf("workshop") >= 0) {
        mob.Command("emote glances at his dungeon papers with something between pride and amusement.");
        mob.Command("say I have been building a second-generation hoop modulator. From whatever I could find in here.", 1.5);
        mob.Command("say The untass ray is just a resonance disruptor running in reverse. I can build a counter-device.", 2.5);
        mob.Command("say What I need is out of the cell. And access to my workshop. And about an hour.", 3.5);
        return true;
    }

    var defaults = [
        "say Ask me about the hoop, about Snotty, about Tonetown. I have been down here a while. I have things to say.",
        "emote looks at you over his dungeon papers with patient attention.",
        "say The bars are simple. I have been studying the lock. I could tell you the solution if you like."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("shades") >= 0 || showText.indexOf("sunglasses") >= 0) {
        mob.Command("emote looks at the sunglasses with recognition.");
        mob.Command("say Those are Tonetown shades. You got those from the market. You went to the market.", 1.5);
        mob.Command("emote smiles for the first time. It is a good smile.", 2.5);
        mob.Command("say That means you have been out there. You have seen it. Good. Then you understand what we are preserving.", 3.5);
        return true;
    }

    mob.Command("emote examines what you are showing with genuine scientific interest.");
    mob.Command("say Interesting. That is from Tonetown, I take it? Everything from Tonetown has a certain -- quality.", 1.5);
    return true;
}


// Bishop Love - the pursuer

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("gang") >= 0 || question.indexOf("hayduke") >= 0 || question.indexOf("criminals") >= 0) {
        mob.Command("emote does not lower his binoculars.");
        mob.Command("say Vandals. Criminals. Destroyers of property.", 1.5);
        mob.Command("say The law does not make exceptions for people who disagree with progress.", 3.0);
        mob.Command("say We will find them.", 4.0);
        return true;
    }

    if (question.indexOf("dam") >= 0 || question.indexOf("mine") >= 0 || question.indexOf("progress") >= 0) {
        mob.Command("say The dam provides water and power for half a million people.", 1.0);
        mob.Command("say The mine employs two hundred families.", 2.0);
        mob.Command("say These are not abstractions. These are my people.", 3.0);
        return true;
    }

    if (question.indexOf("desert") >= 0 || question.indexOf("canyon") >= 0 || question.indexOf("land") >= 0) {
        mob.Command("emote finally lowers his binoculars and looks at you.");
        mob.Command("say I was born here. My father was born here. His father before him.", 1.5);
        mob.Command("say I love this land. I love it different than they do. That does not make my love wrong.", 3.0);
        mob.Command("emote raises his binoculars again.", 4.5);
        return true;
    }

    if (question.indexOf("church") >= 0 || question.indexOf("bishop") >= 0 || question.indexOf("mormon") >= 0) {
        mob.Command("say The Church asks us to be good stewards of the land.", 1.0);
        mob.Command("say It also asks us to be law-abiding citizens.", 2.0);
        mob.Command("say I am both.", 2.5);
        return true;
    }

    var defaults = [
        "say I am busy.",
        "emote sweeps his binoculars across the canyon rim without answering.",
        "say Make yourself useful or stand clear."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}


function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("raptor") >= 0 || question.indexOf("velociraptor") >= 0 || question.indexOf("clever") >= 0) {
        mob.Command("emote is very still for a moment before responding.");
        mob.Command("say Clever girl.", 1.5);
        mob.Command("emote says it the way you'd say the name of something you respect and fear equally.", 2.5);
        mob.Command("say They test the fence every day. Probing. Looking for weaknesses. Coordinating. Three animals working together on a structural engineering problem. They're faster than you think. Don't let anyone tell you otherwise.", 4.0);
        return true;
    }

    if (question.indexOf("danger") >= 0 || question.indexOf("threat") >= 0 || question.indexOf("worst") >= 0) {
        mob.Command("say The raptors. Without question. The T. Rex is dangerous, yes. But the T. Rex is dangerous in an honest way — it's large, it's in front of you, you know what you're dealing with.");
        mob.Command("emote shakes his head slowly.", 2.0);
        mob.Command("say The raptors understand concepts like flanking. Like distraction. Like sending one animal to draw your attention while two more come from the sides.", 4.0);
        return true;
    }

    if (question.indexOf("park") >= 0 || question.indexOf("work") >= 0 || question.indexOf("hammond") >= 0) {
        mob.Command("say I keep the animals from killing people. That's the job.");
        mob.Command("emote says this without bitterness, just precision.", 1.5);
        mob.Command("say Hammond builds the park. Wu breeds the animals. Arnold runs the systems. I'm the part that goes between the animals and the people when the other parts stop working.", 3.5);
        return true;
    }

    if (question.indexOf("t.rex") >= 0 || question.indexOf("trex") >= 0 || question.indexOf("tyrannosaurus") >= 0) {
        mob.Command("say The Rex is a problem. But it's a problem you can see coming. Literally — you feel it approach before you hear it, and you hear it before you see it.");
        mob.Command("emote almost smiles.", 2.0);
        mob.Command("say Don't move when it's close. It hunts by movement. If it's right on you and you stay still... you have a chance. A small chance.", 3.5);
        return true;
    }

    if (question.indexOf("gun") >= 0 || question.indexOf("weapon") >= 0 || question.indexOf("shoot") >= 0) {
        mob.Command("say SPAS-12. Sabot rounds. Takes two hits to bring a raptor down if you hit right, three or four if you don't.");
        mob.Command("emote checks the weapon almost unconsciously.", 2.0);
        mob.Command("say The problem is that by the time you have a clear shot, there's usually a second one you haven't seen.", 3.5);
        return true;
    }

    var defaults = [
        "say Eyes open. Always eyes open.",
        "say I've done this for thirty years. This island is different.",
        "say Ask me about the raptors. I know the raptors."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it briefly without taking his eyes off the pen for long.");
    mob.Command("say Whatever it is, keep it away from the fence.");
    return true;
}

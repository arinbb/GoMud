
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("plant") >= 0 || question.indexOf("botany") >= 0 || question.indexOf("fern") >= 0 || question.indexOf("flora") >= 0) {
        mob.Command("say The paleobotany here is — honestly, it's extraordinary. Species that haven't existed since the Cretaceous. The spore distribution is wrong for this climate but the plants are thriving.");
        mob.Command("emote holds up a frond to the light to examine it.", 2.0);
        mob.Command("say There are things about how these plants work that don't fit our models. Alan would say 'there it is again' — the world not matching the textbook.", 3.5);
        return true;
    }

    if (question.indexOf("dinosaur") >= 0 || question.indexOf("animal") >= 0) {
        mob.Command("say I'm a botanist. The animals are Alan's department.");
        mob.Command("emote pauses.", 1.5);
        mob.Command("say Though the Brachiosaurus interaction with the plant life here is — the grazing patterns are affecting the ecosystem in ways that took millions of years to develop. And they're replicating it in three years. That's astonishing.", 3.0);
        return true;
    }

    if (question.indexOf("grant") >= 0 || question.indexOf("alan") >= 0) {
        mob.Command("say Alan is the best paleontologist I know. He's also terrible at admitting when something surprises him.");
        mob.Command("emote almost smiles.", 1.5);
        mob.Command("say He's out there somewhere doing fieldwork in the middle of a crisis. Because that's what he does. He turns everything into fieldwork.", 3.0);
        return true;
    }

    if (question.indexOf("hammond") >= 0 || question.indexOf("park") >= 0) {
        mob.Command("say He invited us here because he wanted scientific validation. He got it — and he got the critique that came with it.");
        mob.Command("emote looks around the lab efficiently.", 1.5);
        mob.Command("say The critique was correct. Doesn't mean the science isn't extraordinary. Both things are true.", 3.0);
        return true;
    }

    if (question.indexOf("danger") >= 0 || question.indexOf("safe") >= 0 || question.indexOf("okay") >= 0) {
        mob.Command("emote turns to face you directly.");
        mob.Command("say No. We're not safe. The systems are failing and the animals are loose.", 1.5);
        mob.Command("say But we're working on it. I'm working on it. We will get everyone out.", 3.0);
        return true;
    }

    var defaults = [
        "say I need to identify three more plant species before I lose the light.",
        "say The island has things in it that have no business existing. I mean that as a compliment.",
        "say Ask me about something specific. I work better with specifics."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

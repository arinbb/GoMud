
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dinosaur") >= 0 || question.indexOf("fossil") >= 0 || question.indexOf("paleontology") >= 0) {
        mob.Command("say The thing people don't understand about dinosaurs — the thing the museum mounts and the drawings never convey — is that they were alive. Dynamic. Social. They had behavior.");
        mob.Command("emote stares into the distance with the intensity of someone still solving a forty-year problem.", 1.5);
        mob.Command("say We've been wrong about them for a hundred years. This island proves it. All of it wrong. The posture, the metabolism, the social structure. Everything.", 3.0);
        return true;
    }

    if (question.indexOf("raptor") >= 0 || question.indexOf("velociraptor") >= 0) {
        mob.Command("emote goes still in a way that is not casual.");
        mob.Command("say Velociraptor. Pack hunters. Six feet at the hip. They have, as best we can tell, an intelligence roughly comparable to a chimpanzee.", 1.5);
        mob.Command("say A chimpanzee that weighs one hundred sixty pounds and can run twelve meters a second.", 3.0);
        mob.Command("emote adjusts his hat down over his eyes.", 4.5);
        return true;
    }

    if (question.indexOf("hammond") >= 0) {
        mob.Command("emote takes his hat off and turns it in his hands for a moment.");
        mob.Command("say John Hammond. He's not a bad man. He genuinely believes in what he built here.", 1.5);
        mob.Command("say He wanted to give people something they couldn't get anywhere else. Wonder. Real wonder.", 3.0);
        mob.Command("say He just didn't listen to the part where we said he wasn't ready.", 4.5);
        return true;
    }

    if (question.indexOf("park") >= 0 || question.indexOf("jurassic") >= 0) {
        mob.Command("say A theme park. Built on a foundation of legitimate scientific miracle.");
        mob.Command("emote exhales slowly.", 1.5);
        mob.Command("say The science is real. Everything we hoped it could be. The park was the wrong frame for it. You don't put this in a cage and charge admission.", 3.0);
        return true;
    }

    if (question.indexOf("computer") >= 0 || question.indexOf("technology") >= 0) {
        mob.Command("emote waves a dismissive hand.");
        mob.Command("say I'm a bones and dirt man. Always have been.", 1.5);
        mob.Command("say Ellie's better with the technical side. I prefer things that are already dead when I study them.", 3.0);
        return true;
    }

    if (question.indexOf("children") >= 0 || question.indexOf("kids") >= 0 || question.indexOf("tim") >= 0 || question.indexOf("lex") >= 0) {
        mob.Command("emote sets his jaw.");
        mob.Command("say They're good kids. They're going to be fine.", 1.5);
        mob.Command("emote says this like a man convincing himself, which he is.", 3.0);
        return true;
    }

    var defaults = [
        "say Ask me about the dinosaurs. I know the dinosaurs.",
        "say I've been waiting my whole career for something like this. The timing is not ideal.",
        "say Some scientific discoveries don't wait for a good time."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("amber") >= 0 || showText.indexOf("mosquito") >= 0) {
        mob.Command("emote takes the amber specimen and holds it up to the light carefully.");
        mob.Command("say This is how it started. A six-million-dollar piece of tree sap.", 1.5);
        mob.Command("say There's a dinosaur in this room because of what's preserved in this amber. That's still extraordinary. Despite everything, still extraordinary.", 3.0);
        return true;
    }

    mob.Command("emote examines it with professional interest.");
    mob.Command("say Interesting. What's the context?");
    return true;
}

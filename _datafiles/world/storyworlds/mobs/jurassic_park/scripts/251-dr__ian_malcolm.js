
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("chaos") >= 0 || question.indexOf("theory") >= 0 || question.indexOf("mathematics") >= 0) {
        mob.Command("say Chaos theory. Nonlinear dynamics. The study of complex systems.");
        mob.Command("emote shifts uncomfortably and keeps talking with the momentum of a man who cannot stop.", 1.5);
        mob.Command("say The essential point is that complex systems cannot be controlled. You can manage them, briefly. You can influence them. But control is an illusion that complex systems tolerate only temporarily.", 3.0);
        mob.Command("say Hammond thought he was controlling dinosaurs. He was managing them. Very different.", 4.5);
        return true;
    }

    if (question.indexOf("life") >= 0 || question.indexOf("finds") >= 0 || question.indexOf("way") >= 0) {
        mob.Command("emote looks at you with the patient expression of a man who has said this before and will say it again.");
        mob.Command("say Life, uh... finds a way.", 1.5);
        mob.Command("say This isn't optimism. It's a mathematical observation. Life is a process of extraordinary complexity and resilience. It finds equilibria in unexpected places. It does not stay where you put it.", 3.5);
        return true;
    }

    if (question.indexOf("nature") >= 0 || question.indexOf("planet") >= 0 || question.indexOf("earth") >= 0) {
        mob.Command("say Your scientists were so preoccupied with whether or not they could that they didn't stop to think if they should.");
        mob.Command("emote gestures expansively despite the pain this causes.", 2.0);
        mob.Command("say The planet has been here four and a half billion years. We've been here what, a hundred thousand? The planet is not in danger. We are.", 4.0);
        return true;
    }

    if (question.indexOf("park") >= 0 || question.indexOf("hammond") >= 0 || question.indexOf("predict") >= 0) {
        mob.Command("say I said this. I want to be clear — I said this before we landed. I have it on record.");
        mob.Command("emote winces at a particular configuration of his injured leg.", 1.5);
        mob.Command("say A theme park is a controlled environment. Chaos theory predicts that controlled environments containing complex adaptive systems will fail. The dinosaurs are complex adaptive systems. The math was never ambiguous.", 3.5);
        return true;
    }

    if (question.indexOf("hurt") >= 0 || question.indexOf("leg") >= 0 || question.indexOf("injury") >= 0 || question.indexOf("okay") >= 0) {
        mob.Command("emote considers the leg with a certain detached intellectual interest.");
        mob.Command("say I've been better. The interesting thing is that the pain itself follows a nonlinear pattern — it comes in waves, each one with a different character.", 1.5);
        mob.Command("say Ellie's concerned. She's right to be concerned. I'm choosing to analyze it rather than panic about it. It's a coping mechanism.", 3.5);
        return true;
    }

    if (question.indexOf("dinosaur") >= 0) {
        mob.Command("say Magnificent. Genuinely magnificent. I want to be clear that my objection is entirely to this specific delivery mechanism.");
        mob.Command("emote makes a pained gesture at the building around them.", 2.0);
        mob.Command("say The organisms themselves are extraordinary. Evolution does extraordinary things given enough time. Sixty-five million years is enough time.", 3.5);
        return true;
    }

    var defaults = [
        "say The system is failing in the ways I predicted. I take no pleasure in this.",
        "say Ask me about chaos. I know chaos. In this situation, I know it very well.",
        "say Life finds a way. Every time. The question is whether you're still alive to appreciate it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("amber") >= 0 || showText.indexOf("mosquito") >= 0) {
        mob.Command("emote studies the amber with careful attention despite his pain.");
        mob.Command("say A forty-million-year-old system, preserved in resin. And someone extracted the data from it and rebuilt the process from scratch.", 1.5);
        mob.Command("say The science is genuine. The hubris is also genuine. Both things are true simultaneously.", 3.0);
        return true;
    }

    mob.Command("emote takes it, examines it, hands it back.");
    mob.Command("say Systems within systems. Everything interesting works that way.");
    return true;
}

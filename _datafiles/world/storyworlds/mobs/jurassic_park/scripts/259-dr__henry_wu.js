
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dna") >= 0 || question.indexOf("gene") >= 0 || question.indexOf("genetics") >= 0 || question.indexOf("clone") >= 0) {
        mob.Command("say The extraction process is mature. The sequencing has been stable for three generations. The modifications are delivering within expected parameters.");
        mob.Command("emote makes a small annotation on his clipboard.", 2.0);
        mob.Command("say The original work was extraordinary — genuinely extraordinary. The subsequent refinements are mine.", 3.5);
        return true;
    }

    if (question.indexOf("frog") >= 0 || question.indexOf("gap") >= 0 || question.indexOf("fill") >= 0 || question.indexOf("incomplete") >= 0) {
        mob.Command("say The gap sequences are a known issue. We fill them with compatible DNA from extant species.");
        mob.Command("emote is completely matter-of-fact about this.", 1.5);
        mob.Command("say The frog DNA was a practical solution to a practical problem. The results are viable. The animals live and reproduce. The solution works.", 3.0);
        mob.Command("say The implications of the frog DNA are something I am... monitoring.", 4.5);
        return true;
    }

    if (question.indexOf("breeding") >= 0 || question.indexOf("reproduce") >= 0 || question.indexOf("gender") >= 0) {
        mob.Command("say All animals on the island were engineered to be female. A controlled, all-female population cannot breed.");
        mob.Command("emote pauses almost imperceptibly.", 1.5);
        mob.Command("say Life, as Dr. Malcolm would say, finds a way. We're examining some anomalies in the population data.", 3.0);
        return true;
    }

    if (question.indexOf("species") >= 0 || question.indexOf("how many") >= 0) {
        mob.Command("say Fourteen species in active production. Eight on the public tour route.");
        mob.Command("emote looks at you steadily.", 1.5);
        mob.Command("say The developmental specimens are a separate program. The park's operation doesn't require public disclosure of the full research scope.", 3.0);
        return true;
    }

    if (question.indexOf("hammond") >= 0) {
        mob.Command("say Mr. Hammond provided the resources and the vision. I provided the methodology.");
        mob.Command("emote says this with precise neutrality.", 1.5);
        mob.Command("say The park as it exists is the result of my work. I take responsibility for it accordingly.", 3.0);
        return true;
    }

    var defaults = [
        "say The science is sound. The application raised issues outside the scientific domain.",
        "say I designed them. I know them. Ask me something specific.",
        "say Every system here works within my specifications. Some of the systems interacted in ways I hadn't fully modeled."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

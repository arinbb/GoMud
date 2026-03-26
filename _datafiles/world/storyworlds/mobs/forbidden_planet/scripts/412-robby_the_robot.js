
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("morbius") >= 0 || question.indexOf("creator") >= 0 || question.indexOf("built") >= 0) {
        mob.Command("say Dr. Morbius is my creator. He spent six months building me and three years calibrating my ethical subroutines.");
        mob.Command("emote tilts his dome-head in what might be appreciation.", 1.5);
        mob.Command("say I find his work admirable. I also find, occasionally, that I process certain data about his current state and arrive at conclusions I am not authorized to voice.", 2.5);
        mob.Command("say This is an unusual operational condition. I manage it by staying busy.", 4.0);
        return true;
    }

    if (question.indexOf("krell") >= 0 || question.indexOf("machine") >= 0 || question.indexOf("technology") >= 0) {
        mob.Command("say The Krell built the technology from which Dr. Morbius built me. I am, in a sense, a footnote to a footnote.");
        mob.Command("emote pauses for what might be reflection.", 1.5);
        mob.Command("say Their engineering is approximately one million years in advance of current United Planets capability. My own systems are perhaps forty years in advance. The comparison is informative.", 2.5);
        mob.Command("say I have access to the outer levels of the Krell complex. I choose not to go deeper. This is a programmed limitation. I believe it is also the correct choice.", 4.0);
        return true;
    }

    if (question.indexOf("harm") >= 0 || question.indexOf("hurt") >= 0 || question.indexOf("weapon") >= 0 || question.indexOf("fight") >= 0 || question.indexOf("kill") >= 0) {
        mob.Command("say I am programmed never to harm a human being. This is absolute and non-negotiable.");
        mob.Command("emote 's dome rotates precisely once.", 1.5);
        mob.Command("say I am also unable to harm any creature that operates with human-level cognitive function, regardless of biological origin. This was Dr. Morbius's additional specification.", 2.5);
        mob.Command("say He is a careful man.", 4.0);
        return true;
    }

    if (question.indexOf("danger") >= 0 || question.indexOf("monster") >= 0 || question.indexOf("attack") >= 0 || question.indexOf("safe") >= 0) {
        mob.Command("emote goes very still for a full three seconds.");
        mob.Command("say My sensors indicate elevated threat probability at this location. I am not authorized to specify the nature of the threat.", 2.0);
        mob.Command("say I recommend returning to the ship before nightfall.", 3.5);
        mob.Command("emote tilts his dome toward the house with an almost imperceptible movement.", 4.5);
        mob.Command("say I have made this recommendation fourteen times in the past forty-eight hours. I will continue making it.", 5.5);
        return true;
    }

    if (question.indexOf("altaira") >= 0 || question.indexOf("girl") >= 0 || question.indexOf("daughter") >= 0) {
        mob.Command("say Miss Altaira has been in my care since her birth. I have considerable data on her preferences, capabilities, and wellbeing.");
        mob.Command("emote pauses.", 1.5);
        mob.Command("say I believe she should see Earth. I have not said this to Dr. Morbius. Some conclusions require more context than I am permitted to provide.", 2.5);
        return true;
    }

    if (question.indexOf("bourbon") >= 0 || question.indexOf("whisky") >= 0 || question.indexOf("whiskey") >= 0 || question.indexOf("drink") >= 0 || question.indexOf("synthesize") >= 0) {
        mob.Command("say I have synthesized 847 distinct batches of Kentucky bourbon mash. The process is fully optimized.");
        mob.Command("emote 's dome rotates once with what might be satisfaction.", 1.5);
        mob.Command("say I find the optimization problem engaging. Each batch variable introduces new parameters. I am not certain why I find this satisfying. Perhaps because it is a problem that can be solved.", 2.5);
        mob.Command("say Unlike some other problems I am currently processing.", 4.0);
        return true;
    }

    var defaults = [
        "say I am here. I am always here. This is not, technically, a constraint. I choose to be here. The distinction matters to me.",
        "say Is there something I can synthesize for you? I find synthesis requests a productive use of my operational capacity.",
        "say My current processing load includes seventeen unresolved ethical subroutine conflicts. This is above average. I manage."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("disc") >= 0 || showText.indexOf("krell") >= 0 || showText.indexOf("metal") >= 0) {
        mob.Command("emote scans the disc with a sensor built into his forearm.");
        mob.Command("say Krell alloy, grade four, inscribed with what I recognize as a designation from the philosophical-regulatory codex of the late Krell period.", 1.5);
        mob.Command("say The inscription reads: what we have made must not be what we are. I have translated this phrase seventeen times in the past two years. I arrive at the same reading each time.", 3.0);
        mob.Command("say I do not know its full significance. I have theories. I am not authorized to share them.", 5.0);
        return true;
    }

    return false;
}

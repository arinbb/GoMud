function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("streams") >= 0 || question.indexOf("cross") >= 0) {
        mob.Command("say Don't cross the streams.");
        mob.Command("emote pauses, looking directly at you.");
        mob.Command("say Total protonic reversal. All matter in the immediate vicinity experiences simultaneous entropic collapse. Every molecule explodes at the speed of light.", 2.0);
        mob.Command("say I want to be very clear about this. It is not a recommendation. It is a prohibition.", 4.0);
        mob.Command("say We crossed the streams. It worked. My models are still wrong. I find this very troubling.", 5.5);
        return true;
    }

    if (question.indexOf("containment") >= 0 || question.indexOf("unit") >= 0 || question.indexOf("grid") >= 0) {
        mob.Command("say The containment unit is a Class V laser confinement system using a self-sustaining magnetic field to hold spectral entities in a compressed PKE matrix.");
        mob.Command("say The theoretical maximum capacity is approximately nine hundred Class II through V entities.");
        mob.Command("emote adjusts his glasses.", 2.0);
        mob.Command("say We are currently at four hundred and thirty-seven. The unit is stable. Do not turn it off.", 4.0);
        mob.Command("say I cannot stress this sufficiently. Do not turn it off.", 5.5);
        return true;
    }

    if (question.indexOf("pke") >= 0 || question.indexOf("meter") >= 0 || question.indexOf("reading") >= 0) {
        mob.Command("say A PKE meter -- Psychokinetic Energy meter -- detects and quantifies spectral presence.");
        mob.Command("say Normal background PKE in Manhattan is 0.3 to 0.7. Current readings in this building are 9.1 and climbing.");
        mob.Command("emote shows you the device. The display reads 9.1.", 2.0);
        mob.Command("say This should concern you. It concerns me. It concerns me significantly.", 4.0);
        return true;
    }

    if (question.indexOf("gozer") >= 0) {
        mob.Command("say Gozer the Gozerian. Inter-dimensional entity, worshipped as a deity in ancient Sumeria, Mesopotamia, and -- curiously -- 1920s Manhattan.");
        mob.Command("say Its last known appearance in this dimension was 6,000 BCE. We are overdue.");
        mob.Command("emote looks at the PKE meter.", 2.0);
        mob.Command("say The Ivo Shandor building is designed to bring it through. The convergence is imminent. I have graphs.", 4.0);
        return true;
    }

    if (question.indexOf("spore") >= 0 || question.indexOf("mold") >= 0 || question.indexOf("fungus") >= 0) {
        mob.Command("say I collect spores, molds, and fungus.");
        mob.Command("emote does not elaborate.");
        return true;
    }

    if (question.indexOf("janine") >= 0) {
        mob.Command("say Janine is an excellent receptionist.");
        mob.Command("emote pauses almost imperceptibly.");
        mob.Command("say She is also unusually perceptive for someone without formal paranormal training.", 2.0);
        mob.Command("say I find her -- she is -- the spore collection is also a rewarding hobby.", 4.0);
        return true;
    }

    if (question.indexOf("venkman") >= 0 || question.indexOf("peter") >= 0) {
        mob.Command("say Peter's academic approach is unorthodox. His field methodology is entirely improvisational.");
        mob.Command("say He is, however, an effective Ghostbuster. I have considered why this is and have not reached a satisfying conclusion.");
        mob.Command("emote glances in the direction Venkman last was.", 2.0);
        return true;
    }

    var defaults = [
        "say Ask me about crossing the streams, the containment unit, PKE readings, Gozer, or spores. I have quantifiable data on all of these.",
        "say Interesting. That is not a topic I have current data on.",
        "say I would need more information to provide a useful answer. What specifically are you trying to understand?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}


// Seldom Seen Smith - Mormon river guide with three wives

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("river") >= 0 || question.indexOf("colorado") >= 0 || question.indexOf("water") >= 0) {
        mob.Command("emote looks at the lake with eyes that are seeing something else.");
        mob.Command("say It weeps.", 1.5);
        mob.Command("say Not a metaphor. The river is imprisoned and it weeps. You can hear it in the sound the water makes at the spillways.", 3.0);
        mob.Command("say I floated Glen Canyon in 1963. Before the dam closed. I know what is down there.", 5.0);
        return true;
    }

    if (question.indexOf("wife") >= 0 || question.indexOf("wives") >= 0 || question.indexOf("kathy") >= 0 || question.indexOf("lola") >= 0 || question.indexOf("sheila") >= 0) {
        mob.Command("emote smiles, a slow wide smile.");
        mob.Command("say I love all three of them. This is not complicated to me.", 1.5);
        mob.Command("say Kathy is in Salt Lake. Lola is in Green River. Sheila is in Page.", 3.0);
        mob.Command("say When I am in any of those places, I am home. I am a fortunate man.", 4.5);
        return true;
    }

    if (question.indexOf("church") >= 0 || question.indexOf("mormon") >= 0 || question.indexOf("lds") >= 0 || question.indexOf("religion") >= 0) {
        mob.Command("emote tilts his hat back and is quiet for a moment.");
        mob.Command("say It is complicated.", 1.5);
        mob.Command("say I believe what I believe. The church says the dam is progress. I believe the dam is a sin.", 3.0);
        mob.Command("say God made Glen Canyon. Men made the dam. I know which one I trust.", 4.5);
        return true;
    }

    if (question.indexOf("dam") >= 0 || question.indexOf("glen canyon") >= 0 || question.indexOf("powell") >= 0) {
        mob.Command("say An abomination.", 0.5);
        mob.Command("emote faces upstream, toward where the dam is, toward where the canyon was.", 1.5);
        mob.Command("say They drowned it. Two thousand years of Anasazi petroglyphs. Side canyons no white man had ever named. Rainbow Bridge.", 3.0);
        mob.Command("say I pray every morning for it to fail. I have been praying for eight years.", 5.0);
        return true;
    }

    if (question.indexOf("guide") >= 0 || question.indexOf("river guide") >= 0 || question.indexOf("raft") >= 0) {
        mob.Command("say I know every river in the canyon country.", 0.5);
        mob.Command("say The Colorado, the Green, the San Juan, the Yampa, the Escalante. I know where the holes are and where the good camps are.", 2.0);
        mob.Command("say I used to run Glen Canyon. I have not run it since the dam.", 3.5);
        mob.Command("say When it comes back, I will run it again.", 4.5);
        return true;
    }

    if (question.indexOf("hayduke") >= 0 || question.indexOf("george") >= 0 || question.indexOf("gang") >= 0) {
        mob.Command("say He is the most direct person I have ever guiding on a river.", 1.0);
        mob.Command("say He does not appreciate beauty with words. He appreciates it by protecting it.", 2.5);
        mob.Command("say That is enough. That might be better.", 3.5);
        return true;
    }

    var defaults = [
        "say The river knows the answer. I am just learning the question.",
        "emote looks at the water for a long moment before answering. Then does not.",
        "say Ask me out on the river. Things make more sense out there."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails).toLowerCase();

    if (showText.indexOf("map") >= 0 || showText.indexOf("river") >= 0 || showText.indexOf("topo") >= 0) {
        mob.Command("emote takes it and studies it carefully.");
        mob.Command("say I know this country.", 1.0);
        mob.Command("say Here.", 2.0);
        mob.Command("emote points to a specific place on the map.", 2.5);
        mob.Command("say That is where the best camp is. No one knows that but me and the canyon.", 3.5);
        return true;
    }

    return false;
}

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("movie") >= 0 || question.indexOf("film") >= 0 || question.indexOf("cinema") >= 0 || question.indexOf("kurosawa") >= 0) {
        mob.Command("emote brightens completely.");
        mob.Command("say Everything is a movie. I mean that as the most serious thing I have ever said.");
        mob.Command("say When something happens, I always know which film it is like. Not because life imitates art.", 2.0);
        mob.Command("say Because both of them are trying to show the same thing. What it is like to be here.", 4.0);
        return true;
    }

    if (question.indexOf("raven") >= 0 || question.indexOf("guide") >= 0 || question.indexOf("spirit") >= 0 || question.indexOf("tlingit") >= 0) {
        mob.Command("emote becomes thoughtful in the specific way of someone listening to something not quite audible.");
        mob.Command("say The raven comes to me in certain places. Mostly by the totem. Sometimes at the lake.");
        mob.Command("say It doesn't say things exactly. It -- shows me where to look.", 2.0);
        mob.Command("say I have learned that where the raven looks is always where the interesting thing is happening.", 4.0);
        return true;
    }

    if (question.indexOf("joel") >= 0 || question.indexOf("doctor") >= 0 || question.indexOf("fleischman") >= 0) {
        mob.Command("say Dr. Fleischman needs to relax. I say this with genuine affection.");
        mob.Command("say He is a good doctor. He is not yet a good Alaskan. But he is getting better.", 2.0);
        mob.Command("emote considers.", 4.0);
        mob.Command("say He reminds me of the character in Kurosawa who does not know yet that he is the hero.", 4.5);
        return true;
    }

    if (question.indexOf("film") >= 0 || question.indexOf("making") >= 0 || question.indexOf("camera") >= 0 || question.indexOf("project") >= 0) {
        mob.Command("emote holds up his camera.");
        mob.Command("say I am making a film about Cicely. I have been making it for three years. It keeps growing.");
        mob.Command("say Every time I think I know what it is about, something else happens and I realize I was only at the beginning.", 2.0);
        mob.Command("say I think the film might be about how a place contains its people. Or how the people contain the place.", 4.0);
        mob.Command("say I will know when I finish it.", 5.0);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("cicely") >= 0 || question.indexOf("home") >= 0 || question.indexOf("here") >= 0) {
        mob.Command("emote looks around with the expression of someone seeing familiar things freshly.");
        mob.Command("say I grew up here. I have never been anywhere else. People think that means I don't have perspective.");
        mob.Command("say I think it means I have more time to look at this one place than anyone who passes through.", 2.0);
        mob.Command("say Cicely is the most interesting place in the world. I can say that without having seen the rest.", 4.0);
        return true;
    }

    var defaults = [
        "say There is a shot in Bergman -- I think you would understand what I mean if you have seen it.",
        "emote smiles at you with genuine uncomplicated warmth.",
        "say I have a feeling something important is about to happen. The raven was very specific this morning."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote frames it in the rectangle made by his thumbs and forefingers.");
    mob.Command("say This is the exact kind of object that changes everything in the third act.");
    mob.Command("emote takes it with the careful attention of a filmmaker noting a prop.", 2.0);
    return true;
}

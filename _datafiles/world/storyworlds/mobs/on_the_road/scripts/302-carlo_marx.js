
// Carlo Marx - the poet, the visionary, based on Allen Ginsberg

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("poem") >= 0 || question.indexOf("poetry") >= 0 || question.indexOf("howl") >= 0 || question.indexOf("writing") >= 0) {
        mob.Command("emote draws himself up with visionary intensity.");
        mob.Command("say I am writing it now. All of it. The whole America, the mad America, the holy starving naked America of the 3am streets and the jazz clubs and the bus stations and the diner at the edge of everything.", 1.5);
        mob.Command("say It will be long. It will be a howl. It will be everything I have ever seen given back to the sky in one enormous breath.", 3.5);
        mob.Command("emote scribbles three lines and crosses out two of them.", 5.0);
        return true;
    }

    if (question.indexOf("america") >= 0 || question.indexOf("country") >= 0 || question.indexOf("nation") >= 0) {
        mob.Command("emote spreads his arms wide.");
        mob.Command("say America! I love you and you terrify me and you are the most magnificent disaster the world has ever produced! Your roads are a poem! Your bus stations are a poem! Your 3am diners are the most American poem of all!", 1.5);
        mob.Command("say We are the best minds of our generation and we are out here on the streets and the roads and in the jazz clubs and we are going to write it all down before it disappears!", 3.5);
        return true;
    }

    if (question.indexOf("dean") >= 0 || question.indexOf("sal") >= 0) {
        mob.Command("emote looks in the direction they went with an expression of complicated affection.");
        mob.Command("say Dean burns. Sal watches. I am the one who understands what the burning means and writes it into language. We need each other. We are a machine for producing one book.", 1.5);
        mob.Command("say Dean would disagree. Dean disagrees with everything except the road.", 3.0);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("vision") >= 0 || question.indexOf("holy") >= 0) {
        mob.Command("emote stares at the sky with fierce intelligence.");
        mob.Command("say God is the jazz. God is the road at night. God is the saxophonist playing past midnight past notes past music into something that does not have a name yet but will.", 1.5);
        mob.Command("say I have had visions. In Harlem, on the road, in Denver. The visions say: Pay attention. Write it down. Give it back.", 3.0);
        return true;
    }

    var defaults = [
        "say Who are these people and why are they not writing poems about the situation?",
        "emote recites a fragment that turns into three fragments that turn into something like a manifesto.",
        "say The night is full of signals. Are you receiving?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

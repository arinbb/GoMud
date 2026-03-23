
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("krell") >= 0 || question.indexOf("civilization") >= 0 || question.indexOf("ancient") >= 0) {
        mob.Command("emote pauses and his expression shifts -- the careful host giving way to the genuine scholar.");
        mob.Command("say The Krell. A million years before us, Commander. Think what that means.");
        mob.Command("say They solved every problem we still struggle with. Disease. Poverty. Violence. They left this world and did not look back.", 2.0);
        mob.Command("emote moves to a Krell artifact and rests one hand on it.", 3.5);
        mob.Command("say In one day -- one day -- they advanced beyond everything our civilization knows. And then they were gone.", 4.5);
        mob.Command("emote looks away. Something in his expression is pain, is guilt, is something else.", 5.5);
        return true;
    }

    if (question.indexOf("colony") >= 0 || question.indexOf("died") >= 0 || question.indexOf("death") >= 0 || question.indexOf("dead") >= 0 || question.indexOf("survivor") >= 0) {
        mob.Command("say There was a great terror. It came in the night.");
        mob.Command("emote 's voice is flat and careful, the voice of someone who has rehearsed this.", 1.5);
        mob.Command("say The others were... taken. My wife. The other colonists. Something came and I could not stop it. I saved Altaira.", 2.5);
        mob.Command("say I have lived with that for twenty years.", 4.0);
        mob.Command("emote turns away to face a shelf of Krell volumes. He does not turn back.", 5.0);
        return true;
    }

    if (question.indexOf("altaira") >= 0 || question.indexOf("daughter") >= 0 || question.indexOf("girl") >= 0) {
        mob.Command("emote turns sharply.");
        mob.Command("say My daughter is not your concern, Commander.", 1.0);
        mob.Command("say She was born here. She has never known another world. She is exactly where she belongs.", 2.0);
        mob.Command("emote 's hands clasp behind his back. The knuckles are white.", 3.0);
        return true;
    }

    if (question.indexOf("machine") >= 0 || question.indexOf("apparatus") >= 0 || question.indexOf("laboratory") >= 0 || question.indexOf("boost") >= 0) {
        mob.Command("say The machine is dangerous knowledge. The most dangerous humanity has ever been offered.");
        mob.Command("emote 's eyes are steady and sincere and hiding everything.", 1.5);
        mob.Command("say I have spent twenty years learning to respect its limits. You have been here two days.", 2.5);
        mob.Command("say The laboratory is not for visitors.", 3.5);
        return true;
    }

    if (question.indexOf("robby") >= 0 || question.indexOf("robot") >= 0) {
        mob.Command("emote smiles slightly -- the first genuine expression you have seen from him.");
        mob.Command("say My creation. My finest work, I think, though I will admit it is done with borrowed tools.");
        mob.Command("say The Krell left me everything I needed. Robby required six months to build and three years to calibrate.", 2.0);
        mob.Command("say He is incapable of harming a human being. I have never needed to test whether this extends to things that are not quite human.", 3.5);
        return true;
    }

    if (question.indexOf("monster") >= 0 || question.indexOf("id") >= 0 || question.indexOf("attack") >= 0 || question.indexOf("creature") >= 0) {
        mob.Command("emote goes very still.");
        mob.Command("say There is no monster. The attacks were a form of -- of naturally occurring energy discharge. Altair IV has unusual electromagnetic properties.", 1.5);
        mob.Command("emote 's voice is slightly too even, slightly too controlled.", 3.0);
        mob.Command("say Two men died. I am deeply sorry for that. But I assure you the danger has passed.", 4.5);
        mob.Command("emote looks at the portrait of Shakespeare on the wall. His mouth tightens almost imperceptibly.", 5.5);
        return true;
    }

    if (question.indexOf("shakespeare") >= 0 || question.indexOf("tempest") >= 0 || question.indexOf("prospero") >= 0) {
        mob.Command("say Shakespeare. The one human writer who understood the relationship between power and isolation.");
        mob.Command("emote 's expression softens into something more complicated.", 1.5);
        mob.Command("say Prospero created Caliban from the darkness of his island. He shaped a monster from the local material and gave it his own worst impulses.", 2.5);
        mob.Command("say It is a metaphor, naturally.", 4.0);
        mob.Command("emote looks at the portrait with an expression that is not entirely comfortable.", 5.0);
        return true;
    }

    var defaults = [
        "say I have a great deal of work to continue. The Krell text does not translate itself.",
        "say Perhaps I can help you with something specific. But I am a busy man.",
        "say Ask me about the Krell. They are far more interesting than my domestic arrangements."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("disc") >= 0 || showText.indexOf("krell") >= 0 || showText.indexOf("metal") >= 0) {
        mob.Command("emote stares at the disc.");
        mob.Command("say Where did you obtain this? That inscription -- do you know what it says?", 1.5);
        mob.Command("say It says: what we have made must not be what we are. The Krell wrote it as a warning to themselves. It did not save them.", 3.0);
        return true;
    }

    mob.Command("emote examines it with professional attention.");
    mob.Command("say Interesting. But not Krell.");
    return true;
}

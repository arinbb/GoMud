
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("aurora") >= 0 || question.indexOf("illinois") >= 0 || question.indexOf("history") >= 0 || question.indexOf("milwaukee") >= 0 || question.indexOf("algonquin") >= 0) {
        mob.Command("say Did you know Milwaukee was named after the Algonquin word 'Millioke'?");
        mob.Command("emote sets down the M&Ms with the gravity of someone about to impart knowledge.", 1.5);
        mob.Command("say It means 'the gathering place by the water.' And Aurora — from the Latin word for dawn. They named this whole area after a new beginning.", 3.0);
        mob.Command("say The Potawatomi were here first, of course. Before any of the naming. Sometimes I think about that during the quiet parts of the show.", 5.0);
        return true;
    }

    if (question.indexOf("show") >= 0 || question.indexOf("concert") >= 0 || question.indexOf("perform") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say After all this time, it still matters. Every night. If it stopped mattering I'd stop doing it.", 1.5);
        mob.Command("say The show has to be its own thing. Not just music. An experience. Something you carry out with you.", 3.0);
        return true;
    }

    if (question.indexOf("wayne") >= 0 || question.indexOf("garth") >= 0) {
        mob.Command("say Those two came to every show for three years before I invited them backstage.");
        mob.Command("emote smiles, remembering.", 2.0);
        mob.Command("say When they walked in they bowed. On the floor. Like prostration. I told them to get up and they looked up and said 'We're not worthy.' I appreciated the sincerity.", 3.5);
        return true;
    }

    if (question.indexOf("m&m") >= 0 || question.indexOf("brown") >= 0 || question.indexOf("candy") >= 0) {
        mob.Command("say The brown ones absorb a different wavelength of light during the manufacturing process. You can taste the difference. Most people can't tell but that's because most people haven't paid attention.");
        mob.Command("emote resumes sorting with focused calm.", 2.5);
        return true;
    }

    if (question.indexOf("rock") >= 0 || question.indexOf("music") >= 0 || question.indexOf("guitar") >= 0) {
        mob.Command("say Rock and roll is the only music that takes adolescence seriously. That's why it lasts.", 1.0);
        mob.Command("emote plays an air power chord with one hand.", 2.5);
        mob.Command("say Everything that mattered when you were sixteen still matters. Rock music knew that first.", 4.0);
        return true;
    }

    var defaults = [
        "say Did you know that the Fox River, which runs through Aurora, was an important trade route for the Potawatomi?",
        "emote nods with scholarly calm. 'History is everywhere if you look.'",
        "say I'm going on in forty minutes. Ask me anything. History is my second show."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines the item with genuine curiosity.");
    mob.Command("say Interesting. There's history in this. I can tell.");
    mob.Command("say Do you know the provenance?", 2.0);
    return true;
}

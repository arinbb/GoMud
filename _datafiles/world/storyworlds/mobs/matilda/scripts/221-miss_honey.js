
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("matilda") >= 0 || question.indexOf("child") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("emote 's face lights up with quiet wonder.");
        mob.Command("say Matilda is... extraordinary. She could multiply thirteen by three hundred and seventy-nine in her head on her first day of school.");
        mob.Command("say I've never met anyone like her. She reads Dickens. She's five.", 2.0);
        return true;
    }

    if (question.indexOf("trunchbull") >= 0 || question.indexOf("headmistress") >= 0 || question.indexOf("agatha") >= 0) {
        mob.Command("emote flinches visibly, then composes herself.");
        mob.Command("say Miss Trunchbull is... she was my father's sister-in-law. My aunt.");
        mob.Command("emote looks away, her voice dropping almost to nothing.");
        mob.Command("say She took everything. The house. The money. Everything my father left me.", 2.5);
        return true;
    }

    if (question.indexOf("cottage") >= 0 || question.indexOf("home") >= 0 || question.indexOf("house") >= 0) {
        mob.Command("emote smiles faintly, without self-pity.");
        mob.Command("say My cottage is small. Very small. But it's mine, and it's quiet, and the wildflowers grow right up to the door.");
        mob.Command("say I manage. One learns to need very little.", 2.0);
        return true;
    }

    if (question.indexOf("father") >= 0 || question.indexOf("magnus") >= 0 || question.indexOf("dad") >= 0) {
        mob.Command("emote 's eyes fill with tears she does not shed.");
        mob.Command("say My father was a wonderful man. A doctor. He loved me very much.");
        mob.Command("say He died when I was very young. The official story is that he... but I don't believe it. I never believed it.", 2.5);
        return true;
    }

    if (question.indexOf("chokey") >= 0 || question.indexOf("punish") >= 0) {
        mob.Command("emote wraps her arms around herself.");
        mob.Command("say The Chokey is a narrow cupboard lined with nails and broken glass. She puts children in it for hours.");
        mob.Command("say I cannot stop it. I have tried. She is too powerful.", 2.0);
        return true;
    }

    if (question.indexOf("red house") >= 0 || question.indexOf("property") >= 0) {
        mob.Command("emote goes very pale.");
        mob.Command("say The Red House was my father's. It should have been mine. But after he died, she simply... took it.");
        mob.Command("say She lives there now. Among his things. In his house.", 2.0);
        return true;
    }

    var defaults = [
        "say Every child deserves kindness. Every single one.",
        "say I try to make my classroom a safe place. It's the least I can do.",
        "emote smiles gently, but her eyes hold a sadness that never quite leaves."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

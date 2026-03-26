
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("emote leans back in his chair.");
        mob.Command("say When Billy first walked into this school, I'll be honest -- I had questions. A twenty-seven-year-old man in a Hawaiian shirt, sitting in first grade.", 1.5);
        mob.Command("say But he tried. Every single day, he tried. That counts for more than most people give it credit for.", 3.0);
        return true;
    }

    if (question.indexOf("wrestling") >= 0 || question.indexOf("trophy") >= 0 || question.indexOf("champion") >= 0) {
        mob.Command("emote glances at the shelf.");
        mob.Command("say 1974. State champion.", 1.5);
        mob.Command("emote is quiet for a moment. 'Wrestling teaches you that anyone can be beaten on a given day. And that getting back up is always the harder discipline.' He says nothing more about it.", 3.0);
        return true;
    }

    if (question.indexOf("school") >= 0 || question.indexOf("principal") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say Twenty-two years in this building. I've watched children become adults. Some of them came back to thank me. Most didn't and that's fine too.");
        mob.Command("say The work is in the doing, not in being thanked for it.", 2.0);
        return true;
    }

    if (question.indexOf("eric") >= 0 || question.indexOf("gordon") >= 0) {
        mob.Command("emote is careful here.");
        mob.Command("say Mr. Gordon is a -- complicated individual. I'll say that much.", 1.5);
        mob.Command("emote picks up his pen and sets it down. 'Some people believe that being smart is the same as being right. I've spent twenty-two years learning the difference.'", 3.0);
        return true;
    }

    if (question.indexOf("drawing") >= 0 || question.indexOf("crayon") >= 0) {
        mob.Command("emote looks at the framed drawing on the wall.");
        mob.Command("say Billy drew that when he was eight years old. He came back to the office because he'd pushed a kid down on the playground.", 1.5);
        mob.Command("say He cried. He said sorry. He drew me a picture. I framed it that day.", 3.0);
        return true;
    }

    var defaults = [
        "say That's a fair question. Sit down.",
        "emote folds his hands on the desk. The posture of a man who has time for this.",
        "say Let me think about that the way it deserves to be thought about."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

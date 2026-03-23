
// Souvenir: A Faded Photograph (Paris, Texas)

function onCommand_use(user, item, room) {
    return examinePhoto(user, item, room);
}

function onCommand_read(user, item, room) {
    return examinePhoto(user, item, room);
}

function onCommand_look(user, item, room) {
    return examinePhoto(user, item, room);
}

function examinePhoto(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You turn the photograph over. A woman, a man, a small boy. The sun is behind the camera and they are all squinting, all slightly washed out by the light. The man is younger than he will be. The woman is smiling at whoever is holding the camera, not at the group. The boy has his hands straight out at his sides, as if balancing. On the back: Paris, Texas. The ink has faded to the color of rust. The pressure of the pen is still visible in the paper.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">Ry Cooder plays one note somewhere far away. It bends and sustains and resolves.</ansi>");
    return true;
}

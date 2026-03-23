
// Jurassic Park - Nedry's Jeep
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Jeep's interior light dims and goes out, and in the dark the mud and the ferns and the rain become film grain, become static, become the warm lamp of the Grand Library reading alcove.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is absorbed into the dark when the Jeep's last light fails.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("barbasol") >= 0 || rest.indexOf("can") >= 0 || rest.indexOf("shaving") >= 0 || rest.indexOf("embryo") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The Barbasol can is a beautiful piece of engineering. The exterior is a standard pressurized shaving cream can, label intact: BARBASOL, Thick & Rich. But the interior is a custom aluminum cylinder — refrigerated, padded, fitted with fifteen individual slots. Each slot for one dinosaur embryo. The InGen embryo line: Velociraptor, Triceratops, Hypsilophodon, Brachiosaurus, others. The can is open. The slots are empty. The refrigeration unit has failed. Whatever was in those slots is gone. Nedry is gone. The deal is gone. The whole plan, a closed loop of absence.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("manifest") >= 0 || rest.indexOf("document") >= 0 || rest.indexOf("biosyn") >= 0 || rest.indexOf("paper") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The shipping manifests are soaked but readable. Biosyn Corporation. East Dock, Isla Nublar. Scheduled departure 0600. \"Special biological cargo.\" A handwritten annotation: $1.5M, contingent on delivery of viable specimens. Another page: a list of dinosaur species and their embryo viability windows. Nedry had done his research. He had planned this for months. He had planned everything except the Dilophosaurus and the rain and the mud and the rope.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("rope") >= 0 || rest.indexOf("winch") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The rope goes from the Jeep's winch into the trees at a downward angle. You follow it with your eyes to where it disappears into the ferns. You don't follow it physically. Whatever is at the other end of that rope has been there for a while. The rope is still taut. It is attached to something. The something attached to the other end of the rope is the most unsettling unknown on the island, which is saying something.</ansi>");
        return true;
    }

    return false;
}

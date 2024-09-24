let $links = $("#links");
let $image = $("#prakash");
let $li = $links.find("li");

function changeZIndex() {
  $links.css("z-index", 1);
}
function resetZIndex() {
  $links.css("z-index", -1);
  $li.css("animation-play-state", "running");
}
function stopAnimation() {
  $li.css("animation-play-state", "paused");
}

$image.on("mouseover", changeZIndex);
$links.on("mouseover", changeZIndex);
$li.on("mouseover", stopAnimation);

$links.on("mouseout", resetZIndex);
$image.on("mouseout", resetZIndex);

let score = 0;
let rewardClaimed = false;

const btn = document.getElementById("tap-button");
const scoreDisplay = document.getElementById("score");

btn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  updateLeaderboard();
});

function updateLeaderboard() {
  const list = document.getElementById("leaderboard-list");
  list.innerHTML = `<li>Ты: ${score} очков</li>`;
}

function claimReward() {
  if (!rewardClaimed) {
    score += 200;
    rewardClaimed = true;
    scoreDisplay.textContent = score;
    updateLeaderboard();
    alert("🎉 Получено +200 очков за подписку!");
  } else {
    alert("Ты уже получил награду.");
  }
}

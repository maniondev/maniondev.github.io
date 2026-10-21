// Menu toggle and countdown. Reads settings from config.js (window.WEDDING_CONFIG).
(function () {
  var cfg = window.WEDDING_CONFIG || {};

  // ----- Menu (phones). On wide screens the nav is always visible. -----
  var button = document.getElementById("menu-button");
  var nav = document.getElementById("site-nav");
  if (button && nav) {
    var setOpen = function (open) {
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        button.focus();
      }
    });
  }

  // ----- Countdown -----
  // Counts to the ceremony start when it is set in site.config.json,
  // otherwise shows whole days until the wedding date (Hawaiʻi time, UTC-10).
  var box = document.getElementById("countdown");
  if (!box || !cfg.weddingDate) return;

  var hasTime = Boolean(cfg.ceremonyStart);
  var target = new Date(hasTime ? cfg.ceremonyStart : cfg.weddingDate + "T00:00:00-10:00").getTime();
  var dayEnd = new Date(cfg.weddingDate + "T23:59:59-10:00").getTime();
  if (isNaN(target)) return;

  function unit(num, label) {
    return '<div class="count-box"><span class="count-num">' + num + '</span><span class="count-label">' + label + "</span></div>";
  }
  function plural(n, one, many) { return n === 1 ? one : many; }

  function render() {
    var now = Date.now();
    if (now > dayEnd) { box.hidden = true; return; }
    if (now >= target) {
      box.innerHTML = '<p class="countdown-today">Today’s the day!</p>';
      box.hidden = false;
      return;
    }
    var ms = target - now;
    // Without a start time, the day before the wedding reads "1 day to go".
    var days = hasTime ? Math.floor(ms / 864e5) : Math.ceil(ms / 864e5);
    if (hasTime) {
      var hours = Math.floor(ms / 36e5) % 24;
      var mins = Math.floor(ms / 6e4) % 60;
      box.innerHTML = unit(days, plural(days, "day", "days")) + unit(hours, plural(hours, "hour", "hours")) + unit(mins, plural(mins, "minute", "minutes"));
    } else {
      box.innerHTML = unit(days, plural(days, "day to go", "days to go"));
    }
    box.hidden = false;
  }

  render();
  setInterval(render, 30000);
})();

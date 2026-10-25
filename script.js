"use strict";
const LIST_URL = "./loto_servers.json";
const lang = (navigator.language || "vi").toLowerCase().startsWith("vi") ? "vi" : "en";
const TEXT = {
  vi: {
    getServer: "Tải server trên CH Play",
    title: "Lô tô", addr: "Địa chỉ máy chủ", shared: "Server chia sẻ", name: "Tên của bạn", connect: "Kết nối", connecting: "Đang kết nối…", newSession: "Phiên mới", cont: "Tiếp tục phiên",
    addrNote: "Trang https chỉ nối được wss://. Cùng wifi: mở trang này bằng http:// rồi nhập ip:cổng, ví dụ 192.168.1.5:9000.",
    sharedTitle: "Server chia sẻ", select: "Chọn", loadingList: "Đang tải danh sách…", listFail: "Không tải được danh sách server", noList: "Chưa có server nào",
    badAddr: "Địa chỉ không hợp lệ", mixed: "Trang https chỉ nối được wss://", needName: "Nhập tên của bạn", failed: "Không kết nối được máy chủ",
    trustNote: "Máy chủ dùng chứng chỉ tự ký. Chỉ lần đầu: ① bấm nút bên dưới ② chọn Nâng cao → Tiếp tục (thấy chữ ok là xong) ③ quay lại đây bấm Kết nối.", trustOpen: "① Mở trang xác nhận",
    connected: "Đã kết nối", reconnected: "Đã nối lại phiên của bạn", admin: "Bạn là admin", disconnected: "Mất kết nối", rejoin: "Vào lại", leave: "Thoát khỏi phòng",
    pot: "Hũ", speed: "Tốc độ", price: "Giá/tờ", board: "Bảng số", players: "Người chơi", chat: "Chat", settings: "Cài đặt", skin: "Giao diện", close: "Đóng",
    sWaiting: "Chờ", sEnded: "Kết thúc", start: "Bắt đầu", pause: "Tạm dừng", resume: "Tiếp tục", playAgain: "Chơi lại", end: "Kết thúc", cancelGame: "Huỷ ván",
    startsIn: "Bắt đầu sau", resetsIn: "Ván mới sau", cancelCount: "Dừng đếm ngược",
    emptyTitle: "Chưa có tờ nào", emptyMine: "Mua tờ để bắt đầu chơi.", emptyOther: "Người này chưa có tờ.", buy: "+ Mua tờ", tab: n => `Tờ ${n}`,
    change: "Đổi tờ", claim: "Kinh!", claimed: "Đã kinh", notBingo: "Chưa có hàng nào đủ", autoMark: "Tự dò", autoClaim: "Tự kinh",
    viewing: "Về tờ tôi", bot: "bot", you: "bạn", ticketsN: n => `${n} tờ`, addBot: "Thêm bot", kick: "Mời ra", topup: "Nạp", topupAsk: "Số tiền nạp:",
    sendChat: "Gửi", say: "Nhắn tin…", voice: "tin nhắn thoại", results: "Kết quả ván", won: "Bạn thắng",
    joined: n => `${n} vào phòng`, online: n => `${n} đã trở lại`, offline: n => `${n} mất kết nối`, gone: n => `${n} đã rời phòng`, kinh: n => `Kinh! ${n}`,
    save: "Lưu", sec: "giây", coins: "xu", draw: "Nhịp quay số", autostart: "Tự bắt đầu", autoreset: "Tự ván mới", balance: "Số dư đầu", grace: "Chờ nối lại", betT: "Giá mỗi tờ",
    skins: { trang: "Trắng", hoi_cho: "Hội chợ", tet: "Tết", la_chuoi: "Lá chuối", cham: "Chàm", muc_tau: "Mực tàu" },
  },
  en: {
    getServer: "Get the server on Google Play",
    title: "Lô tô", addr: "Server address", shared: "Shared server", name: "Your name", connect: "Connect", connecting: "Connecting…", newSession: "New session", cont: "Continue session",
    addrNote: "An https page can only reach wss://. On the same wifi, open this page over http:// and enter ip:port, e.g. 192.168.1.5:9000.",
    sharedTitle: "Shared servers", select: "Select", loadingList: "Loading servers…", listFail: "Couldn't load the server list", noList: "No servers available",
    badAddr: "Invalid address", mixed: "An https page can only connect to wss://", needName: "Enter your name", failed: "Couldn't reach the server",
    trustNote: "This server uses a self-signed certificate. First time only: ① tap the button below ② choose Advanced → Proceed (you will see ok) ③ come back and tap Connect.", trustOpen: "① Open the confirm page",
    connected: "Connected", reconnected: "Reconnected to your session", admin: "You are the admin", disconnected: "Disconnected", rejoin: "Rejoin", leave: "Leave room",
    pot: "Pot", speed: "Speed", price: "Price", board: "Number board", players: "Players", chat: "Chat", settings: "Settings", skin: "Theme", close: "Close",
    sWaiting: "Waiting", sEnded: "Ended", start: "Start", pause: "Pause", resume: "Resume", playAgain: "Play again", end: "End", cancelGame: "Cancel",
    startsIn: "Starts in", resetsIn: "New round in", cancelCount: "Stop countdown",
    emptyTitle: "No tickets yet", emptyMine: "Buy tickets to start playing.", emptyOther: "This player has no tickets.", buy: "+ Buy", tab: n => `Ticket ${n}`,
    change: "Swap", claim: "Kinh!", claimed: "Claimed", notBingo: "No complete row yet", autoMark: "Auto mark", autoClaim: "Auto claim",
    viewing: "My tickets", bot: "bot", you: "you", ticketsN: n => `${n} tickets`, addBot: "Add bot", kick: "Remove", topup: "Top up", topupAsk: "Amount to add:",
    sendChat: "Send", say: "Say something…", voice: "voice message", results: "Round results", won: "You won",
    joined: n => `${n} joined`, online: n => `${n} is back`, offline: n => `${n} went offline`, gone: n => `${n} left`, kinh: n => `Kinh! ${n}`,
    save: "Save", sec: "sec", coins: "coins", draw: "Draw interval", autostart: "Auto start", autoreset: "Auto new round", balance: "Starting balance", grace: "Reconnect grace", betT: "Price per ticket",
    skins: { trang: "White", hoi_cho: "Fair", tet: "Tet", la_chuoi: "Banana leaf", cham: "Indigo", muc_tau: "Ink" },
  },
};
const t = k => TEXT[lang][k] ?? TEXT.en[k] ?? k;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };
const fmt = n => Number(n || 0).toLocaleString(lang);

/* ---------- theme: 5 skin của app, sáng/tối theo hệ thống ---------- */
const SKINS = {
  trang: { l: { surface: "#FFFFFF", card: "#FFFFFF", input: "#F2F4F7", text: "#111827", text2: "#6B7280", primary: "#111827", crimson: "#D32F2F", accent: "#111827", onAccent: "#FFFFFF", box: "#F1F2F4", border: "#D5DAE1", divider: "#E8EBEF" },
           d: { surface: "#0B0F14", card: "#151A21", input: "#1E252E", text: "#F3F4F6", text2: "#9CA3AF", primary: "#F3F4F6", crimson: "#EF5350", accent: "#F3F4F6", onAccent: "#0B0F14", box: "#2A2F36", border: "#2F3944", divider: "#1E252E" } },
  hoi_cho: { l: { surface: "#FBEFD3", card: "#FFF9EA", input: "#F3E2BA", text: "#4E2A1E", text2: "#8D6E63", primary: "#2E7D32", crimson: "#C62828", accent: "#D99A00", onAccent: "#4E2A1E", box: "#FFE7A8", border: "#D9BE87", divider: "#E6D3A8" },
             d: { surface: "#2B1A12", card: "#3A261B", input: "#4A3225", text: "#FFE9C2", text2: "#C9A98B", primary: "#81C784", crimson: "#EF5350", accent: "#FFC233", onAccent: "#4E2A1E", box: "#5A4012", border: "#6B4A36", divider: "#4A3225" } },
  tet: { l: { surface: "#FFF0E0", card: "#FFF9F0", input: "#FBE3C8", text: "#4A1010", text2: "#8A5248", primary: "#E8A200", crimson: "#B71C1C", accent: "#C8102E", onAccent: "#FFF3D6", box: "#FFD9D2", border: "#E8B98F", divider: "#F1D3B5" },
         d: { surface: "#2A0C0C", card: "#3D1414", input: "#521C1C", text: "#FFE6C7", text2: "#D1A08A", primary: "#FFC233", crimson: "#EF5350", accent: "#FF7A6B", onAccent: "#2A0C0C", box: "#5E1E1E", border: "#7A3A33", divider: "#522020" } },
  la_chuoi: { l: { surface: "#EAF3E1", card: "#F6FBF0", input: "#D5E8C4", text: "#1F3A1F", text2: "#5E7A5A", primary: "#2E7D32", crimson: "#C62828", accent: "#B26A00", onAccent: "#FFFFFF", box: "#FFE8B5", border: "#B5D3A0", divider: "#CFE3BE" },
              d: { surface: "#0F2414", card: "#17331C", input: "#1F4426", text: "#E3F4D8", text2: "#9EC49A", primary: "#81C784", crimson: "#EF5350", accent: "#FFCA28", onAccent: "#0F2414", box: "#4A3B0E", border: "#35603B", divider: "#1F4426" } },
  cham: { l: { surface: "#E8EDF7", card: "#F6F8FD", input: "#D5DEF0", text: "#14213D", text2: "#5B6B8C", primary: "#2F4B9A", crimson: "#C62828", accent: "#B26A00", onAccent: "#FFFFFF", box: "#FFE8B5", border: "#B7C4E0", divider: "#CDD7EC" },
          d: { surface: "#0D1530", card: "#16224A", input: "#1F2F63", text: "#E6ECFF", text2: "#A3B2DA", primary: "#7C9BFF", crimson: "#FF6B6B", accent: "#FFC233", onAccent: "#0D1530", box: "#4A3B0E", border: "#34478A", divider: "#1F2F63" } },
  muc_tau: { l: { surface: "#EFEDE8", card: "#FAF9F6", input: "#E0DDD5", text: "#1C1C1C", text2: "#6B6B66", primary: "#2B2B2B", crimson: "#C62828", accent: "#C62828", onAccent: "#FFFFFF", box: "#F3D6D2", border: "#C9C5BA", divider: "#DDD9CE" },
             d: { surface: "#141414", card: "#1F1F1F", input: "#2B2B2B", text: "#ECE9E2", text2: "#A9A59B", primary: "#E8E4DA", crimson: "#EF5350", accent: "#FF6B5E", onAccent: "#141414", box: "#4A1F1B", border: "#3D3B36", divider: "#2B2B2B" } },
};
const INK = "#4E2A1E", CREAM = "#FFF3D6";
const rgb = h => { h = h.replace("#", ""); if (h.length === 8) h = h.slice(2); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };
const hex = a => "#" + a.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const lin = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = h => { const [r, g, b] = rgb(h); return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); };
const mix = (a, b, k) => hex(rgb(a).map((v, i) => v * (1 - k) + rgb(b)[i] * k));
const darken = (h, k) => mix(h, "#000000", k);
const onSolid = h => (lum(h) > 0.35 ? INK : CREAM);
let P = null, DARK = false;
const toHsl = h => { const [r, g, b] = rgb(h).map(v => v / 255), mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  if (!d) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1)), hh = mx === r ? ((g - b) / d + 6) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [hh * 60, s, l]; };
const fromHsl = (h, s, l) => { const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return hex([(r + m) * 255, (g + m) * 255, (b + m) * 255]); };
const tone = (h, s, l) => { const [hh, ss, ll] = toHsl(h); return fromHsl(hh, Math.min(1, ss * s), Math.min(1, ll * l)); };
const readable = h => (lum(P.surface) > 0.5 && lum(h) > 0.3 ? darken(h, 0.35) : h);

function applyTheme() {
  const dark = matchMedia("(prefers-color-scheme: dark)").matches;
  const s = SKINS[S.skin] || SKINS.hoi_cho, raw = dark ? s.d : s.l, p = { ...raw };
  for (const k of ["accent", "crimson", "primary", "box"]) p[k] = tone(raw[k], 0.8, dark ? 0.93 : 0.95);
  if (dark) p.text = tone(raw.text, 0.9, 0.94);
  else { p.surface = tone(raw.surface, 0.92, 0.97); p.card = tone(raw.card, 0.9, 0.955); p.input = tone(raw.input, 0.92, 0.96); }
  if (!dark && S.skin === "trang") { p.surface = "#FFFFFF"; p.card = "#FFFFFF"; }
  document.documentElement.dataset.skin = S.skin;
  P = p; DARK = dark;
  const r = document.documentElement.style, set = (k, v) => r.setProperty(k, v);
  set("--surface", p.surface); set("--card", p.card); set("--input", p.input); set("--text", p.text); set("--text2", p.text2);
  set("--primary", p.primary); set("--crimson", p.crimson); set("--accent", p.accent); set("--on-accent", p.onAccent); set("--accent-box", p.box);
  set("--border", p.border); set("--divider", p.divider);
  set("--accent-r", readable(p.accent)); set("--crimson-r", readable(p.crimson)); set("--primary-r", readable(p.primary));
  const variants = { default: p.primary, warning: dark ? "#FFCA28" : "#F9A825", danger: p.crimson, info: dark ? "#64B5F6" : "#1976D2" };
  for (const [k, c] of Object.entries(variants)) { set(`--v-${k}`, c); set(`--v-${k}-r`, readable(c)); set(`--v-${k}-o`, onSolid(c)); }
  document.querySelector('meta[name="theme-color"]').content = p.surface;
}

/* ---------- state ---------- */
const S = { skin: store.get("loto.skin") || "trang", sound: store.get("loto.sound") !== "0" };
function resetSession() {
  Object.assign(S, {
    ws: null, connecting: false, leaving: false, url: S.url || "", name: S.name || "", me: "", host: false, state: "WAITING", drawn: [], last: null,
    timers: { draw: 0, start: 0, reset: 0 }, pages: [], marks: new Map(), autoMark: new Set(), autoClaim: new Set(), claimed: new Set(), cur: 0,
    roster: [], freshRoster: true, bank: { bet: 0, pot: 0, balances: {}, results: [] }, graceMs: 0, startAt: null, resetAt: null, chat: [], seenChat: 0,
    viewing: null, viewed: [], spoken: null,
  });
}
resetSession();

function toast(text, bad) {
  const el = document.createElement("div");
  el.className = "toast" + (bad ? " bad" : "");
  el.textContent = text;
  $("#toasts").append(el);
  setTimeout(() => el.remove(), 3200);
}

/* ---------- dialogs ---------- */
const dialogs = {};
function mkDialog(id, title, body) {
  const d = document.createElement("dialog");
  d.className = "folk"; d.id = id; d.style.position = "fixed";
  d.innerHTML = `<button class="x" type="button" aria-label="${esc(t("close"))}">✕</button><h2 data-title></h2><div class="orn"><i></i><span>✦</span><i></i></div><div class="body">${body}</div>`;
  d.querySelector("[data-title]").textContent = title;
  d.querySelector(".x").onclick = () => d.close();
  d.addEventListener("click", e => { if (e.target === d) d.close(); });
  document.body.append(d);
  dialogs[id] = d;
  return d;
}
const openDlg = id => { if (!dialogs[id].open) dialogs[id].showModal(); draw(); };

/* ---------- connect ---------- */
const sessionKey = url => "loto.session." + url;
function savedSession(url) { try { return JSON.parse(store.get(sessionKey(url)) || "null"); } catch { return null; } }
function wsUrl(raw) {
  let s = raw.trim();
  if (!s) return { error: "badAddr" };
  if (/^https?:\/\//i.test(s)) s = s.replace(/^http/i, "ws");
  else if (!/^wss?:\/\//i.test(s)) s = (location.protocol === "https:" ? "wss://" : "ws://") + s;
  try {
    const u = new URL(s);
    if (location.protocol === "https:" && u.protocol === "ws:") return { error: "mixed" };
    return { url: u.href.replace(/\/$/, "") };
  } catch { return { error: "badAddr" }; }
}
const cleanName = raw => raw.trim().replace(/\s+/g, " ").slice(0, 16);

function renderConnect() {
  const busy = S.connecting, addr = wsUrl($("#addr").value), name = cleanName($("#name").value);
  const session = !!(addr.url && name && savedSession(addr.url)?.name === name);
  $("#btnConnect").textContent = busy ? t("connecting") : session ? t("newSession") : t("connect");
  $("#btnConnect").disabled = busy;
  $("#btnContinue").hidden = !session || busy;
  $("#btnContinue").setAttribute("aria-label", t("cont"));
  $("#btnShared").disabled = busy;
  $("#addr").disabled = $("#name").disabled = busy;
}

async function loadServers() {
  const box = $("#serverList");
  box.innerHTML = `<p class="note">${esc(t("loadingList"))}</p>`;
  try {
    const res = await fetch(LIST_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(res.status);
    const root = await res.json();
    const rows = Array.isArray(root) ? root : Array.isArray(root.servers) ? root.servers : [root];
    const items = rows.flatMap(r => (r && typeof r === "object" ? (r.name && r.url ? [[r.name, r.url]] : Object.entries(r)) : [])).filter(([n, u]) => typeof n === "string" && typeof u === "string");
    box.innerHTML = items.length ? "" : `<p class="note">${esc(t("noList"))}</p>`;
    for (const [n, u] of items) {
      const row = document.createElement("div");
      row.className = "item";
      row.innerHTML = `<div class="grow"><b>${esc(n)}</b><small>${esc(u)}</small></div><button class="btn filled v-default mini" type="button">${esc(t("select"))}</button>`;
      row.querySelector("button").onclick = () => { $("#addr").value = u; dialogs.dlgServers.close(); renderConnect(); };
      box.append(row);
    }
  } catch {
    box.innerHTML = `<p class="note">${esc(t("listFail"))}</p><button class="btn ghost v-default block" id="retryList" type="button">↻</button>`;
    $("#retryList").onclick = loadServers;
  }
}

function connect(fresh) {
  if (S.ws || S.connecting) return;
  const addr = wsUrl($("#addr").value);
  if (addr.error) return toast(t(addr.error), true);
  const name = cleanName($("#name").value);
  if (!name) return toast(t("needName"), true);
  store.set("loto.addr", $("#addr").value.trim()); store.set("loto.name", name);
  const sess = savedSession(addr.url), token = !fresh && sess?.name === name ? sess.token : "";
  S.url = addr.url; S.name = name; S.connecting = true; $("#trust").hidden = true; renderConnect();
  let opened = false, ws;
  try { ws = new WebSocket(addr.url); } catch { S.connecting = false; renderConnect(); return toast(t("badAddr"), true); }
  S.ws = ws;
  ws.onopen = () => { opened = true; S.connecting = false; ws.send(`join ${name.replace(/ /g, "_")} ${token}`.trim()); };
  ws.onmessage = ev => { try { handle(JSON.parse(ev.data)); } catch (e) { console.error(e); } };
  ws.onclose = () => {
    const leaving = S.leaving, url = S.url, nm = S.name, inGame = !$("#game").hidden;
    resetSession(); S.url = url; S.name = nm;
    Object.values(dialogs).forEach(d => d.open && d.close());
    if (!opened) toast(t("failed"), true);
    if (inGame && !leaving) { toast(t("disconnected"), true); $("#lost").hidden = false; draw(); return; }
    show("connect"); renderConnect();
    showTrust(opened ? "" : url);
  };
}
function showTrust(url) {
  let u; try { u = new URL(url); } catch {}
  const lan = !!u && u.protocol === "wss:" && /^(\d{1,3}\.){3}\d{1,3}$|\.local$/.test(u.hostname);
  $("#trust").hidden = !lan;
  if (lan) $("#trustLink").href = `https://${u.host}/`;
}
const send = line => { if (S.ws && S.ws.readyState === 1) S.ws.send(line); };
function show(which) { $("#connect").hidden = which !== "connect"; $("#game").hidden = which !== "game"; }

/* ---------- protocol ---------- */
const parsePage = p => ({ id: p.id, bg: "#" + String(p.bg || "#FFF7E9C9").slice(3), grid: p.grid });
function clearRound() { S.pages = []; S.marks.clear(); S.autoMark.clear(); S.autoClaim.clear(); S.claimed.clear(); S.cur = 0; }
const nameOf = id => S.roster.find(p => p.id === id)?.name || id;

function handle(m) {
  const d = m.data;
  switch (m.event) {
    case "welcome":
      S.me = d.id; S.host = !!d.host; S.freshRoster = true;
      store.set(sessionKey(S.url), JSON.stringify({ name: S.name, token: d.token }));
      $("#lost").hidden = true; show("game");
      toast(d.resumed ? t("reconnected") : t("connected"));
      if (S.host) toast(t("admin"));
      break;
    case "state": applyState(d); break;
    case "number": S.last = d.number; if (!S.drawn.includes(d.number)) S.drawn.push(d.number); announce(); bump(); break;
    case "pages": { const seen = new Set(S.pages.map(p => p.id)); for (const p of d.map(parsePage)) if (!seen.has(p.id)) S.pages.push(p); break; }
    case "changed": { const fresh = parsePage(d.page); S.pages = S.pages.map(p => (p.id === d.old ? fresh : p)); S.marks.delete(d.old); S.autoMark.delete(d.old); S.autoClaim.delete(d.old); break; }
    case "players": applyRoster(d); break;
    case "viewed": if (d.id === S.viewing) S.viewed = d.pages.map(parsePage); break;
    case "bank": applyBank(d); break;
    case "chats": S.chat = d; break;
    case "chat": if (d.n > (S.chat.at(-1)?.n || 0)) S.chat = [...S.chat, d].slice(-100); break;
    case "winners": burst(true); toast(t("kinh")(Object.keys(d).map(nameOf).join(", "))); break;
    case "kicked": if (d === S.me) { S.leaving = true; S.ws?.close(); } break;
    case "error": toast(String(d), true); break;
  }
  draw();
}
function applyState(d) {
  const prev = S.state;
  S.state = d.state; S.drawn = d.drawnNumbers || []; S.last = S.drawn.at(-1) ?? null;
  S.timers = { draw: d.drawIntervalMs, start: d.autoStartMs, reset: d.autoResetMs };
  if (S.state === "WAITING" && prev !== "WAITING") clearRound();
  announce();
  const set = drawnSet(), auto = S.pages.filter(p => S.autoClaim.has(p.id) && !S.claimed.has(p.id) && hasWin(p, set));
  if (auto.length) { auto.forEach(p => S.claimed.add(p.id)); send("claim"); }
}
function applyRoster(next) {
  if (S.freshRoster) S.freshRoster = false;
  else {
    const before = new Map(S.roster.map(p => [p.id, p]));
    for (const p of next) {
      if (p.id === S.me) continue;
      const was = before.get(p.id);
      if (!was) toast(t("joined")(p.name)); else if (!was.online && p.online) toast(t("online")(p.name)); else if (was.online && !p.online) toast(t("offline")(p.name));
    }
    for (const p of S.roster) if (p.id !== S.me && !next.some(n => n.id === p.id)) toast(t("gone")(p.name));
  }
  S.roster = next;
  if (S.viewing) {
    const seat = next.find(p => p.id === S.viewing);
    if (!seat) { S.viewing = null; S.viewed = []; } else if (seat.pages !== S.viewed.length) send("view " + S.viewing);
  }
}
function applyBank(d) {
  const now = Date.now(), had = S.bank.results.length;
  S.bank = { bet: d.bet, pot: d.pot, balances: d.balances || {}, results: d.results || [] };
  S.startAt = d.autoStartIn == null ? null : now + d.autoStartIn;
  S.resetAt = d.autoResetIn == null ? null : now + d.autoResetIn;
  S.graceMs = d.graceMs; S.initBalance = d.initBalance;
  if (!had && S.bank.results.length) showResults();
}
function showResults() {
  const mine = S.bank.results.find(r => r.id === S.me && r.prize > 0);
  if (mine) toast(`${t("won")} +${fmt(mine.prize)}`);
  openDlg("dlgResults");
}
function announce() {
  if (S.last == null || S.last === S.spoken) return;
  S.spoken = S.last;
  if (!S.sound || !("speechSynthesis" in window)) return;
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(String(S.last)); u.lang = "vi-VN"; speechSynthesis.speak(u); } catch {}
}

/* ---------- derived ---------- */
const drawnSet = () => new Set(S.drawn);
const rowFull = (row, set) => { const n = row.filter(Boolean); return n.length > 0 && n.every(x => set.has(x)); };
const hasWin = (page, set) => page.grid.some(r => rowFull(r, set));
const joinable = () => S.state === "WAITING" || S.state === "VOTING";
const marksOf = p => (S.autoMark.has(p.id) ? drawnSet() : S.marks.get(p.id) || new Set());

/* ---------- render ---------- */
let queued = false;
function draw() { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; paint(); }); }
function bump() { const b = $("#ball"); b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); burst(); }
const packet = w => `<span class="packet" style="--w:${w}px"></span>`;

function paint() {
  if ($("#game").hidden) return;
  const bal = S.bank.balances[S.me];
  $("#meName").textContent = S.name; $("#meBal").textContent = fmt(bal);
  $("#playersBadge").textContent = S.roster.length; $("#playersBadge").hidden = !S.roster.length;
  const unread = S.chat.filter(m => m.n > S.seenChat && m.id !== S.me).length;
  $("#chatBadge").textContent = unread; $("#chatBadge").hidden = !unread;
  $("#btnSound").textContent = S.sound ? "🔊" : "🔇";
  $("#btnChat").classList.toggle("on", !!S.ws);

  const n = S.drawn.length;
  $("#stateChip").textContent = S.state === "PLAYING" ? `▶ ${n}/90` : S.state === "PAUSED" ? `⏸ ${n}/90` : S.state === "ENDED" ? `🏁 ${t("sEnded")}` : `⏳ ${t("sWaiting")}`;
  drawBall();
  $("#pot").textContent = fmt(S.bank.pot);
  $("#potLabel").textContent = t("pot");
  $("#lgSpeed").textContent = t("speed"); $("#lgPrice").textContent = t("price");
  $("#chipSpeed").textContent = (S.timers.draw / 1000 || 0) + "s"; $("#chipSpeed").disabled = !S.host;
  $("#chipPrice").textContent = fmt(S.bank.bet); $("#chipPrice").disabled = !S.host;
  $("#btnRejoin").textContent = t("rejoin"); $("#lostText").textContent = t("disconnected");
  drawActions(); updateCount(); drawChips(); drawPages();
  if (dialogs.dlgBoard.open) drawBoard();
  if (dialogs.dlgPlayers.open) drawPlayers();
  if (dialogs.dlgChat.open) { drawChat(); S.seenChat = S.chat.at(-1)?.n || 0; }
  if (dialogs.dlgResults.open) drawResults();
  if (dialogs.dlgSettings.open) drawSettings();
}
function btn(cmd, label, variant, filled, wide) { return `<button class="btn ${filled ? "filled" : "ghost"} v-${variant}${wide ? " wide" : ""}" data-cmd="${cmd}">${esc(label)}</button>`; }
function drawActions() {
  const box = $("#actions"); box.hidden = !S.host;
  if (!S.host) return;
  const s = S.state;
  box.innerHTML = s === "WAITING" || s === "VOTING" ? btn("start", "▶ " + t("start"), "default", true)
    : s === "PLAYING" ? btn("pause", "⏸ " + t("pause"), "default", true, true) + btn("end", t("end"), "warning") + btn("cancel", t("cancelGame"), "danger")
    : s === "PAUSED" ? btn("resume", "▶ " + t("resume"), "default", true, true) + btn("end", t("end"), "warning") + btn("cancel", t("cancelGame"), "danger")
    : btn("reset", t("playAgain"), "default", true);
}
function drawChips() {
  const box = $("#setChips"); box.hidden = !S.host;
  if (!S.host) return;
  const chips = [["draw", t("draw"), (S.timers.draw / 1000) + "s"], ["autostart", t("autostart"), (S.timers.start / 1000) + "s"], ["autoreset", t("autoreset"), (S.timers.reset / 1000) + "s"],
    ["balance", t("balance"), fmt(S.initBalance)], ["grace", t("grace"), ((S.graceMs || 0) / 1000) + "s"]];
  box.innerHTML = chips.map(([k, l, v]) => `<fieldset class="lchip"><legend>${esc(l)}</legend><button data-num="${k}">${esc(v)}</button></fieldset>`).join("");
}
function updateCount() {
  const at = S.state === "ENDED" ? S.resetAt : S.startAt, left = at ? Math.max(0, Math.ceil((at - Date.now()) / 1000)) : 0;
  $("#tip").hidden = !left;
  $("#tipTitle").textContent = left ? (S.state === "ENDED" ? t("resetsIn") : "🚀 " + t("startsIn")) : "";
  $("#tipSecs").textContent = left ? left + "s" : "";
  $("#tipCancel").hidden = !S.host;
}
setInterval(() => { if (!$("#game").hidden) updateCount(); }, 250);

function paperVars(raw) {
  const bg = DARK ? mix(raw, "#000000", 0.16) : raw, ink = onSolid(bg), frame = readable(bg);
  return `--paper:${bg};--ink-p:${ink};--frame:${frame};--line:${ink}73;--blank:${darken(bg, 0.12)};--mark-text:${onSolid(P.crimson)}`;
}
function drawPagesDom() {
  const host = $("#pages"), viewing = S.viewing, mine = !viewing, set = drawnSet();
  const pages = mine ? S.pages : S.viewed, canBuy = mine && joinable();
  S.cur = Math.min(S.cur, Math.max(0, pages.length - 1));
  if (!pages.length) {
    host.innerHTML = `${viewing ? viewingChip() : ""}<div class="empty"><h3>${esc(t("emptyTitle"))}</h3><p>${esc(t(mine ? "emptyMine" : "emptyOther"))}</p>${canBuy ? `<button class="btn filled v-danger" data-buy>${esc(t("buy").replace(/^\+\s*/, ""))}</button>` : ""}</div>`;
    return;
  }
  const showTabs = pages.length > 1 || canBuy || !mine, page = pages[S.cur], marked = mine ? marksOf(page) : set;
  const tabs = pages.map((p, i) => `<button class="tab" role="tab" aria-selected="${i === S.cur}" data-tab="${i}">${esc(t("tab")(i + 1))}</button>`).join("");
  const trailing = (canBuy ? `<button class="pill v-danger" data-buy>${esc(t("buy"))}</button>` : "") + (viewing ? viewingChip() : "");
  const waiting = joinable(), claimed = S.claimed.has(page.id);
  const toolbar = mine ? `<div class="toolbar"><button class="gridtab" ${waiting ? `data-change="${page.id}"` : `data-claim="${page.id}"`} ${!waiting && claimed ? "disabled" : ""}>${esc(waiting ? t("change") : t("claim"))}</button>
    <div class="checks"><label class="check"><input type="checkbox" data-am="${page.id}" ${S.autoMark.has(page.id) ? "checked" : ""}>${esc(t("autoMark"))}</label><label class="check"><input type="checkbox" data-ac="${page.id}" ${S.autoClaim.has(page.id) ? "checked" : ""}>${esc(t("autoClaim"))}</label></div></div>` : "";
  host.innerHTML = `${showTabs ? `<div class="tabs"><div class="tablist" role="tablist">${tabs}</div>${trailing}</div>` : ""}
    <div class="card${showTabs ? "" : " solo"}" style="${paperVars(page.bg)}" id="card">${toolbar}<canvas id="tk" class="tk" aria-label="Tờ lô tô"></canvas>${mine && claimed ? `<div class="claimed">${esc(t("claimed"))}</div>` : ""}</div>`;
}
const viewingChip = () => `<div class="viewing v-info"><span>👀 ${esc(nameOf(S.viewing))}</span><button data-back>${esc(t("viewing"))}</button></div>`;

function drawBoard() {
  const set = drawnSet();
  $("#boardGrid").innerHTML = Array.from({ length: 90 }, (_, i) => i + 1).map(n => `<span class="${set.has(n) ? "d" : ""}${n === S.last ? " last" : ""}">${n}</span>`).join("");
}
function drawPlayers() {
  $("#playersList").innerHTML = S.roster.map(p => `<div class="item"><span class="dot${p.online ? " on" : ""}"></span>
    <button class="grow" data-view="${esc(p.id)}"><b>${esc(p.name)}${p.id === S.me ? `<span class="tag">${esc(t("you"))}</span>` : ""}${p.bot ? `<span class="tag">${esc(t("bot"))}</span>` : ""}</b><small>${esc(t("ticketsN")(p.pages))}</small></button>
    <span class="balance">${packet(10)}${fmt(S.bank.balances[p.id])}</span>
    ${S.host && p.id !== S.me ? `<button class="mini btn ghost v-default" data-topup="${esc(p.id)}">${esc(t("topup"))}</button><button class="mini btn ghost v-danger" data-kick="${esc(p.id)}">✕</button>` : ""}</div>`).join("");
  $("#btnAddBot").hidden = !(S.host && joinable());
}
function drawChat() {
  const log = $("#chatlog"), stick = log.scrollTop + log.clientHeight >= log.scrollHeight - 30;
  log.innerHTML = S.chat.map(m => `<div class="msg${m.id === S.me ? " mine" : ""}"><b>${esc(m.name)}</b>${m.sec ? `<i>${esc(t("voice"))} (${m.sec}s)</i>` : esc(m.text)}</div>`).join("");
  if (stick) log.scrollTop = log.scrollHeight;
}
function drawResults() {
  $("#resultsBody").innerHTML = S.bank.results.map(r => `<div class="win"><span>${esc(r.name)}${r.id === S.me ? ` (${esc(t("you"))})` : ""} · ${esc(t("ticketsN")(r.pages))}</span><b>+${fmt(r.prize)}</b></div>`).join("");
}
function drawSettings() {
  $("#skins").innerHTML = Object.keys(SKINS).map(k => `<button data-skin="${k}" aria-pressed="${S.skin === k}"><i style="background:${k === "hoi_cho" ? CREAM : k === "tet" ? SKINS.tet.l.accent : SKINS[k].l.primary}"></i>${esc(t("skins")[k])}</button>`).join("");
}

/* ---------- number dialog ---------- */
const NUM = { bet: ["betT", 1, "coins", 1], draw: ["draw", 0.2, "sec", 1000], autostart: ["autostart", 0, "sec", 1000], autoreset: ["autoreset", 0, "sec", 1000], balance: ["balance", 0, "coins", 1], grace: ["grace", 0, "sec", 1000] };
let numKey = null;
function askNumber(key) {
  const [label, min, unit, scale] = NUM[key];
  numKey = key;
  const cur = { bet: S.bank.bet, draw: S.timers.draw, autostart: S.timers.start, autoreset: S.timers.reset, balance: S.initBalance, grace: S.graceMs }[key] || 0;
  dialogs.dlgNum.querySelector("[data-title]").textContent = t(label);
  $("#numIn").value = cur / scale; $("#numIn").min = min; $("#numIn").step = scale === 1 ? 1 : 0.1; $("#numUnit").textContent = t(unit);
  openDlg("dlgNum"); setTimeout(() => $("#numIn").select(), 50);
}

/* ---------- events ---------- */
document.addEventListener("click", e => {
  const el = e.target.closest("button, input"); if (!el) return;
  const d = el.dataset;
  if (d.n) { const id = +d.page; if (S.autoMark.has(id)) return; const cur = new Set(S.marks.get(id) || []); const v = +d.n; cur.has(v) ? cur.delete(v) : cur.add(v); S.marks.set(id, cur); draw(); }
  else if (d.tab) { S.cur = +d.tab; draw(); }
  else if (d.change) send("change " + d.change);
  else if ("buy" in d) send("buy 1");
  else if (d.claim) { const page = S.pages.find(p => p.id === +d.claim); if (!page || !hasWin(page, drawnSet())) return toast(t("notBingo"), true); S.pages.filter(p => hasWin(p, drawnSet())).forEach(p => S.claimed.add(p.id)); send("claim"); draw(); }
  else if (d.am) { const id = +d.am; if (el.checked) S.autoMark.add(id); else { S.autoMark.delete(id); S.marks.set(id, drawnSet()); } draw(); }
  else if (d.ac) { +d.ac && (el.checked ? S.autoClaim.add(+d.ac) : S.autoClaim.delete(+d.ac)); draw(); }
  else if ("back" in d) { S.viewing = null; S.viewed = []; S.cur = 0; draw(); }
  else if (d.view) { dialogs.dlgPlayers.close(); if (d.view === S.me) { S.viewing = null; S.viewed = []; } else { S.viewing = d.view; S.viewed = []; S.cur = 0; send("view " + d.view); } draw(); }
  else if (d.kick) send("kick " + d.kick);
  else if (d.topup) { const v = prompt(t("topupAsk")); if (v && !isNaN(+v)) send(`topup ${d.topup} ${Math.trunc(+v)}`); }
  else if (d.cmd) send(d.cmd);
  else if (d.num) askNumber(d.num);
  else if (d.skin) { S.skin = d.skin; store.set("loto.skin", d.skin); applyTheme(); draw(); }
});
$("#btnBoard").onclick = $("#ball").onclick = () => openDlg("dlgBoard");
$("#btnPlayers").onclick = () => { openDlg("dlgPlayers"); };
$("#btnSettings").onclick = () => openDlg("dlgSettings");
$("#btnChat").onclick = () => { S.seenChat = S.chat.at(-1)?.n || 0; openDlg("dlgChat"); setTimeout(() => $("#chatin").focus(), 50); };
$("#btnSound").onclick = () => { S.sound = !S.sound; store.set("loto.sound", S.sound ? "1" : "0"); if (!S.sound && "speechSynthesis" in window) speechSynthesis.cancel(); draw(); };
$("#chipSpeed").onclick = () => askNumber("draw");
$("#chipPrice").onclick = () => askNumber("bet");
$("#tipCancel").onclick = () => send("stopauto");
$("#btnRejoin").onclick = () => { $("#lost").hidden = true; show("connect"); connect(false); };
$("#btnShared").onclick = () => { openDlg("dlgServers"); loadServers(); };
$("#btnConnect").onclick = () => connect(true);
$("#btnContinue").onclick = () => connect(false);
$("#addr").oninput = () => { $("#trust").hidden = true; renderConnect(); };
$("#name").oninput = renderConnect;
$("#name").addEventListener("keydown", e => { if (e.key === "Enter") connect(false); });
document.addEventListener("submit", e => {
  e.preventDefault();
  if (e.target.id === "chatform") { const v = $("#chatin").value.trim(); if (v) { send("chat " + v); $("#chatin").value = ""; } }
  if (e.target.id === "numForm" && numKey) { const [, , , scale] = NUM[numKey], v = Math.round(parseFloat($("#numIn").value) * scale); if (!isNaN(v) && v >= 0) send(`set ${numKey} ${v}`); dialogs.dlgNum.close(); }
});
let touchX = null;
document.addEventListener("touchstart", e => { touchX = e.target.closest("#card") ? e.touches[0].clientX : null; }, { passive: true });
document.addEventListener("touchend", e => {
  if (touchX == null) return;
  const dx = e.changedTouches[0].clientX - touchX; touchX = null;
  const count = (S.viewing ? S.viewed : S.pages).length;
  if (Math.abs(dx) > 60) { S.cur = Math.max(0, Math.min(count - 1, S.cur + (dx < 0 ? 1 : -1))); draw(); }
}, { passive: true });

/* ---------- boot ---------- */
(function boot() {
  document.documentElement.lang = lang;
  const mq = matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener?.("change", () => { applyTheme(); draw(); });
  applyTheme();
  mkDialog("dlgServers", t("sharedTitle"), `<div class="list" id="serverList"></div><a class="btn ghost v-default block lnkServer" href="https://play.google.com/store/apps/details?id=com.huydt.loto" target="_blank" rel="noopener"></a>`);
  mkDialog("dlgBoard", t("board"), `<div class="cells" id="boardGrid"></div>`);
  mkDialog("dlgPlayers", t("players"), `<div class="list" id="playersList"></div><button class="btn filled v-default block" id="btnAddBot" style="margin-top:12px" hidden></button>`);
  mkDialog("dlgChat", t("chat"), `<div class="chatlog" id="chatlog"></div><form class="chatform" id="chatform"><input class="textin" id="chatin" maxlength="200" autocomplete="off"><button class="btn filled v-default" id="chatSend"></button></form>`);
  mkDialog("dlgSettings", t("settings"), `<div class="fhead" style="justify-content:center;margin-bottom:8px">${esc(t("skin"))}</div><div class="skins" id="skins"></div><button class="btn ghost v-danger block" id="btnLeave"></button>`);
  mkDialog("dlgNum", "", `<form id="numForm" class="stack"><div class="input"><input id="numIn" type="number" inputmode="decimal"><span id="numUnit" style="position:absolute;right:14px;color:var(--text2)"></span></div><button class="btn filled v-default block" id="numSave"></button></form>`);
  mkDialog("dlgResults", t("results"), `<div id="resultsBody"></div><button class="btn filled v-default block" id="resultsClose" style="margin-top:14px"></button>`);
  $("#resultsClose").onclick = () => dialogs.dlgResults.close();
$("#btnAddBot").onclick = () => send("addbot");
$("#btnLeave").onclick = () => { dialogs.dlgSettings.close(); S.leaving = true; S.ws?.close(); };
  $("#btnAddBot").textContent = t("addBot"); $("#chatSend").textContent = t("sendChat"); $("#chatin").placeholder = t("say");
  $("#btnLeave").textContent = t("leave"); $("#numSave").textContent = t("save"); $("#resultsClose").textContent = t("close");
  $("#title").textContent = t("title"); $("#lblAddr").textContent = t("addr"); $("#lblName").textContent = t("name"); $("#addrNote").textContent = t("addrNote"); $("#trustNote").textContent = t("trustNote"); $("#trustLink").textContent = t("trustOpen"); $("#btnShared").textContent = t("shared"); document.querySelectorAll(".lnkServer").forEach(a => a.textContent = t("getServer"));
  $("#addr").value = store.get("loto.addr") || ""; $("#name").value = store.get("loto.name") || "";
  const hero = $("#heroBall");
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(() => { hero.textContent = 1 + Math.floor(Math.random() * 90); hero.classList.remove("pop"); void hero.offsetWidth; hero.classList.add("pop"); }, 2200);
  renderConnect();
})();


/* =====================================================================
   CANVAS LAYER — nền hội chợ, bi số, tờ dò, pháo giấy
   ===================================================================== */
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FONT = '"Barlow Condensed", "Roboto Condensed", "Arial Narrow", sans-serif';
const TAU = Math.PI * 2;
const alpha = (h, a) => { const [r, g, b] = rgb(h); return `rgba(${r},${g},${b},${a})`; };
function fit(cv, w, h) {
  const r = Math.min(devicePixelRatio || 1, 2), W = Math.round(w * r), H = Math.round(h * r);
  if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
  const c = cv.getContext("2d"); c.setTransform(r, 0, 0, r, 0, 0); return c;
}
function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }

/* nền: số lô tô trôi lên như đèn lồng + pháo giấy */
const bgCv = $("#bg"), sparks = [];
function burst(big) {
  if (REDUCED || !P) return;
  const r = $("#ball").getBoundingClientRect(), ox = big ? innerWidth / 2 : r.left + r.width / 2, oy = big ? innerHeight * 0.3 : r.top + r.height / 2;
  for (let i = 0; i < (big ? 110 : 14); i++) {
    const a = Math.random() * TAU, v = (big ? 3 : 1.6) + Math.random() * (big ? 6 : 2.5);
    sparks.push({ x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - (big ? 3 : 1), life: 1, s: 2 + Math.random() * 3, c: [P.accent, P.crimson, P.primary, CREAM][i % 4] });
  }
}
function paintBg(t) {
  if (!P) return;
  const w = innerWidth, h = innerHeight, c = fit(bgCv, w, h);
  c.clearRect(0, 0, w, h);
  for (let i = sparks.length - 1; i >= 0; i--) {
    const s = sparks[i]; s.x += s.vx; s.y += s.vy; s.vy += 0.16; s.vx *= 0.99; s.life -= 0.012;
    if (s.life <= 0) { sparks.splice(i, 1); continue; }
    c.globalAlpha = s.life; c.fillStyle = s.c; c.fillRect(s.x, s.y, s.s, s.s * 1.6);
  }
  c.globalAlpha = 1;
}

/* bi số: khối cầu có dải trắng, gạch chân 6/9 như bi thật */
function drawBall() {
  const cv = $("#ballCv"); if (!cv || !P) return;
  const s = Math.round($("#ball").getBoundingClientRect().width) || 76, c = fit(cv, s, s), m = s / 2, R = m - 4;
  c.clearRect(0, 0, s, s);
  c.save(); c.shadowColor = "rgba(0,0,0,.35)"; c.shadowBlur = 8; c.shadowOffsetY = 3;
  const ball = S.skin === "trang" ? P.crimson : P.accent, g = c.createRadialGradient(m - R * 0.35, m - R * 0.4, R * 0.1, m, m, R);
  g.addColorStop(0, mix(ball, "#ffffff", 0.5)); g.addColorStop(0.55, ball); g.addColorStop(1, darken(ball, 0.4));
  c.fillStyle = g; c.beginPath(); c.arc(m, m, R, 0, TAU); c.fill(); c.restore();
  c.fillStyle = CREAM; c.beginPath(); c.arc(m, m, R * 0.64, 0, TAU); c.fill();
  c.strokeStyle = alpha(darken(P.accent, 0.4), 0.55); c.lineWidth = 1.5; c.stroke();
  const txt = S.last == null ? "?" : String(S.last);
  c.fillStyle = INK; c.textAlign = "center"; c.textBaseline = "middle"; c.font = `700 ${R * (txt.length > 1 ? 0.82 : 0.95)}px ${FONT}`;
  c.fillText(txt, m, m + R * 0.05);
  if (/[69]/.test(txt)) { const tw = c.measureText(txt).width; c.fillRect(m - tw / 2, m + R * 0.42, tw, 2); }
  c.fillStyle = "rgba(255,255,255,.55)"; c.beginPath(); c.ellipse(m - R * 0.38, m - R * 0.6, R * 0.22, R * 0.11, -0.6, 0, TAU); c.fill();
}

/* tờ dò: giấy, lưới, dấu đỏ đóng lên khi dò, hàng đủ thì sáng nhịp */
const TK = { id: null, seen: new Set(), stamps: new Map(), page: null, marked: new Set(), ro: true, anim: false };
function mountTicket(page, marked, ro) {
  if (!$("#tk")) return;
  const now = performance.now();
  if (TK.id !== page.id) { TK.id = page.id; TK.seen = new Set(marked); TK.stamps.clear(); }
  else {
    for (const n of marked) if (!TK.seen.has(n)) { TK.seen.add(n); TK.stamps.set(n, now); }
    for (const n of [...TK.seen]) if (!marked.has(n)) { TK.seen.delete(n); TK.stamps.delete(n); }
  }
  Object.assign(TK, { page, marked, ro });
  TK.anim = drawTicket(now);
}
const easeBack = x => 1 + 2.7 * (x - 1) ** 3 + 1.7 * (x - 1) ** 2;
function geo(cv) { const cw = cv.clientWidth / 9, ch = cw * 0.95, gap = 7, rows = TK.page.grid.length; return { cw, ch, gap, rows, nb: Math.ceil(rows / 3), W: cv.clientWidth }; }
function drawTicket(t) {
  const cv = $("#tk"); if (!cv || !TK.page || !P) return false;
  const { cw, ch, gap, rows, nb, W } = geo(cv), H = rows * ch + (nb - 1) * gap;
  cv.style.height = H + "px";
  const c = fit(cv, W, H), { page, marked } = TK, bg = DARK ? mix(page.bg, "#000000", 0.16) : page.bg;
  const ink = onSolid(bg), frame = readable(bg), blank = darken(bg, 0.12), markInk = onSolid(P.crimson);
  let anim = false;
  c.clearRect(0, 0, W, H); c.textAlign = "center"; c.textBaseline = "middle";
  for (let b = 0; b < nb; b++) {
    const n = Math.min(3, rows - b * 3), y0 = b * (3 * ch + gap), bh = n * ch;
    c.save(); rr(c, 0, y0, W, bh, 3); c.clip();
    c.fillStyle = bg; c.fillRect(0, y0, W, bh);
    const sg = c.createLinearGradient(0, y0, 0, y0 + bh); sg.addColorStop(0, "rgba(255,255,255,.2)"); sg.addColorStop(1, "rgba(0,0,0,.07)");
    c.fillStyle = sg; c.fillRect(0, y0, W, bh);
    for (let r = 0; r < n; r++) {
      const row = page.grid[b * 3 + r], y = y0 + r * ch, full = rowFull(row, marked);
      for (let i = 0; i < 9; i++) {
        const v = row[i], x = i * cw;
        if (!v) {
          c.save(); c.beginPath(); c.rect(x, y, cw, ch); c.clip(); c.fillStyle = blank; c.fillRect(x, y, cw, ch);
          c.strokeStyle = alpha(ink, 0.13); c.lineWidth = 1; c.beginPath();
          for (let k = -ch; k < cw; k += 7) { c.moveTo(x + k, y + ch); c.lineTo(x + k + ch, y); }
          c.stroke(); c.restore(); continue;
        }
        const cx = x + cw / 2, cy = y + ch / 2;
        if (marked.has(v)) {
          const age = (t - (TK.stamps.get(v) ?? -1e9)) / 280, k = REDUCED ? 1 : easeBack(Math.min(1, age)); if (age < 1) anim = true;
          c.save(); c.translate(cx, cy); c.rotate(((v * 37) % 11 - 5) * 0.025); c.scale(k, k);
          c.fillStyle = alpha(P.crimson, 0.93); c.beginPath(); c.ellipse(0, 0, ch * 0.44, ch * 0.41, 0, 0, TAU); c.fill();
          c.strokeStyle = alpha("#ffffff", 0.35); c.lineWidth = 1.5; c.beginPath(); c.ellipse(0, 0, ch * 0.36, ch * 0.33, 0, 0, TAU); c.stroke();
          c.restore();
          c.fillStyle = markInk;
        } else c.fillStyle = ink;
        c.font = `700 ${Math.min(22, Math.max(15, W * 0.053))}px ${FONT}`; c.fillText(v, cx, cy + 1);
      }
      c.strokeStyle = alpha(ink, 0.4); c.lineWidth = 0.5; c.beginPath();
      for (let i = 1; i < 9; i++) { c.moveTo(i * cw, y); c.lineTo(i * cw, y + ch); }
      if (r) { c.moveTo(0, y); c.lineTo(W, y); }
      c.stroke();
      if (full) {
        const pulse = REDUCED ? 0.18 : 0.14 + 0.1 * Math.sin(t / 260); anim = !REDUCED || anim;
        c.fillStyle = alpha(P.accent, pulse); c.fillRect(0, y, W, ch);
        c.strokeStyle = alpha(P.accent, 0.9); c.lineWidth = 2; c.strokeRect(1, y + 1, W - 2, ch - 2);
      }
    }
    c.restore();
    c.strokeStyle = frame; c.lineWidth = 2; rr(c, 1, y0 + 1, W - 2, bh - 2, 3); c.stroke();
  }
  return anim;
}
function cellAt(e) {
  const cv = $("#tk"), r = cv.getBoundingClientRect(), { cw, ch, gap } = geo(cv), x = e.clientX - r.left, y = e.clientY - r.top;
  const b = Math.floor(y / (3 * ch + gap)), yy = y - b * (3 * ch + gap);
  if (yy >= 3 * ch) return null;
  return TK.page.grid[b * 3 + Math.floor(yy / ch)]?.[Math.floor(x / cw)] || null;
}
document.addEventListener("click", e => {
  if (e.target.id !== "tk" || TK.ro || !TK.page) return;
  const v = cellAt(e), id = TK.page.id; if (!v || S.autoMark.has(id)) return;
  const cur = new Set(S.marks.get(id) || []); cur.has(v) ? cur.delete(v) : cur.add(v); S.marks.set(id, cur);
  navigator.vibrate?.(8); draw();
});

/* mount sau mỗi lần dựng DOM của tờ */
function drawPages() {
  drawPagesDom();
  const mine = !S.viewing, pages = mine ? S.pages : S.viewed, page = pages[S.cur];
  if (page && $("#tk")) mountTicket(page, mine ? marksOf(page) : drawnSet(), !mine);
}
(function tick(t) { paintBg(REDUCED ? 0 : t); if (TK.anim) TK.anim = drawTicket(t); requestAnimationFrame(tick); })(0);
addEventListener("resize", () => { drawBall(); if ($("#tk")) TK.anim = drawTicket(performance.now()); });
document.fonts?.ready.then(() => { drawBall(); draw(); });

(() => {
  const D = window.MJ;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wa = (text) => `https://wa.me/${D.whatsapp}?text=${encodeURIComponent(text)}`;
  const icon = {
    pin: '<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    cal: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/></svg>',
    wa: '<svg viewBox="0 0 32 32" class="ico-wa"><path fill="currentColor" stroke="none" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-1-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.5 6.5 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.7 5c2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.2-.7-.4z"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    hotel: '<svg viewBox="0 0 24 24"><path d="M2 20V8M2 12h20v8M22 16H2"/><circle cx="7" cy="9" r="2"/><path d="M11 12V9h8a3 3 0 0 1 3 3"/></svg>',
    meals: '<svg viewBox="0 0 24 24"><path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7"/></svg>',
    cab: '<svg viewBox="0 0 24 24"><path d="M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M3 17v-5l2-5h14l2 5v5M3 12h18"/></svg>',
    tours: '<svg viewBox="0 0 24 24"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
    visa: '<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 17h8"/></svg>',
    permits: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg>',
  };
  const PERK_LABEL = { hotel: "Hotels", meals: "Meals", cab: "Transfers", tours: "Sightseeing", visa: "Visa help", permits: "Permits" };
  const via = where => `\n(via website: ${where})`;   // tells you which section produced the lead

  /* ---------- Preloader ---------- */
  const finishLoad = () => {
    $("#preloader")?.classList.add("is-done");
    document.body.classList.add("is-loaded");
  };
  if (reduced || !$("#preloader") || document.readyState === "complete") finishLoad();
  else window.addEventListener("load", () => setTimeout(finishLoad, 1500));
  setTimeout(finishLoad, 4000); // safety net on slow networks

  /* ---------- Render: trending destinations (top 10 per tab + See more) ---------- */
  const DEST = Object.fromEntries(D.destinations.map(d => [d.id, d]));
  const INITIAL = D.destinationsInitial || 6;
  const destGrid = $("#destGrid"), moreBtn = $("#destMore");
  let destTab = "all", destOpen = false;
  const fadeIn = el => { el.classList.add("pending"); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("pending"))); };
  const destCard = (d, i) => {
    const cls = ["dest", "reveal", i === 0 && "dest--feature", i === 5 && "dest--wide", i === 9 && "dest--last", i >= INITIAL && "dest--extra"].filter(Boolean).join(" ");
    return `
    <a class="${cls}" style="--d:${(i % 4) * 0.06}s" href="${wa(`Hi Musafir Journeys! I'm interested in a ${d.name} trip. Please share options and a free quote.${via(`Trending Destinations – ${d.name}`)}`)}"
       target="_blank" rel="noopener" data-dest="${d.name}" aria-label="Get a free quote for ${d.name} on WhatsApp"${i >= INITIAL ? " hidden" : ""}>
      <img src="${d.img}" alt="${d.name} — ${d.tag}" loading="lazy" width="900" height="600">
      <span class="dest__rank">#${i + 1}</span>
      <div class="dest__body">
        <div class="dest__tag">${d.tag}</div>
        <div class="dest__name">${d.name}</div>
        <div class="dest__info">${icon.cal}<span>Best ${d.best.split(" · ")[0]}<span class="dest__days">${d.best.split(" · ").slice(1).map(s => ` · ${s}`).join("")} · ${d.days}</span></span></div>
        <div class="dest__from">${D.showPrices ? `<span>From <b>${d.from}</b> / person</span>` : `<span class="dest__cta">Get free quote</span>`}<span class="dest__go">${icon.wa}</span></div>
      </div>
    </a>`;
  };
  const extraCount = () => $$(".dest--extra", destGrid).length;
  const setMoreLabel = () => {
    moreBtn.setAttribute("aria-expanded", destOpen);
    moreBtn.classList.toggle("is-open", destOpen);
    $(".dest-more__label", moreBtn).textContent = destOpen ? "Show less" : `See more destinations (${extraCount()})`;
  };
  const renderDest = (animate) => {
    const list = (D.topLists[destTab] || []).map(id => DEST[id]).filter(Boolean);
    destGrid.innerHTML = list.map(destCard).join("");
    destOpen = false;
    moreBtn.parentElement.hidden = extraCount() === 0;
    setMoreLabel();
    if (animate && !reduced) $$(".dest:not([hidden])", destGrid).forEach(fadeIn);
  };
  renderDest(false);

  /* ---------- Render: packages ---------- */
  $("#pkgGrid").innerHTML = D.packages.map((p, i) => `
    <article class="pkg reveal" style="--d:${(i % 3) * 0.1}s">
      <div class="pkg__media">
        <img src="${p.img}" alt="${p.title}" loading="lazy" width="1200" height="900">
        <span class="pkg__badge">${p.badge}</span>
        <span class="pkg__dur">${icon.clock}${p.nights}</span>
      </div>
      <div class="pkg__body">
        <div class="pkg__place">${icon.pin}${p.place}</div>
        <h3 class="pkg__title">${p.title}</h3>
        <ul class="pkg__hl">${p.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join("")}</ul>
        <ul class="pkg__perks" aria-label="Included">${(p.perks || []).map(k => `<li>${icon[k] || icon.check}<span>${PERK_LABEL[k] || k}</span></li>`).join("")}</ul>
        <div class="pkg__meta">
          ${p.idealFor ? `<span>${icon.heart}Ideal for ${p.idealFor}</span>` : ""}
          <span>${icon.check}Fully customisable</span>
        </div>
        <div class="pkg__foot">
          ${D.showPrices ? `<div class="pkg__price"><small>Starting from</small><strong>${p.price}</strong><small>per person</small></div>` : ""}
          <div class="pkg__actions">
            <button class="pkg__btn pkg__btn--ghost" type="button" data-pkg="${i}">View details</button>
            <a class="pkg__btn pkg__btn--wa" target="_blank" rel="noopener"
               href="${wa(`Hi Musafir Journeys! I'm interested in the "${p.title}" (${p.nights}) package. Please share details and a free quote.${via("Packages")}`)}">${icon.wa}Get quote</a>
          </div>
        </div>
      </div>
    </article>`).join("");

  /* ---------- Promises row (trust signals instead of prices) ---------- */
  const promiseRow = $("#promises");
  if (promiseRow) promiseRow.innerHTML = (D.promises || []).map(t => `<li>${icon.check}<span>${t}</span></li>`).join("");

  /* ---------- Render: gallery ---------- */
  $("#gallery-grid").innerHTML = D.gallery.map((g, i) => `
    <button class="gallery__item reveal" style="--d:${(i % 4) * 0.08}s" data-idx="${i}" data-cap="${g.cap}" aria-label="Open photo: ${g.cap}">
      <img src="${g.img}" alt="${g.cap}" loading="lazy" width="1000" height="1250">
    </button>`).join("");

  /* ---------- Render: testimonials ---------- */
  $("#tTrack").innerHTML = D.testimonials.map((t, i) => `
    <figure class="tcard" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${D.testimonials.length}">
      <div class="tcard__quote" aria-hidden="true">“</div>
      <div class="tcard__stars" aria-label="${t.stars} out of 5 stars">${icon.star.repeat(t.stars)}</div>
      <blockquote class="tcard__text">${t.text}</blockquote>
      <figcaption class="tcard__who"><span class="tcard__av">${t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</span>
        <span><strong>${t.name}</strong><span>${t.trip}</span></span></figcaption>
    </figure>`).join("");

  /* ---------- Render: FAQ ---------- */
  $("#accordion").innerHTML = D.faqs.map((f, i) => `
    <div class="acc reveal" style="--d:${i * 0.06}s">
      <button class="acc__btn" aria-expanded="false" aria-controls="acc-${i}" id="accb-${i}">${f.q}<span class="acc__icon">${icon.plus}</span></button>
      <div class="acc__panel" id="acc-${i}" role="region" aria-labelledby="accb-${i}"><div><p>${f.a}</p></div></div>
    </div>`).join("");

  /* ---------- Header: scrolled / hide on scroll down ---------- */
  const header = $("#header"), progress = $("#scrollProgress"), toTop = $("#toTop");
  let lastY = 0, ticking = false;
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    header.classList.toggle("is-hidden", y > 600 && y > lastY && !header.classList.contains("menu-open"));
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    toTop.classList.toggle("is-visible", y > 900);
    if (!reduced) $$("[data-parallax]").forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      el.style.transform = `translate3d(0, ${(r.top + r.height / 2 - innerHeight / 2) * -0.15}px, 0)`;
    });
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));

  /* ---------- Mobile nav ---------- */
  const burger = $("#burger"), nav = $("#nav");
  const setMenu = (open) => {
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("no-scroll", open);
  };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  $$(".nav__link").forEach(a => a.addEventListener("click", () => setMenu(false)));

  /* ---------- Active nav link ---------- */
  const links = $$(".nav__link");
  const secObs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(l => { const s = $(l.getAttribute("href")); s && secObs.observe(s); });

  /* ---------- Reveal on scroll ---------- */
  const revObs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.remove("pending"); revObs.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  // Only below-the-fold elements start hidden, so the first frame (and link previews) is always complete.
  $$(".reveal").forEach(el => {
    if (!reduced && el.getBoundingClientRect().top > innerHeight) { el.classList.add("pending"); revObs.observe(el); }
  });

  /* ---------- Hero slideshow ---------- */
  const slides = $$(".hero__slide"), dots = $("#heroDots"), place = $("#heroPlace");
  let cur = 0, timer;
  dots.innerHTML = slides.map((s, i) => `<button role="tab" aria-selected="${i === 0}" aria-label="Show ${s.dataset.place}"></button>`).join("");
  const go = (n) => {
    slides[cur].classList.remove("is-active");
    cur = (n + slides.length) % slides.length;
    const s = slides[cur];
    s.classList.remove("is-active"); void s.offsetWidth; s.classList.add("is-active");
    place.textContent = s.dataset.place;
    $$("button", dots).forEach((d, i) => d.setAttribute("aria-selected", i === cur));
  };
  const auto = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => go(cur + 1), 6500); };
  $$("button", dots).forEach((d, i) => d.addEventListener("click", () => { go(i); auto(); }));
  auto();

  /* ---------- Hero mouse parallax ---------- */
  const heroContent = $(".hero__content");
  if (!reduced && matchMedia("(hover:hover)").matches) {
    $(".hero").addEventListener("mousemove", e => {
      const x = (e.clientX / innerWidth - 0.5), y = (e.clientY / innerHeight - 0.5);
      heroContent.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
    });
  }

  /* ---------- Counters ---------- */
  const cObs = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    const t0 = performance.now(), dur = reduced ? 0 : 1600;
    const step = (t) => {
      const p = dur ? Math.min(1, (t - t0) / dur) : 1;
      el.textContent = pre + Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    cObs.unobserve(el);
  }), { threshold: 0.6 });
  $$("[data-count]").forEach(el => cObs.observe(el));

  /* ---------- Destination tabs + See more ---------- */
  $$(".tab").forEach(tab => tab.addEventListener("click", () => {
    if (tab.dataset.filter === destTab) return;
    $$(".tab").forEach(t => { t.classList.toggle("is-active", t === tab); t.setAttribute("aria-selected", t === tab); });
    destTab = tab.dataset.filter;
    renderDest(true);
  }));
  moreBtn.addEventListener("click", () => {
    destOpen = !destOpen;
    $$(".dest--extra", destGrid).forEach(el => { el.hidden = !destOpen; if (destOpen && !reduced) fadeIn(el); });
    setMoreLabel();
    if (!destOpen && destGrid.getBoundingClientRect().top < 0) destGrid.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  });
  destGrid.addEventListener("click", e => { const a = e.target.closest(".dest"); if (a) $("#e-dest").value = a.dataset.dest; });

  /* ---------- Trip finder "Where to?" smart search ----------
     Suggests our destinations as you type (grouped India / International),
     and always lets the visitor use whatever they typed. */
  const dIn = $("#f-dest"), dList = $("#f-dest-list"), dClear = $(".combo__clear");
  const dAll = [...D.destinations].sort((a, b) => a.name.localeCompare(b.name));
  const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
  const mark = (name, q) => {
    const i = q ? norm(name).indexOf(norm(q)) : -1;
    return i < 0 ? esc(name) : esc(name.slice(0, i)) + "<mark>" + esc(name.slice(i, i + q.length)) + "</mark>" + esc(name.slice(i + q.length));
  };
  const pinIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>';
  const penIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
  let dItems = [], dActive = -1;

  const paintActive = () => {
    $$(".combo__opt", dList).forEach(li => {
      const on = +li.dataset.i === dActive;
      li.classList.toggle("is-active", on); li.setAttribute("aria-selected", on);
      if (on) li.scrollIntoView({ block: "nearest" });
    });
    dActive >= 0 ? dIn.setAttribute("aria-activedescendant", `f-dest-opt-${dActive}`) : dIn.removeAttribute("aria-activedescendant");
  };
  const renderCombo = () => {
    const q = dIn.value.trim(), nq = norm(q);
    const hit = d => !nq || norm(`${d.name} ${d.tag}`).includes(nq);
    let html = ""; dItems = [];
    const opt = (value, inner, extra = "") => {
      const i = dItems.push(value) - 1;
      return `<li role="option" id="f-dest-opt-${i}" class="combo__opt${extra}" data-i="${i}" aria-selected="false">${inner}</li>`;
    };
    if (q && !dAll.some(d => norm(d.name) === nq)) html += opt(q, `${penIcon}<span><span class="combo__name">Use “<b>${esc(q)}</b>”</span><small>Any place works — we plan it for you</small></span><kbd>Enter</kbd>`, " combo__opt--custom");
    [["India", "india"], ["International", "intl"]].forEach(([label, region]) => {
      const list = dAll.filter(d => d.region === region && hit(d));
      if (!list.length) return;
      html += `<li role="presentation" class="combo__group">${label}</li>`;
      list.forEach(d => { html += opt(d.name, `${pinIcon}<span><span class="combo__name">${mark(d.name, q)}</span><small>${esc(d.tag)}</small></span>`); });
    });
    dList.innerHTML = html;
    dActive = q ? 0 : -1; paintActive();
  };
  const openCombo = () => { renderCombo(); dList.hidden = false; dIn.setAttribute("aria-expanded", "true"); };
  const closeCombo = () => { dList.hidden = true; dIn.setAttribute("aria-expanded", "false"); dActive = -1; dIn.removeAttribute("aria-activedescendant"); };
  const syncClear = () => { dClear.hidden = !dIn.value; };
  const choose = i => { dIn.value = dItems[i]; syncClear(); closeCombo(); };

  dIn.addEventListener("focus", openCombo);
  dIn.addEventListener("click", () => { if (dList.hidden) openCombo(); }); // reopen after Esc / a pick
  dIn.addEventListener("input", () => { syncClear(); openCombo(); });
  dIn.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (dList.hidden) return openCombo();
      const n = dItems.length; if (!n) return;
      dActive = e.key === "ArrowDown" ? (dActive + 1) % n : (dActive - 1 + n) % n; paintActive();
    } else if (e.key === "Enter" && !dList.hidden && dActive >= 0) {
      e.preventDefault(); choose(dActive);
    } else if (e.key === "Escape" && !dList.hidden) {
      e.preventDefault(); closeCombo();
    } else if (e.key === "Tab") closeCombo();
  });
  dList.addEventListener("mousedown", e => e.preventDefault()); // keep focus in the box while picking
  dList.addEventListener("click", e => { const li = e.target.closest(".combo__opt"); if (li) choose(+li.dataset.i); });
  dClear.addEventListener("click", () => { dIn.value = ""; syncClear(); dIn.focus(); openCombo(); });
  document.addEventListener("pointerdown", e => { if (!e.target.closest(".finder__field--dest")) closeCombo(); });

  /* ---------- 3D tilt on package cards ---------- */
  if (!reduced && matchMedia("(hover:hover)").matches) {
    $$(".pkg").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------- Modal helpers ---------- */
  let lastFocus;
  const openLayer = (el) => {
    lastFocus = document.activeElement;
    el.hidden = false; document.body.classList.add("no-scroll");
    ($("[data-close].modal__close, .lightbox__close", el) || el).focus();
  };
  const closeLayer = (el) => {
    el.hidden = true; document.body.classList.remove("no-scroll");
    const v = $("video", el); v && v.pause();
    lastFocus && lastFocus.focus();
  };
  $$(".modal, .lightbox").forEach(m => {
    m.addEventListener("click", e => { if (e.target.closest("[data-close]") || e.target === m) closeLayer(m); });
  });
  addEventListener("keydown", e => {
    const open = $$(".modal, .lightbox").find(m => !m.hidden);
    if (!open) return;
    if (e.key === "Escape") closeLayer(open);
    if (open.id === "lightbox") { if (e.key === "ArrowRight") showLb(lbIdx + 1); if (e.key === "ArrowLeft") showLb(lbIdx - 1); }
    if (e.key === "Tab") { // focus trap
      const f = $$("button, a[href], video, input", open).filter(x => !x.hidden && x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
      else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
    }
  });

  /* ---------- Package modal ---------- */
  const pm = $("#pkgModal");
  $("#pkgGrid").addEventListener("click", e => {
    const b = e.target.closest("[data-pkg]"); if (!b) return;
    const p = D.packages[+b.dataset.pkg];
    $("#pmImg").style.backgroundImage = `url('${p.img}')`;
    $("#pmMeta").textContent = `${p.nights} · ${p.place}`;
    $("#pmTitle").textContent = p.title;
    $("#pmPrice").innerHTML = D.showPrices
      ? `${p.price} <small>per person</small>`
      : `<span class="modal__por">Price on request</span><small>Customised to your dates, hotels &amp; group size — free quote, no obligation.</small>`;
    $("#pmHl").innerHTML = p.highlights.map(h => `<li>${h}</li>`).join("");
    $("#pmDays").innerHTML = p.days.map(d => `<li>${d}</li>`).join("");
    $("#pmInc").innerHTML = p.inc.map(h => `<li>${h}</li>`).join("");
    $("#pmCta").href = wa(`Hi Musafir Journeys! I'm interested in the "${p.title}" (${p.nights}) package. Please share details and a free quote.${via("Package details")}`);
    pm.dataset.pkg = p.title;
    $("#pmCb").hidden = true; $("#pmCbToggle").setAttribute("aria-expanded", "false"); $("#pmCbNote").innerHTML = "";
    openLayer(pm);
  });

  /* ---------- Request a callback (inside package details) ---------- */
  $("#pmCbToggle").addEventListener("click", () => {
    const f = $("#pmCb"), open = f.hidden;
    f.hidden = !open; $("#pmCbToggle").setAttribute("aria-expanded", open);
    if (open) $("#cb-name").focus();
  });
  $("#pmCb").addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#cb-name"), phone = $("#cb-phone");
    const bad = !name.value.trim() ? name : phone.value.replace(/\D/g, "").length < 10 ? phone : null;
    $$("#pmCb input").forEach(i => i.setAttribute("aria-invalid", i === bad));
    if (bad) { $("#pmCbNote").innerHTML = `<span class="err">${bad === name ? "Please enter your name." : "Enter a valid 10-digit mobile number."}</span>`; bad.focus(); return; }
    sendWA(`Hi Musafir Journeys! Please call me back about the "${pm.dataset.pkg}" package.\nName: ${name.value.trim()}\nPhone: ${phone.value.trim()}\nBest time to call: ${$("#cb-time").value}${via("Request a callback")}`, $("#pmCbNote"));
    $("#pmCb").reset();
  });

  /* ---------- Gallery lightbox ---------- */
  const lb = $("#lightbox"); let lbIdx = 0;
  const showLb = (i) => {
    lbIdx = (i + D.gallery.length) % D.gallery.length;
    const g = D.gallery[lbIdx];
    const img = $("#lbImg"); img.style.animation = "none"; void img.offsetWidth; img.style.animation = "";
    img.src = g.img.replace("w=1000", "w=1800"); img.alt = g.cap; $("#lbCap").textContent = g.cap;
  };
  $("#gallery-grid").addEventListener("click", e => {
    const b = e.target.closest("[data-idx]"); if (!b) return;
    showLb(+b.dataset.idx); openLayer(lb);
  });
  $(".lightbox__prev").addEventListener("click", () => showLb(lbIdx - 1));
  $(".lightbox__next").addEventListener("click", () => showLb(lbIdx + 1));

  /* ---------- Video modal ---------- */
  const vm = $("#videoModal");
  $$("[data-video-open]").forEach(b => b.addEventListener("click", () => {
    openLayer(vm);
    const v = $("#storyVideo"); v.currentTime = 0;
    v.play().catch(() => {}); // start straight away; controls remain if the browser blocks autoplay
  }));

  /* ---------- Testimonials carousel ---------- */
  const track = $("#tTrack"), tDots = $("#tDots"), n = D.testimonials.length; let ti = 0, tTimer;
  tDots.innerHTML = D.testimonials.map((t, i) => `<button aria-label="Show review ${i + 1}" aria-current="${i === 0}"></button>`).join("");
  const tGo = (i) => {
    ti = (i + n) % n;
    track.style.transform = `translateX(-${ti * 100}%)`;
    $$("button", tDots).forEach((d, k) => d.setAttribute("aria-current", k === ti));
  };
  const tAuto = () => { clearInterval(tTimer); if (!reduced) tTimer = setInterval(() => tGo(ti + 1), 7000); };
  $("#tPrev").addEventListener("click", () => { tGo(ti - 1); tAuto(); });
  $("#tNext").addEventListener("click", () => { tGo(ti + 1); tAuto(); });
  $$("button", tDots).forEach((d, i) => d.addEventListener("click", () => { tGo(i); tAuto(); }));
  $("#tcarousel").addEventListener("mouseenter", () => clearInterval(tTimer));
  $("#tcarousel").addEventListener("mouseleave", tAuto);
  let sx = 0; // swipe
  track.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) { tGo(ti + (dx < 0 ? 1 : -1)); tAuto(); } });
  tAuto();

  /* ---------- Accordion ---------- */
  $("#accordion").addEventListener("click", e => {
    const b = e.target.closest(".acc__btn"); if (!b) return;
    const item = b.parentElement, open = !item.classList.contains("is-open");
    $$(".acc", $("#accordion")).forEach(a => { a.classList.remove("is-open"); $(".acc__btn", a).setAttribute("aria-expanded", "false"); });
    item.classList.toggle("is-open", open); b.setAttribute("aria-expanded", open);
  });

  /* ---------- WhatsApp hand-off (falls back to a visible link if pop-ups are blocked) ---------- */
  const sendWA = (text, note = $("#enqNote")) => {
    const url = wa(text);
    let w = null;
    try { w = window.open(url, "_blank"); if (w) w.opener = null; } catch (_) {}
    note.innerHTML = w
      ? "Thank you! WhatsApp is opening with your details. Just hit send."
      : `Your message is ready. <a class="btn btn--gold btn--sm" href="${url}" target="_blank" rel="noopener">Open WhatsApp to send</a>`;
    return !!w;
  };

  /* ---------- Trip finder → WhatsApp ---------- */
  $("#finder").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const month = f.get("month") ? new Date(f.get("month") + "-01").toLocaleString("en-IN", { month: "long", year: "numeric" }) : "flexible dates";
    const ok = sendWA(`Hi Musafir Journeys! I'd like a quote.\nDestination: ${f.get("dest") || "Open to suggestions"}\nWhen: ${month}\nTravellers: ${f.get("pax")}${via("Trip finder")}`);
    if (!ok) { if (f.get("dest")) $("#e-dest").value = f.get("dest"); $("#enquiry").scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); }
  });

  /* ---------- Enquiry form → WhatsApp ---------- */
  const form = $("#enquiry");
  const validate = (input) => {
    const field = input.closest(".field"), err = $(".err", field);
    let msg = "";
    if (input.required && !input.value.trim()) msg = input.id === "e-name" ? "Please enter your name." : "Please enter a phone number we can WhatsApp.";
    else if (input.type === "tel" && input.value && input.value.replace(/\D/g, "").length < 10) msg = "Enter a valid 10-digit mobile number.";
    field.classList.toggle("has-error", !!msg); err.textContent = msg;
    input.setAttribute("aria-invalid", !!msg);
    return !msg;
  };
  $$("input[required]", form).forEach(i => i.addEventListener("blur", () => validate(i)));
  form.addEventListener("submit", e => {
    e.preventDefault();
    const req = $$("input[required]", form), bad = req.filter(i => !validate(i));
    if (bad.length) { bad[0].focus(); return; }
    const v = Object.fromEntries(new FormData(form));
    const txt = `Hi Musafir Journeys! New trip enquiry:\nName: ${v.name}\nPhone: ${v.phone}\nDestination: ${v.dest || "-"}\nDate: ${v.date || "flexible"}\nTravellers: ${v.pax}\nBudget/person: ${v.budget}\nNotes: ${v.msg || "-"}${via("Quote form")}`;
    sendWA(txt);
    form.reset();
  });

})();

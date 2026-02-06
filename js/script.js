:root {
  --forest-deep:#1f3a2e;
  --forest-sage:#7f9f8c;
  --wood-warm:#c9a25b;
  --cream:#f6f4ec;
}

* { box-sizing:border-box; margin:0; padding:0; }

body {
  font-family:Montserrat, sans-serif;
  background:radial-gradient(circle at top, #ffffff 0%, var(--cream) 60%);
  color:#1A2F25;
  overflow-x:hidden;
}

.scene {
  height:260vh;
  position:relative;
}

.scene::before {
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(to bottom, rgba(0,0,0,.15), transparent 30%, transparent 70%, rgba(0,0,0,.2));
  pointer-events:none;
}

.scene-inner {
  position:sticky;
  top:0;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:32px;
  text-align:center;
  padding:60px 20px;
  opacity:0;
  transform:translateY(60px) scale(.96);
  transition:opacity 1.2s ease, transform 1.2s cubic-bezier(.2,.8,.2,1);
}

.scene.active .scene-inner {
  opacity:1;
  transform:translateY(0) scale(1);
}

h1,h2 {
  font-family:'Cormorant Garamond', serif;
  color:var(--forest-deep);
  letter-spacing:.04em;
}

h1 { font-size:4.4rem; line-height:1.05; }
h2 { font-size:3.2rem; }

.eyebrow {
  text-transform:uppercase;
  letter-spacing:.2em;
  font-size:.75rem;
  opacity:.6;
}

.date { font-size:1.1rem; opacity:.7; }

.photo-frame {
  max-width:440px;
  border:1px solid rgba(201,162,91,.6);
  padding:14px;
  background:#fff;
  box-shadow:0 30px 80px rgba(0,0,0,.18);
  transform:translateY(20px);
}

.photo-frame img { width:100%; display:block; }

.cards {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:32px;
  max-width:960px;
}

.card {
  padding:36px 30px;
  border:1px solid rgba(201,162,91,.6);
  background:rgba(255,255,255,.9);
  backdrop-filter:blur(6px);
}

.faq { max-width:820px; text-align:left; }

.faq-item {
  margin-bottom:18px;
  border:1px solid rgba(127,159,140,.5);
  background:rgba(255,255,255,.85);
  backdrop-filter:blur(4px);
}

.faq-q {
  padding:18px 20px;
  font-family:'Cormorant Garamond',serif;
  font-size:1.4rem;
  cursor:pointer;
}

.faq-a {
  display:none;
  padding:20px;
  line-height:1.6;
}

.faq-item.active .faq-a { display:block; }

.rsvp {
  display:flex;
  gap:28px;
  flex-wrap:wrap;
  justify-content:center;
}

.btn {
  padding:18px 44px;
  border:1px solid var(--wood-warm);
  background:transparent;
  color:var(--forest-deep);
  text-decoration:none;
  font-family:'Cormorant Garamond',serif;
  font-size:1.25rem;
  transition:all .4s ease;
}

.btn:hover { background:var(--wood-warm); color:#fff; }

footer {
  height:140vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background:linear-gradient(to bottom, #1a2f25, #0f1e17);
  color:#8FAB93;
  gap:24px;
}

footer img { width:120px; opacity:.7; }

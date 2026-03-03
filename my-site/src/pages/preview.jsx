import React from 'react';
import Layout from '@theme/Layout';
import styles from './preview.module.css';

// ── Animoji SVG ──────────────────────────────────────────
function Animoji() {
  return (
    <svg
      className={styles.animoji}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* neck */}
      <rect x="82" y="148" width="36" height="28" rx="8" fill="#f5c99a" />
      {/* shoulders */}
      <ellipse cx="100" cy="190" rx="55" ry="22" fill="#3a3a5c" />

      {/* head */}
      <ellipse cx="100" cy="105" rx="52" ry="58" fill="#f5c99a" />

      {/* hair — straight, dark */}
      <ellipse cx="100" cy="60" rx="52" ry="28" fill="#1a1a2e" />
      <rect x="48" y="56" width="14" height="40" rx="6" fill="#1a1a2e" />
      <rect x="138" y="56" width="14" height="40" rx="6" fill="#1a1a2e" />
      <rect x="52" y="52" width="96" height="22" rx="4" fill="#1a1a2e" />
      {/* straight-cut fringe */}
      <rect x="56" y="70" width="88" height="12" rx="3" fill="#1a1a2e" />

      {/* ears */}
      <ellipse cx="49" cy="108" rx="9" ry="12" fill="#f5c99a" />
      <ellipse cx="151" cy="108" rx="9" ry="12" fill="#f5c99a" />

      {/* eyebrows */}
      <path d="M68 92 Q78 87 88 91" stroke="#2a1a0a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M112 91 Q122 87 132 92" stroke="#2a1a0a" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* spectacles — left frame */}
      <rect x="63" y="95" width="34" height="24" rx="8" fill="none" stroke="#2c2c3a" strokeWidth="2.5" />
      {/* spectacles — right frame */}
      <rect x="103" y="95" width="34" height="24" rx="8" fill="none" stroke="#2c2c3a" strokeWidth="2.5" />
      {/* bridge */}
      <line x1="97" y1="107" x2="103" y2="107" stroke="#2c2c3a" strokeWidth="2.2" />
      {/* left temple */}
      <line x1="63" y1="107" x2="54" y2="108" stroke="#2c2c3a" strokeWidth="2.2" strokeLinecap="round" />
      {/* right temple */}
      <line x1="137" y1="107" x2="146" y2="108" stroke="#2c2c3a" strokeWidth="2.2" strokeLinecap="round" />
      {/* lens tint */}
      <rect x="64.5" y="96.5" width="31" height="21" rx="7" fill="#b3d9f7" fillOpacity="0.25" />
      <rect x="104.5" y="96.5" width="31" height="21" rx="7" fill="#b3d9f7" fillOpacity="0.25" />

      {/* eyes */}
      <ellipse cx="80" cy="107" rx="7" ry="7.5" fill="white" />
      <ellipse cx="120" cy="107" rx="7" ry="7.5" fill="white" />
      <ellipse cx="81" cy="108" rx="4.5" ry="5" fill="#2a1a0a" />
      <ellipse cx="121" cy="108" rx="4.5" ry="5" fill="#2a1a0a" />
      {/* eye shine */}
      <circle cx="83" cy="105.5" r="1.5" fill="white" />
      <circle cx="123" cy="105.5" r="1.5" fill="white" />

      {/* nose */}
      <path d="M97 118 Q100 124 103 118" stroke="#d4956a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* mouth */}
      <path d="M87 133 Q100 141 113 133" stroke="#c07a5a" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* cheek blush */}
      <ellipse cx="68" cy="127" rx="10" ry="6" fill="#f7a88a" fillOpacity="0.3" />
      <ellipse cx="132" cy="127" rx="10" ry="6" fill="#f7a88a" fillOpacity="0.3" />
    </svg>
  );
}

// ── Content type card (About section right column) ───────
function ContentTypeCard({ title, subtitle }) {
  return (
    <div className={styles.contentType}>
      <div className={styles.ctDot} />
      <div>
        <div className={styles.ctText}>{title}</div>
        <div className={styles.ctSub}>{subtitle}</div>
      </div>
    </div>
  );
}

// ── Placeholder skeleton card (Work section) ─────────────
function PlaceholderCard({ label }) {
  return (
    <div className={styles.phCard}>
      <div className={styles.phTag}>{label}</div>
      <div className={`${styles.phLine} ${styles.phLineFull}`} />
      <div className={`${styles.phLine} ${styles.phLine80}`} />
      <div className={`${styles.phLine} ${styles.phLine60}`} />
      <div
        className={`${styles.phLineThin} ${styles.phLineFull}`}
        style={{ marginTop: '10px' }}
      />
      <div className={`${styles.phLineThin} ${styles.phLine80}`} />
      <div className={styles.phFooter}>Coming soon</div>
    </div>
  );
}

// ── Main page component ───────────────────────────────────
export default function Preview() {
  return (
    <Layout
      title="Home"
      description="Technical Writer — making the complex feel simple."
    >

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>

        {/* Left: copy */}
        <div className={styles.heroLeft}>
          <div className={styles.heroRole}>Technical Writer | Out-of-work Quiz Master</div>

          <h1 className={styles.heroH1}>
            Making the<br />
            complex<br />
            <em>feel simple.</em>
          </h1>

          <p className={styles.heroDesc}>
            I write documentation that gives people clarity — user guides,
            release notes, technical walkthroughs, and video content
            crafted to reduce friction and build understanding.
          </p>

          {/* Remove this note once you have your real copy ready */}
          <div className={styles.heroCopyNote}>
            ✏️ &nbsp;Copy placeholder — will be updated soon
          </div>

          <div className={styles.heroActions}>
            <a href="/work" className={styles.btnDark}>
              View my work →
            </a>
            <a href="/about" className={styles.btnOutline}>
              About me
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className={styles.heroRight}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarRing} />
            <div className={styles.avatarInner}>
              <Animoji />
            </div>
          </div>


        </div>

      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────── */}
      <section className={styles.aboutSection}>

        {/* Left: copy */}
        <div>
          <div className={styles.sectionLabel}>About me</div>

          <h2 className={styles.aboutH2}>
            Turning technical depth into <em>human clarity.</em>
          </h2>

          <p className={styles.aboutP}>
            I'm a technical writer with experience across user guides, release notes,
            technical documentation, and video content. I care about the reader's
            experience — not just what is conveyed, but how it lands.
          </p>

          <p className={styles.aboutP}>
            Right now I'm expanding into AI-enabled workflows and docs-as-code
            practices. This site is both a portfolio and a living experiment in
            those ideas.
          </p>

          <div className={styles.aboutTags}>
            <a href="/work?filter=technical-writing" className={styles.tagLink}>Technical Writing</a>
            <a href="/work?filter=content-strategy" className={styles.tagLink}>Content Strategy</a>
            <a href="/work?filter=docs-as-code" className={styles.tagLink}>Docs-as-Code</a>
            <a href="/work?filter=information-architecture" className={styles.tagLink}>Information Architecture</a>
            <a href="/work?filter=ai-workflows" className={styles.tagLink}>AI Workflows</a>
          </div>

          <a href="/about" className={styles.textLink}>
            Read more about me →
          </a>
        </div>

        {/* Right: content type cards */}
        <div className={styles.aboutRight}>
          <div className={styles.sectionLabel} style={{ marginBottom: '8px' }}>
            What I write
          </div>

          <ContentTypeCard
            title="User Guides"
            subtitle="Clear, task-based documentation"
          />
          <ContentTypeCard
            title="Release Notes"
            subtitle="Changelogs people actually read"
          />
          <ContentTypeCard
            title="Technical Guides"
            subtitle="Complex topics made accessible"
          />
          <ContentTypeCard
            title="Video Content"
            subtitle="Visual walkthroughs & scripts"
          />
        </div>

      </section>

      {/* ── WORK — coming soon ───────────────────────────── */}
      <section className={styles.workSection}>
        <div className={styles.workTop}>
          <div>
            <div className={styles.workLabel}>Work</div>
            <h2 className={styles.workH2}>
              Writing samples<br /><em>coming soon.</em>
            </h2>
          </div>
          <div className={styles.workComing}>
            Samples being curated — check back soon.
          </div>
        </div>

        <div className={styles.workGrid}>
          <PlaceholderCard label="User Guide" />
          <PlaceholderCard label="Release Notes" />
          <PlaceholderCard label="Technical Guide" />
        </div>
      </section>

    </Layout>
  );
}
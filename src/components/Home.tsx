import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import '@/styles/rolling-counter.css'

const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.:/+!?-&'
const scenes = [
  ['PORTFOLIO', 'Hi, I’m Warren.', 'I build with purpose.'],
  ['FLUTTER', 'From an idea to an app.', 'Built for people.'],
  ['WEB DEV', 'Interfaces with intention.', 'Code with purpose.'],
  ['POWER BI', 'Turning data into insight.', 'Making it useful.'],
  ['ARAH', 'Finding a way around campus.', 'One route at a time.'],
  ['LET’S TALK'.replace('’', "'"), 'Ready for the next opportunity.', 'Let’s build something.'],
].map(([word, caption, emphasis]) => ({ word: word.replace("'", ''), caption, emphasis }))
function centered(word: string) {
  return word.padStart(Math.floor((9 - word.length) / 2) + word.length).padEnd(9).slice(0, 9)
}
function Drum({ letter, order, spin }: { letter: string; order: number; spin: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const position = useRef(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const faces = Array.from(el.children) as HTMLElement[]
    const draw = (p: number) => {
      const whole = Math.floor(p), frac = p - whole
      const h = el.clientHeight / 1.62
      const radius = h / (2 * Math.sin(17 * Math.PI / 180))
      faces.forEach((face, i) => {
        const offset = i - 2
        const angle = (offset - frac) * 34 * Math.PI / 180
        face.textContent = alphabet[((whole + offset) % alphabet.length + alphabet.length) % alphabet.length]
        face.style.visibility = Math.abs(angle) >= Math.PI / 2 ? 'hidden' : 'visible'
        face.style.transform = `translateY(${radius * Math.sin(angle)}px) scaleY(${Math.max(0, Math.cos(angle))})`
      })
    }
    const start = position.current
    const targetChar = Math.max(0, alphabet.indexOf(letter))
    const currentChar = ((Math.round(start) % alphabet.length) + alphabet.length) % alphabet.length
    const distance = (targetChar - currentChar + alphabet.length) % alphabet.length + (spin === 0 ? 2 : 1) * alphabet.length
    const target = Math.round(start) + distance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      position.current = target; draw(target); return
    }
    const duration = Math.min(2200, 600 + distance * 22)
    const started = performance.now() + order * 75
    let frame = 0
    const tick = () => {
      const t = Math.max(0, Math.min(1, (performance.now() - started) / duration))
      const x = t - 1, c = 1.35
      const eased = 1 + (c + 1) * x * x * x + c * x * x
      position.current = start + distance * eased
      draw(position.current)
      if (t < 1) frame = requestAnimationFrame(tick)
      else { position.current = target; draw(target) }
    }
    tick()
    const resize = () => draw(position.current)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [letter, order, spin])
  return <span ref={ref} className="rc-drum" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <span className="rc-face" key={i} />)}</span>
}
export default function Home() {
  const [scene, setScene] = useState(0)
  const [spin, setSpin] = useState(0)
  const [paused, setPaused] = useState(false)
  const [clock, setClock] = useState('')
  const machine = useRef<HTMLDivElement>(null)
  const wheelTime = useRef(0)
  const advance = (delta = 1) => { setScene(s => (s + delta + scenes.length) % scenes.length); setSpin(s => s + 1) }
  useEffect(() => {
    const update = () => setClock(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Manila' }))
    update(); const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setTimeout(() => { setScene(s => (s + 1) % scenes.length); setSpin(s => s + 1) }, 3800)
    return () => window.clearTimeout(timer)
  }, [scene, spin, paused])
  const current = scenes[scene]
  return <div className="rc-page">
    <nav className="rc-nav" aria-label="Main navigation">
      <Link className="rc-logo" to="/">warren<span>®</span></Link>
      <div className="rc-links"><Link to="/projects">Work ↗</Link><Link to="/about">About</Link><Link to="/services">Skills</Link><Link to="/showcase">Showcase</Link><Link to="/testimonials">Experience</Link></div>
      <div className="rc-nav-right"><span className="rc-clock">PH {clock}</span><Link className="rc-contact" to="/contact">Let’s talk ↗</Link></div>
    </nav>
    <section className="rc-hero" aria-labelledby="rc-title" onPointerMove={e => {
      if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - .5, y = (e.clientY - rect.top) / rect.height - .5
      if (machine.current) machine.current.style.transform = `perspective(1400px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`
    }} onPointerLeave={() => { if (machine.current) machine.current.style.transform = '' }}>
      <h1 id="rc-title" className="rc-sr">Warren Malawae — Information Technology graduate and developer</h1>
      <div className="rc-kicker">Independent thinking. Purposeful building.</div>
      <div className="rc-machine" ref={machine}>
        <div className="rc-plate">NO. {String(scene + 1).padStart(3, '0')} / {String(scenes.length).padStart(3, '0')}</div>
        <div className="rc-counter-row">
          <button className="rc-counter" aria-label={`Counter reads ${current.word}. Spin to next scene`} onClick={() => advance()} onWheel={e => {
            if (performance.now() - wheelTime.current < 650 || Math.abs(e.deltaY) < 10) return
            wheelTime.current = performance.now(); advance(e.deltaY > 0 ? 1 : -1)
          }}>{Array.from(centered(current.word)).map((letter, i) => <Drum key={i} letter={letter} order={scene % 3 === 0 ? i : scene % 3 === 1 ? 8 - i : Math.abs(i - 4)} spin={spin} />)}</button>
          <a className="rc-slot" href={`${import.meta.env.BASE_URL}Warren_Malawae_Resume.pdf`} download aria-label="Download Warren’s résumé"><span className="rc-card"><span className="rc-chip" /><strong>WM</strong><span>WARREN MALAWAE<br />DEVELOPMENT DEPT.</span><b>RÉSUMÉ ↘</b></span></a>
        </div>
        <button className="rc-pull" aria-label="Spin to a random scene" onClick={() => { setScene(s => (s + 1 + Math.floor(Math.random() * (scenes.length - 1))) % scenes.length); setSpin(s => s + 1) }}><span /><small>PULL</small></button>
      </div>
      <p className="rc-caption" key={scene}>{current.caption}<br /><em>{current.emphasis}</em></p>
      <p className="rc-intro">{profile.hero.body}</p>
      <div className="rc-controls"><span>CLICK THE COUNTER TO SPIN</span><button onClick={() => setPaused(p => !p)} aria-pressed={paused}>{paused ? 'Resume rotation' : 'Pause rotation'}</button><a href={`${import.meta.env.BASE_URL}Warren_Malawae_Resume.pdf`} download>Download résumé ↗</a></div>
      <footer className="rc-rail"><span>WEB · MOBILE · DATA · AUTOMATION</span><div className="rc-progress" aria-label="Choose a scene">{scenes.map((s, i) => <button key={s.word} aria-label={`Show ${s.word}`} aria-current={i === scene ? 'step' : undefined} onClick={() => { setScene(i); setSpin(n => n + 1) }} className={i === scene ? 'active' : ''} />)}</div><a href="#rc-explore">SCROLL TO EXPLORE ↓</a></footer>
    </section>
    <section className="rc-explore" id="rc-explore"><span className="rc-kicker">Beyond the counter / Warren Malawae</span><h2>Built with <em>purpose.</em></h2><div className="rc-tiles">{[['/projects', '01', 'Selected work', 'Explore my projects and the problems behind them.'], ['/services', '02', 'Technical toolkit', 'The tools and skills I bring to development.'], ['/about', '03', 'A little about me', 'My background, learning, and approach.'], ['/testimonials', '04', 'Experience', 'My internship work and community involvement.'], ['/contact', '05', 'Start a conversation', 'Have an opportunity or an idea? Let’s talk.']].map(([href, number, title, body]) => <Link key={href} to={href}><span>{number} / EXPLORE ↗</span><h3>{title}</h3><p>{body}</p></Link>)}</div></section>
  </div>
}

import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import { resumeUrl } from '@/data/portfolio'
import QuickMenu from './QuickMenu'
import HomeBento from './HomeBento'
export function HomeProfile(){return <header className="hprofile"><span className="wm-initials" aria-hidden="true">WM</span><div className="hprofile__who"><span className="hprofile__name">{profile.name}</span><span className="hprofile__handle">Personal portfolio</span></div><QuickMenu className="hprofile__menu"/></header>}
export function HomeStats(){return <div className="wm-mobile-actions"><a href={resumeUrl} download className="wm-button">Download resume</a><Link to="/contact" className="wm-text-link">Contact me</Link></div>}
export function HomeExplore(){return <HomeBento/>}

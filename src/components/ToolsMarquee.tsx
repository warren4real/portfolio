const names = ['Flutter', 'Dart', 'ASP.NET Core', 'Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Git/GitHub', 'SQL']
export const tools = names.map(name => ({name,iconPath:''}))
export default function ToolsMarquee(){return <section className="tools-marquee" aria-label="Technical toolkit"><div className="tools-marquee__track" aria-hidden="true">{[...names,...names].map((n,i)=><div className="tools-marquee__item" key={i}><span>{n}</span></div>)}</div><ul className="sr-only">{names.map(n=><li key={n}>{n}</li>)}</ul></section>}

export const resumeUrl = `${import.meta.env.BASE_URL}Warren_Malawae_Resume.pdf`
export const projects = [
  {
    id: 'arah', name: 'ARAH', subtitle: 'Campus navigation for AUP',
    type: 'Capstone · Team leader', date: 'Aug 2025 – Feb 2026',
    status: 'Academic project', platform: 'Android APK · iOS via PWA',
    summary: 'A campus navigation application that helps people find buildings and routes within Adventist University of the Philippines.',
    contribution: 'Led the capstone team and worked on Flutter development and campus route finding.',
    details: ['Used Nominatim and OpenStreetMap for place lookup, with Dijkstra’s and A* algorithms for routing.', 'Provided step-by-step navigation and building information through “Know More About Your Campus.”', 'Scoped navigation to AUP, with building updates managed by administrators and staff. The iOS PWA requires an internet connection.'],
    tags: ['Flutter', 'Dart', 'Nominatim', 'OpenStreetMap', 'Dijkstra', 'A*'], code: '01', color: '#476c70',
  },
  {
    id: 'inventory', name: 'Inventory management', subtitle: 'Products, search and reporting',
    type: 'Internship · Business application', date: 'Jul – Dec 2025',
    status: 'Internship project', platform: 'Web application',
    summary: 'An ASP.NET Core MVC application for maintaining product records and finding inventory information.',
    contribution: 'Developed product management screens and controller actions using ASP.NET Core and Visual Studio.',
    details: ['Implemented product creation, viewing, editing and deletion.', 'Added search, category filtering and pagination to help navigate product records.', 'Built CSV export for working with inventory data outside the application.'],
    tags: ['ASP.NET Core MVC', 'C#', 'Visual Studio', 'CSV export'], code: '02', color: '#726184',
  },
  {
    id: 'power-platform', name: 'Business workflows', subtitle: 'Leave requests, approvals and dashboards',
    type: 'Internship · Microsoft Power Platform', date: 'Jul – Dec 2025',
    status: 'Internship project', platform: 'Power Platform · SharePoint',
    summary: 'Application, automation and reporting work completed during my software internship.',
    contribution: 'Built leave request screens, connected SharePoint lists and configured approval workflows; created Power BI reports.',
    details: ['Used Power Apps to build the LeaveRequests application interface and formulas.', 'Connected request data in SharePoint with Power Automate approvals.', 'Created interactive Power BI reports to present business information.'],
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Power BI'], code: '03', color: '#8b7045',
  },
  {
    id: 'arconse', name: 'ArConSe', subtitle: 'Company landing page',
    type: 'Web development project', date: '',
    status: 'Personal project', platform: 'Website',
    summary: 'A company landing page focused on presenting ArConSe and its services on the web.',
    contribution: 'Created the initial site with Lovable, refined it with AI-assisted development and hosted the project on GitHub.',
    details: ['Worked on the page layout, styling and company information.', 'Used an AI-assisted workflow to develop and refine the landing page.'],
    tags: ['Web development', 'Lovable', 'GitHub', 'AI-assisted development'], code: '04', color: '#667650',
  },
  {
    id: 'photobooth', name: 'PhotoBooth', subtitle: 'Four moments, one photo strip',
    type: 'Personal · iOS development', date: '',
    status: 'In development', platform: 'iOS · SwiftUI',
    summary: 'A photo booth application that captures four timed shots and composes them into a photo strip.',
    contribution: 'Building the camera flow, strip composition and editing experience in SwiftUI and Xcode.',
    details: ['Built front and back camera preview, a countdown and automatic four-shot capture.', 'Added Original, B&W, Sepia and Noir filters, with saving to Photos and native sharing.', 'Developed Philippine holiday themes with automatic date detection and a manual theme picker.'],
    tags: ['SwiftUI', 'Xcode', 'Camera', 'Photo editing'], code: '05', color: '#b74436',
  },
]
export const skills = [
  { title: 'Programming & web', items: ['Dart', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'PHP', 'C#'] },
  { title: 'Frameworks & tools', items: ['ASP.NET Core', 'Flutter', 'Laravel', 'Visual Studio', 'Android Studio', 'Git/GitHub'] },
  { title: 'Microsoft platforms', items: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Word', 'Excel'] },
  { title: 'Systems', items: ['Windows Server configuration', 'Troubleshooting'] },
]
export const certifications = ['IC3 Digital Literacy Certification — GS Level 2', 'Microsoft Word 2019 Associate', 'Critical Career Skills — Generative AI Foundations']

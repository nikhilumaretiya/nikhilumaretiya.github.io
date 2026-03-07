import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="sidebar active" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box overflow-hidden flex justify-center items-center p-2 bg-gradient-onyx rounded-3xl shadow-1">
                    <img src="/assets/images/profile.webp" alt="Nikhil Umaretiya" className="w-[120px] rounded-2xl mx-auto" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Nikhil Umaretiya">Nikhil Umaretiya</h1>

                    <p className="title mb-4">
                        Full-stack PHP / WordPress / Laravel developer crafting fast,
                        scalable web solutions.
                    </p>

                    <a href="https://www.upwork.com/freelancers/nikhilumaretiya" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#14a800] bg-[#14a800]/10 border border-[#14a800]/30 rounded-lg hover:bg-[#14a800] hover:text-white transition-all shadow-[0_0_15px_rgba(20,168,0,0.2)] hover:shadow-[0_0_25px_rgba(20,168,0,0.5)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.48 10.22c-2.12 0-3.32 1.4-3.5 3.32h7c-.18-1.92-1.38-3.32-3.5-3.32zm-7.6 1.46v-7.14h-2.94v7.36c0 2.52-1.84 4.08-4.32 4.08S1.2 14.42 1.2 11.9V4.54H-1.74v7.58c0 3.76 2.9 6.2 6.54 6.2s6.56-2.44 6.56-6.2v-.66c.26 1.14.72 2.2 1.34 3.12l-2.06 6.84h3.04l1.32-4.52c1.4.92 3.14 1.32 5.02 1.32 4.3 0 6.64-3.14 6.64-6.84s-2.34-6.84-6.64-6.84c-3 0-5.18 1.6-6.26 4.14zM17.48 16c-1.6 0-2.88-1.04-3.34-2.52h6.68c-.46 1.48-1.74 2.52-3.34 2.52z" transform="translate(1.74 0)" /></svg>
                        Hire Me on Upwork
                    </a>
                </div>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" /></svg>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:nikhilumaretiya17@gmail.com" className="contact-link">nikhilumaretiya17@gmail.com</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+91 8905882895" className="contact-link">+91 89058 82895</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>INDIA</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/nikhil-umaretiya/" target="_blank" className="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

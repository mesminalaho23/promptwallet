import './AboutPage.css'

export default function AboutPage() {
return (
    <div className="container about-container">
        <div className="hero-section">
            <div className="logo">🧠</div>
            <h1>Prompt Wallet</h1>
            <p className="version">Version 1.0</p>
            <p className="tagline">
                Centralize, structure and reuse your prompts intelligently.
            </p>
        </div>

        <div className="features-list">
            <h3>Main Features</h3>

            <div className="feature-item">
                <div className="feature-icon">📁</div>
                <div className="feature-text">
                    <h4>Prompt Management</h4>
                    <p>Create, edit, delete and organize your prompts.</p>
                </div>
            </div>

            <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                    <h4>Dynamic Variables</h4>
                    <p>Use customizable fields in your prompts.</p>
                </div>
            </div>

            <div className="feature-item">
                <div className="feature-icon">🌙</div>
                <div className="feature-text">
                    <h4>Dark Mode</h4>
                    <p>Comfortable interface adapted to all environments.</p>
                </div>
            </div>
        </div>

        <div className="features-list">
            <h3>Project Team</h3>

            <div className="team-member">
                <div className="team-avatar">👨‍💻</div>
                <div className="team-info">
                    <h4>Front-End Developer</h4>
                    <p>Bachelor Student Web Developer Multimedia</p>
                </div>
            </div>

            <div className="team-member">
                <div className="team-avatar">🎓</div>
                <div className="team-info">
                    <h4>Educational Project</h4>
                    <p>L'École Multimédia</p>
                </div>
            </div>
        </div>

        <div className="footer">
            Prompt Wallet — © 2026 — All rights reserved
        </div>
    </div>
)
}

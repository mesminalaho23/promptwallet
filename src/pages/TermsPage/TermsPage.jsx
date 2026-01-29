import './TermsPage.css'

export default function TermsPage() {
return (
    <div className="container terms-container">
        <div className="terms-header page-header">
            <h2>Terms and Conditions of Use</h2>
            <p>Last updated: January 2026</p>
        </div>

        <div className="content-card">
            <div className="section">
                <h3>1. Introduction</h3>
                <p>
                    Prompt Wallet is an application that allows you to create, store and
                    reuse prompts designed for artificial intelligences.
                </p>
            </div>

            <div className="section">
                <h3>2. Service Access</h3>
                <p>
                    The application is freely accessible. No authentication is required. Data
                    is stored locally in the user's browser.
                </p>

                <div className="highlight-box">
                    <p>
                        ⚠️ In case of cache deletion or browser change,
                        data may be lost.
                    </p>
                </div>
            </div>

            <div className="section">
                <h3>3. Usage</h3>
                <ul>
                    <li>Creation and modification of prompts</li>
                    <li>Use of dynamic variables</li>
                    <li>Quick copy of generated prompts</li>
                    <li>Dark mode for visual comfort</li>
                </ul>
            </div>

            <div className="section">
                <h3>4. Liability</h3>
                <p>
                    The editor cannot be held responsible for the use made of the
                    generated prompts or the responses produced by third-party tools
                    using these prompts.
                </p>
            </div>

            <div className="section">
                <h3>5. Evolution</h3>
                <p>
                    Features may evolve at any time for educational purposes or
                    continuous improvement.
                </p>
            </div>

            <div className="date">
                © Prompt Wallet — Educational Project
            </div>
        </div>
    </div>
)
}

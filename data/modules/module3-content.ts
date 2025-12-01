import { ModuleDetail } from "@/data/course-data";

export const module3Content: ModuleDetail[] = [
    {
        day: "Day 6",
        content: "Data Sourcing, Pipeline Building & Networking",
        detail: `
            <h2 style="font-size: 2.25rem; font-weight: 800; color: #fdbf68; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-top: 2.5rem;">Part 1: Sourcing Data & Tools for Sourcing</h2>
            
            <p>Venture Capitalists constantly look for promising founders and startups. Data sourcing involves collecting and analyzing information to spot early signals of growth, fundraising, or innovation, moving beyond just 'gut feeling'.</p>

            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">The VC’s Market Intelligence Toolkit</h3>
            
            <p>These tools are essential for Deal Sourcing, Screening, and Market Intelligence:</p>
            <ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
                <li>PitchBook: Provides extensive data on private equity, VC, M&A, valuations, and cap table data. Essential for market mapping and financial analysis.</li>
                <li>CB Insights: Uses machine learning (Mosaic Score) to track startups, VCs, and emerging technology trends, predicting the health and growth potential of private companies.</li>
                <li>Crunchbase Pro: Offers advanced search filters to monitor funding activity and gain personalized insights into the startup ecosystem.</li>
                <li>Mattermark: Provides quantifiable metrics based on web, mobile, and social data to measure a private company's growth rate.</li>
            </ul>

            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">Tools for Legal/Compliance and Reporting</h3>
            <ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
                <li>Ironclad: Automates the creation, negotiation, and execution of legal agreements (NDAs, term sheets) for fast, compliant deal execution.</li>
                <li>Tableau / Microsoft Power BI / Looker Studio: Business Intelligence (BI) tools used by VCs to analyze portfolio performance metrics (KPIs) and create interactive reports for Limited Partners (LPs) and internal stakeholders.</li>
            </ul>

            <hr style="border-top: 1px solid #444; margin: 1.5rem 0;">

            <h2 style="font-size: 2.25rem; font-weight: 800; color: #fdbf68; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-top: 2.5rem;">Part 2: Pipeline Building & Lead Tracking</h2>
            
            <p>A deal pipeline is the roadmap for an investment opportunity, tracking it from discovery until funds are wired. It turns the chaotic process of dealmaking into a structured, trackable process, crucial for prioritization and forecasting.</p>
            
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">The 7 Essential Stages of a VC Deal Pipeline</h3>
            <ol style="list-style-type: decimal; margin-left: 2rem; padding-left: 0;">
                <li>Deal Origination (Sourcing): VCs actively search for opportunities that align with their thesis (e.g., leveraging networks, conferences).</li>
                <li>Deal Qualification (Screening): A quick check to screen out companies that don't meet basic criteria (Milestone: Qualified Lead).</li>
                <li>Schedule a Pitch Meeting: Founder presents their vision and preparedness (Milestone: Deeper research warranted).</li>
                <li>Deliver a Term Sheet: The firm's first official, non-binding commitment outlining preliminary terms (Milestone: Term sheet signed).</li>
                <li>Due Diligence and Negotiation: The deepest dive—verifying financials, legal standing, and technology (Milestone: Legal documentation finalized).</li>
                <li>Close the Deal: Execution of definitive legal agreements and transfer of funds (Milestone: Closed-Won/Closed-Lost).</li>
                <li>Portfolio Company Onboarding & Support: Transitioning from investor to partner, providing strategic support and network connections.</li>
            </ol>
            
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">Pipeline Management: The Engine</h3>
            <ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
                <li>Automate with CRM Software: Modern CRMs (e.g., Affinity, Zoho CRM, Pipedrive) are central databases that capture interactions and track deal progress. Pipedrive is known for its visual (Kanban) pipeline.</li>
                <li>Crunch the Numbers: VCs use conversion rates to work backward (e.g., if you need 5 closed deals and the rate is 20%, you need 25 qualified leads).</li>
                <li>Keep Deals on Track: Centralization of communication, diligent follow-up, and leveraging internal referrals are key to maintaining momentum. A deal that stalls often dies.</li>
            </ul>

            <hr style="border-top: 1px solid #444; margin: 1.5rem 0;">
            
            <h2 style="font-size: 2.25rem; font-weight: 800; color: #fdbf68; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-top: 2.5rem;">Part 3: Networking is Currency: The Power of Connections in the VC World</h2>
            
            <p>VC is a people-first industry where the quality of your connections often outweighs the perfection of your pitch deck. Trust is the non-negotiable pillar of any long-term, high-risk investment.</p>
            
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">The Foundation: Why VC is a Relationship Game</h3>
            <ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
                <li>The Trust Pillar: Approximately 70% of all VC deals originate from established networks.</li>
                <li>The Power of Affinity: Sharing an alma mater or professional background can increase your chance of investment by building immediate trust.</li>
            </ul>
            
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">The Gold Standard: Warm Introductions</h3>
            <ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
                <li>13x Higher Success: A warm introduction (where a reputable mutual contact vouches for you) leads to a 13 times higher chance of funding success compared to a cold email.</li>
                <li>Deal Flow Source: Almost 60% of all deals are sourced through personal referrals (former colleagues, other investors, portfolio founders).</li>
            </ul>

            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">The Network Effect: Exclusive Access and Validation</h3>
            <ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
                <li>Exclusive Access: Many high-potential startups rely entirely on referral networks, excluding investors who are not part of the 'right private conversations'.</li>
                <li>Validation Amplification: An introduction from a trusted source (e.g., a top accelerator or another VC) serves as powerful external validation, instantly reducing perceived risk and accelerating the deal.</li>
            </ul>
            
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">The Architecture of Informal Networks</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead style="background-color: #553b1b;">
                    <tr>
                        <th style="padding: 12px; text-align: left; color: #fff;">Network Type</th>
                        <th style="padding: 12px; text-align: left; color: #fff;">Key Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #333;">
                        <td style="padding: 12px;">Professional Networks</td>
                        <td style="padding: 12px;">Most reliable source of introduction due to proven professional credibility.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #333;">
                        <td style="padding: 12px;">Investor Networks</td>
                        <td style="padding: 12px;">Facilitates syndication (co-investing) and cross-referrals for larger or specialized deals.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #333;">
                        <td style="padding: 12px;">Portfolio Company Networks</td>
                        <td style="padding: 12px;">Provides referrals that are highly aligned with the VC's specific investment criteria.</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px;">Ecosystem Connectors</td>
                        <td style="padding: 12px;">Lawyers, accountants, and accelerators—provide high-conversion referrals due to their access and credibility.</td>
                    </tr>
                </tbody>
            </table>
            <p style="margin-top: 1rem;">Success is Network-Driven: Long-term trust is the ultimate asset, enabling investors to act decisively when a great opportunity arises.</p>
        `,
    },
];
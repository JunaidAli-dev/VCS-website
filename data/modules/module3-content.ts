import { ModuleDetail } from "@/data/course-data";

export const module3Content: ModuleDetail[] = [
    {
        day: "Day 6",
        content: "Deal Types, Investment Process & Valuation",
        detail: `
        

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">1. Deal Types</h3>
<p>Startups raise capital using two broad categories of instruments:</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">1.1 Equity Financing (Preferred Equity)</h4>
<p>Equity = selling ownership in exchange for capital. VCs primarily purchase preferred stock, which includes rights such as:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Liquidation preference</li>
    <li>Anti-dilution protection</li>
    <li>Voting/board rights</li>
    <li>Founder vesting/lock-ins</li>
</ul>
<p style="margin-top: 1rem;">Ownership formula: Investor % = Investment / Post-money valuation</p>
<p style="margin-top: 1rem;">Example: Pre-money = INR 40 Cr, Investment = INR 10 Cr, Post-money = INR 50 Cr → Investor gets 20%. Equity = long-term capital + strategic support; downside → permanent dilution & lengthy negotiation.</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">1.2 Convertible Notes</h4>
<p>A debt instrument that later converts to equity, usually at better terms than priced-round investors. Key components:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Principal amount</li>
    <li>Interest</li>
    <li>Maturity date</li>
    <li>Discount</li>
    <li>Valuation cap</li>
</ul>
<p style="margin-top: 1rem;">Benefits: Fast, cheap, delays valuation discussion.</p>
<p style="margin-top: 1rem;">Example: INR 1 Cr note, Cap = 25 Cr, Next round pre-money = 40 Cr. Ownership = 1 / 25 = 4% (vs 2% without protections).</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">1.3 SAFEs (Simple Agreement for Future Equity)</h4>
<p>Not debt — no interest, no maturity date. Convert into equity at the next priced round using:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Valuation cap</li>
    <li>Discount</li>
</ul>
<p style="margin-top: 1rem;">Designed to keep early-stage deals simple and founder-friendly.</p>
<p style="margin-top: 1rem;">Example: SAFE of INR 50L at a 20 Cr cap → converts into 2.5% instead of 1.25% if valued at 40 Cr.</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">1.4 Term Sheets</h4>
<p>A term sheet is a non-binding deal blueprint. Covers:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Valuation & security type</li>
    <li>Liquidation preferences</li>
    <li>Anti-dilution</li>
    <li>ESOP pool</li>
    <li>Voting/board rights</li>
    <li>Information rights</li>
    <li>Founder vesting, lock-ins</li>
</ul>
<p style="margin-top: 1rem;">It sets expectations and prevents downstream conflict.</p>

<hr style="border-top: 1px solid #444; margin: 1.5rem 0;">

<h2 style="font-size: 2.25rem; font-weight: 800; color: #fdbf68; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-top: 2.5rem;">2. Introduction to Valuation (Pre-Money & Post-Money)</h2>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.1 Pre-Money Valuation</h4>
<p>Company value before the investment. Depends on traction, revenue, TAM, team, IP, and benchmarks.</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.2 Post-Money Valuation</h4>
<p>Post-money = Pre-money + Investment. Investor ownership is always based on post-money. Misinterpreting pre vs post in SAFEs/notes → unexpected dilution.</p>
<p style="margin-top: 1rem;">Example: Pre-money = 30 Cr, Investment = 10 Cr, Post = 40 Cr → Investor owns 25%.</p>

<hr style="border-top: 1px solid #444; margin: 1.5rem 0;">

<h2 style="font-size: 2.25rem; font-weight: 800; color: #fdbf68; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-top: 2.5rem;">3. Cap Table & Dilution Modeling</h2>
<p>Every round issues new shares → diluting existing holders. VCs model:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Equity dilution</li>
    <li>ESOP expansion</li>
    <li>SAFE/note conversion impacts</li>
    <li>Future round scenarios</li>
</ul>
<p style="margin-top: 1rem;">Over-dilution = kills founder motivation. Under-modeling = investor confusion.</p>
               `,
    },
    {
        day: "Day 7",
        content: "Portfolio Management & Risk Thinking",
        detail:`
        

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">1. Why Risk Thinking Matters</h3>
<p>VC outcomes follow a power-law: A few winners return the majority of the fund. Most companies fail. Therefore:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Failure is expected.</li>
    <li>Risk is allocated, not eliminated.</li>
    <li>Follow-ons are where returns concentrate.</li>
</ul>
<p style="margin-top: 1rem;">Example: A 50x–100x winner can offset many write-offs.</p>

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">2. Core Risk Management Principles</h3>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.1 Understand Power-Law Outcomes</h4>
<p>VC isn't about “average” success. A tiny number of companies drive outsized returns. Your job: spot and double down on emerging winners.</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.2 Fund Construction Discipline</h4>
<p>A structured plan for:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Number of investments</li>
    <li>Initial check size</li>
    <li>Ownership targets</li>
    <li>Reserve ratio (commonly ≈60%)</li>
</ul>
<p style="margin-top: 1rem;">Example: INR 500 Cr fund, 25 companies × INR 8 Cr = 200 Cr initial deployment, 300 Cr reserved for follow-ons.</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.3 Staged Financing</h4>
<p>Risk decreases → more capital deployed.</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Seed → evaluate team, prototype</li>
    <li>Series A → retention, PMF (Product-Market Fit)</li>
    <li>Series B+ → scaling, efficiency</li>
</ul>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.4 Diversification Strategy</h4>
<p>Spread risk across:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Sectors</li>
    <li>Stages</li>
    <li>Geographies</li>
    <li>Business models</li>
    <li>Market cycles</li>
</ul>
<p style="margin-top: 1rem;">Avoid over-diversification → reduces conviction & attention. Example portfolio:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>40% enterprise SaaS</li>
    <li>30% consumer</li>
    <li>20% deeptech</li>
    <li>10% emerging bets</li>
</ul>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.5 Syndication</h4>
<p>Co-invest with other VCs to reduce risk, share diligence, and bring additional expertise.</p>

<h4 style="font-size: 1.3rem; font-weight: 600; color: #fdbf68; margin-top: 1rem;">2.6 Pro-Rata Rights & Reserves</h4>
<p>Pro-rata = right to maintain ownership in future rounds. Many funds allocate 50–60% for follow-ons. Skipping follow-ons causes major dilution in your winners.</p>
<p>Follow-on categories:</p>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>A (Winners): Increase exposure</li>
    <li>B (Stable): Selective support</li>
    <li>C (Weak): No more capital</li>
</ul>

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">3. Portfolio Construction Framework</h3>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead style="background-color: #553b1b;">
        <tr>
            <th style="padding: 12px; text-align: left; color: #fff;">Category</th>
            <th style="padding: 12px; text-align: left; color: #fff;">% of portfolio</th>
            <th style="padding: 12px; text-align: left; color: #fff;">Investment Behavior</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px;">A — Winners</td>
            <td style="padding: 12px;">10–20%</td>
            <td style="padding: 12px;">Increase capital, defend ownership</td>
        </tr>
        <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px;">B — Stable</td>
            <td style="padding: 12px;">40–50%</td>
            <td style="padding: 12px;">Moderate follow-on</td>
        </tr>
        <tr>
            <td style="padding: 12px;">C — Underperformers</td>
            <td style="padding: 12px;">30–40%</td>
            <td style="padding: 12px;">Stop deploying, manage write-off risk</td>
        </tr>
    </tbody>
</table>
<p style="margin-top: 1rem;">This ensures capital flows toward upside, not losses.</p>

<hr style="border-top: 1px solid #444; margin: 1.5rem 0;">

<h2 style="font-size: 2.25rem; font-weight: 800; color: #fdbf68; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-top: 2.5rem;">Integrated Reading List (Day 6 & Day 7)</h2>

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">Deal Types & Term Sheets</h3>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Venture Deals by Brad Feld & Jason Mendelson</li>
    <li>YC SAFE templates & guides</li>
    <li>Cooley GO: Term Sheet resources</li>
    <li>Carta: SAFE vs Notes guides</li>
    <li>Startup India term sheet template</li>
</ul>

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">Valuation</h3>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>Investopedia: Pre-money vs Post-money</li>
</ul>

<h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem;">Risk, Power-Law & Portfolio Strategy</h3>
<ul style="list-style-type: disc; margin-left: 2rem; padding-left: 0;">
    <li>VC Lab - Power Law in VC</li>
    <li>a16z - Babe Ruth Effect</li>
    <li>Cornell analysis - VC return distributions</li>
    <li>Medium posts on diversification & allocation</li>
    <li>GoingVC portfolio construction guide</li>
</ul>
        `,
    },
];
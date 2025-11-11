# vibecheck-x402
💜 VibeCheck.ai — Safer Dating Starts with the Blockchain
AI-powered profile credibility checker for the modern dating era.
Powered by Solana x402 micropayments, because trust shouldn’t depend on ads or subscriptions.

🚨 Why VibeCheck.ai?
Online dating is broken — fake profiles, ghost accounts, and zero accountability.
VibeCheck.ai introduces instant trust checks using blockchain-powered payments.

Users can:
Paste a dating/social profile bio or username
Get a “Vibe Report” (score + risk + AI analysis)
Unlock it via a one-time Solana x402 micropayment
💬 Think of it as “Pay-per-truth” for the digital age.

⚙️ Tech Stack
 Next.js + TypeScript
 @solana/web3.js on Devnet
 Phantom Wallet Integration
 x402 HTTP Protocol for Micropayments
 Mock API Routes for testing the paywall flow

🧩 Current Features
✅ Frontend built and styled
✅ 402 Payment flow simulated (mock)
✅ Phantom Wallet integration
✅ Working Solana transaction simulation
🧱 Ready for backend integration with x402 API

📂 Folder Structure
app/
 ├── api/
 │    ├── check/route.ts        → Returns 402 + payment metadata
 │    ├── x402-pay/route.ts     → Mock payment handler
 ├── page.tsx                   → Main frontend (React + Phantom integration)
 ├── globals.css
package.json
README.md

🧠 Next Steps for Collaborators
| Task                                      | Description                              | Status      |
| ----------------------------------------- | ---------------------------------------- | ----------- |
| 🔗 Integrate **official Solana x402 API** | Replace mock `/api/x402-pay`             | 🔥 Done  |
| 💵 Add **SPL USDC transfers**             | Use token program for true micropayments | 🧩 Done  |
| 🧠 Connect **AI model for vibe scoring**  | Use OpenAI or Llama to assess profiles   | 💡 Pending  |
| 🎨 Polish the UI                          | Add animation, vibe meter, dark mode     | ✨ Optional  |
| 🌍 Deploy on Vercel                       | For hackathon submission demo            | 🚀 Optional |

🧭 Local Setup
git clone https://github.com/anubha-mane/vibecheck-x402.git
cd vibecheck-x402
npm install
npm run dev
Then open:
👉 http://localhost:3000
Make sure:
You have Phantom Wallet installed
Network: Devnet
Get SOL from https://faucet.solana.com
Replace your wallet address in /api/check/route.ts → pay_to

🤝 Collaborator Note
Hey builder 👋
The base version is complete — you can now:
Plug in the real Solana x402 API
Swap SOL for USDC micropayments
Enhance AI scoring and UI
This repo is ready for forks, branches, and pull requests.

👩‍💻 Maintainer
Anubha Maneshwar

🏆 Built For
🪶 Solana x402 Hackathon 2025
💬 Because digital trust deserves decentralization.

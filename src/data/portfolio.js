// ============================================================
// PORTFOLIO DATA — Edit everything here to personalise the site
// ============================================================

export const personal = {
  name: 'Henry Tochi',         
  handle: 'HenryWeb3Dev',         
  title: 'Web3 Developer · Smart Contract Engineer · Full Stack Blockchain Builder',
  tagline: 'I build secure decentralised applications, smart contracts, and modern Web3 experiences that push the boundaries of what\'s possible on-chain.',
  location: 'Nigeria 🇳🇬',
  available: true,
  email: 'ogbonna1109@gamil.com',        

  //My profile pic
  profileImage: './profile.jpg.jpeg',

  // Social links — replace USERNAME / NUMBER
  social: {
    github:    'https://github.com/ogbonna1109',
    linkedin:  'https://linkedin.com/in/USERNAME',
    twitter:   'https://x.com/HenryWeb3Dev',
    instagram: 'https://instagram.com/henry_tochi',
    whatsapp:  'https://wa.me/+2349063231247',
  },

  // Resume PDF — drop resume.pdf in /public/ and uncomment below
  resumeUrl: null, // '/resume.pdf',

  stats: [
    { value: '1+',  label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '5+',  label: 'Clients Served' },
  ],
}

export const skills = [
  { name: 'React',       icon: '⚛️',  level: 90 },
  { name: 'JavaScript',  icon: '🟡',  level: 88 },
  { name: 'Solidity',    icon: '💎',  level: 85 },
  { name: 'Ethereum',    icon: '🔷',  level: 82 },
  { name: 'TypeScript',  icon: '📘',  level: 78 },
  { name: 'Node.js',     icon: '🟢',  level: 78 },
  { name: 'Tailwind CSS',icon: '🎨',  level: 90 },
  { name: 'Git',         icon: '🔀',  level: 85 },
  { name: 'Hardhat',     icon: '⛏️',  level: 80 },
  { name: 'Ethers.js',   icon: '🔌',  level: 83 },
  { name: 'Web3.js',     icon: '🌐',  level: 80 },
  { name: 'IPFS',        icon: '📦',  level: 72 },
]

export const timeline = [
  {
    period: '2025',
    title: 'Started Web3 Journey',
    description: 'Dove deep into blockchain fundamentals, mastered Solidity, and deployed my first smart contracts on testnets. Fell in love with the permissionless future.',
    tags: ['Solidity', 'Ethereum', 'Hardhat'],
  },
  {
    period: '2025 – 2026',
    title: 'Built dApps & Smart Contracts',
    description: 'Shipped multiple decentralised applications — DeFi tools, NFT marketplaces, and DAO frameworks. Started taking on freelance clients and collaborating with Web3 startups.',
    tags: ['DeFi', 'NFTs', 'React', 'Ethers.js'],
  },
  {
    period: 'Present',
    title: 'Building at Scale',
    description: 'Creating production-ready blockchain solutions for clients while exploring Layer 2 scaling, cross-chain bridges, and account abstraction (ERC-4337).',
    tags: ['Layer 2', 'ERC-4337', 'Cross-chain'],
  },
]

export const projects = [
  {
    id: 1,
    emoji: '💰',
    gradient: 'from-cyan-500/20 to-purple-500/10',
    name: 'DeFi Yield Platform',
    description: 'A decentralised yield aggregator that auto-compounds user deposits across multiple liquidity pools using battle-tested vault strategies.',
    tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
    github: 'https://github.com/USERNAME/defi-yield',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    emoji: '🖼️',
    gradient: 'from-purple-500/20 to-rose-500/10',
    name: 'NFT Marketplace',
    description: 'Full-featured NFT marketplace with lazy minting, on-chain royalties, and IPFS metadata — zero gas for creators until first sale.',
    tech: ['Solidity', 'Next.js', 'IPFS', 'Wagmi'],
    github: 'https://github.com/USERNAME/nft-market',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    emoji: '🏛️',
    gradient: 'from-green-500/10 to-cyan-500/10',
    name: 'DAO Governance App',
    description: 'On-chain governance system with proposal creation, token-weighted voting, and execution via multi-sig timelock.',
    tech: ['Solidity', 'React', 'OpenZeppelin', 'Ethers.js'],
    github: 'https://github.com/USERNAME/dao-gov',
    demo: '#',
    featured: false,
  },
  {
    id: 4,
    emoji: '📊',
    gradient: 'from-orange-500/12 to-purple-500/10',
    name: 'Token Dashboard',
    description: 'Real-time token analytics with price charts, wallet tracking, and portfolio management. Supports multiple EVM chains.',
    tech: ['React', 'Web3.js', 'CoinGecko API', 'Recharts'],
    github: 'https://github.com/USERNAME/token-dash',
    demo: '#',
    featured: false,
  },
  {
    id: 5,
    emoji: '✅',
    gradient: 'from-cyan-500/10 to-green-500/08',
    name: 'Web3 Todo dApp',
    description: 'A decentralised task manager with on-chain storage. No backend, no censorship — your tasks live on the blockchain forever.',
    tech: ['Solidity', 'React', 'MetaMask', 'Ethers.js'],
    github: 'https://github.com/USERNAME/web3-todo',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    emoji: '🔐',
    gradient: 'from-rose-500/12 to-cyan-500/10',
    name: 'Multi-Sig Wallet',
    description: 'A Gnosis-style multi-signature wallet requiring M-of-N approvals for every on-chain transaction, built from scratch in Solidity.',
    tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
    github: 'https://github.com/USERNAME/multisig',
    demo: '#',
    featured: false,
  },
]

export const stack = {
  Frontend:  ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  Blockchain: ['Ethereum', 'Polygon', 'Base', 'Solana'],
  Contracts:  ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin'],
  Libraries:  ['Ethers.js', 'Wagmi', 'Web3.js', 'Viem'],
  Storage:    ['IPFS', 'Arweave', 'The Graph'],
}

export const services = [
  {
    icon: '📝',
    title: 'Smart Contract Development',
    description: 'Secure, gas-optimised Solidity contracts for DeFi, NFTs, DAOs, token systems, and custom on-chain logic.',
    highlight: true,
  },
  {
    icon: '🖥️',
    title: 'Web3 Frontend Dev',
    description: 'React + ethers.js / wagmi frontends that connect beautifully to your blockchain backend with wallet integration.',
    highlight: false,
  },
  {
    icon: '🔗',
    title: 'dApp Development',
    description: 'End-to-end decentralised applications from contract to UI — fully deployable and production-ready.',
    highlight: false,
  },
  {
    icon: '⚙️',
    title: 'Blockchain Integration',
    description: 'Add Web3 capabilities to existing web apps — wallets, tokens, NFTs, and on-chain data feeds.',
    highlight: false,
  },
  {
    icon: '🎨',
    title: 'Web3 UI/UX Design',
    description: 'Futuristic, user-friendly interfaces built specifically for blockchain products that convert visitors into users.',
    highlight: false,
  },
  {
    icon: '🛡️',
    title: 'Contract Testing & Audit',
    description: 'Comprehensive test suites with Hardhat and Foundry, plus manual security review to catch vulnerabilities before launch.',
    highlight: false,
  },
]

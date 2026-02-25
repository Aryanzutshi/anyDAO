# AnyDAO

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  </a>
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/version-1.0.0-green.svg" alt="Version" />
</p>

## Description

AnyDAO is a dummy implementation of an anonymous DAO that leverages Zero-Knowledge Proofs to verify eligibility and uniqueness of participants without revealing identity or balance information.
- It acts as an additional privacy-preserving layer on top of a decentralized autonomous organization, enforcing:
- Balance-gated membership
- Anonymous commitments
- Single-use nullifier protection

The system demonstrates how cryptographic primitives can be used to build privacy-first DAO access control.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [FAQ](#faq)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Team](#team)

## Features
- Private Balance Gating
- Merkle-Based Anonymous Membership
- Nullifier-Based Sybil Protection
- Modular Circuit Architecture
- Interactive CLI Interface
- Programmatic Proof Generation

## Tech Stack Used

- Circom: Used to write custom circuits for:
  - Greater-than balance proof
  - Hash-based commitment
  - Merkle inclusion proof
  - Nullifier generation

- circomlib utilities were used for:
  - `LessThan()`
  - Poseidon hash
  - Merkle tree logic

- Snarkjs Used for:
  - Witness generation
  - Proof creation
  - Proof verification

- Inquirer.js: Used for:
  - Interactive CLI creation
  - Themed prompts
  - Choice-based logic

- JavaScript: Used for -:
  - CLI orchestration
  - Proof handling
  - JSON proof formatting
  - Integration with snarkjs

## FAQ

### General Questions

**Q: Is this free to use?**
A: Yes, this project is open source and free to use under the MIT license.

**Q: What browsers are supported?**
A: All modern browsers that support ES6+ features (Chrome 60+, Firefox 60+, Safari 12+, Edge 79+).

**Q: Can I use this in a commercial project?**
A: Yes, the MIT license allows commercial use.

### Technical Questions

**Q: How do I contribute?**
A: See our [Contributing Guide](#contributing) for detailed instructions.

**Q: How do I report a bug?**
A: Please create an issue on GitHub with a detailed description and reproduction steps.

## Security

### Security Design

- Zero-knowledge eligibility verification
- Merkle commitment privacy
- Nullifier-based double-spend prevention
- Modular circuit logic

**Important**
**This is a dummy proof-of-concept system.**
Do **NOT** deploy to production without:
- Trusted setup ceremony verification
- Circuit audit
- Nullifier registry enforcement
- On-chain verification contract
- 
## Contributing

We welcome contributions.

**Development Setup**
```git clone https://github.com/username/repo.git
cd repo
npm install
npm start 
```

**Guidelines:**
- Follow existing code style
- Write clean modular circuits
- Document circuit logic
- Keep PRs focused

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## Team

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/Aryanzutshi.png" width="100px" alt="Aryan Zutshi"/><br />
      <b>Aryan Zutshi</b><br />
      <i>Developer</i><br />
      <a href="https://github.com/Aryanzutshi">GitHub</a>
  </tr>
</table>

**Made with ❤️ by [Aryan Zutshi](https://github.com/Aryanzutshi)**
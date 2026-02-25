# AnyDAO

A Dummy implementation of a anonymous DAO with a balance gate of 1000

Things to make :
- Private Balance Proof: a private input of balance and a public input of threshold where we will fetch balance and check if the balance > threshold and admit only if the balance is more than 1000 (dummy).
- Merkle Membership Proof: A system where user sends an address which is hashed and writes a secret word which becomes hashed and stored in a merkle tree which signals their commitment to the DAO.
- A nullifier system where user cannot generate proof of joining DAO more than 1 time.
# 🐋 AHAB DAO Front-end (Local Development) 

This is the front-end repo that allows users to check the governance protocol. (Built with Buildspace x Thirdweb v1) 

 * deployed custom ERC-20 token
 * deployed ERC-1155 NFT that people can mint to join your DAO.
 * deployed governance contract + treasury.
 * built a dapp that lets people connect their wallet, get an NFT, see a DAO Dashboard where they can see other members + actually vote on proposals that      are executed directly by your governance contract.

<img src="https://github.com/0xVitae/ahab-dao/blob/master/Screen%20Shot%202022-03-19%20at%2011.29.27%20AM.png" width="500"/>

## 🔧 Setting up Local Development

Required

* Node v16
* Git 
* Yarn

```bash
$ git clone https://github.com/0xVitae/ahab-dao.git
$ cd ahab-dao

# set up your environment variables
# read the comments in the .env files for what is required/optional
$ cp .env.example .env

# fill in your own values in .env, then =>
$ npm start
```

The site is now running at http://localhost:3000! Open the source code and start editing!

## Dapp runs on Rinkeby 

**Rinkeby faucet for WETH:**
[Wrap rinkeby eth on rinkeby uniswap](https://app.uniswap.org/#/swap)

## Architecture/Layout

The app is written in [React](https://reactjs.org/)


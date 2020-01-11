contract('MarketTest', ([deployer]) => {
	const marketContract = artifacts.require('Market')
	const marketFactoryContract = artifacts.require('MarketFactory')
	const marketGroupContract = artifacts.require('MarketGroup')
	const marketTest1Contract = artifacts.require('MarketTest1')
	const DevContract = artifacts.require('Dev')
	const addressConfigContract = artifacts.require('AddressConfig')
	const policyContract = artifacts.require('PolicyTest1')
	const policyFactoryContract = artifacts.require('PolicyFactory')
	const voteTimesContract = artifacts.require('VoteTimes')
	const voteTimesStorageContract = artifacts.require('VoteTimesStorage')
	const propertyFactoryContract = artifacts.require('PropertyFactory')
	const propertyGroupContract = artifacts.require('PropertyGroup')
	const lockupContract = artifacts.require('Lockup')
	const lockupStorageContract = artifacts.require('LockupStorage')
	const allocatorContract = artifacts.require('Allocator')
	const policyGroupContract = artifacts.require('PolicyGroup')
	const policySetContract = artifacts.require('PolicySet')
	const decimalsLibrary = artifacts.require('Decimals')
	describe('Market; schema', () => {
		it('Get Schema of mapped Behavior Contract')
	})

	describe('Market; authenticate', () => {
		it('Proxy to mapped Behavior Contract')

		it(
			'Should fail to run when sent from other than the owner of Property Contract'
		)

		it(
			'Should fail to the transaction if the second argument as ID and a Metrics Contract exists with the same ID.'
		)
	})

	describe('Market; authenticatedCallback', () => {
		it('Create a new Metrics Contract')

		it(
			'Market Contract address and Property Contract address are mapped to the created Metrics Contract'
		)

		it(
			'Should fail to create a new Metrics Contract when sent from non-Behavior Contract'
		)
	})

	describe('Market; calculate', () => {
		it('Proxy to mapped Behavior Contract')
	})

	// eslint-disable-next-line no-warning-comments
	// TODO vote interface wa changed, I will create this test case later
	describe('Market; vote', () => {
		let marketFactory: any
		let marketGroup: any
		let dev: any
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let market: any
		let addressConfig: any
		let policy: any
		let policyFactory: any
		let voteTimes: any
		let voteTimesStorage: any
		let propertyFactory: any
		let propertyGroup: any
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let propertyAddress: any
		let behavior: any
		let allocator: any
		let lockup: any
		let policyGroup: any
		let policySet: any
		before(async () => {
			addressConfig = await addressConfigContract.new({from: deployer})
			dev = await DevContract.new(addressConfig.address, {from: deployer})
			await addressConfig.setToken(dev.address, {from: deployer})
			marketFactory = await marketFactoryContract.new(addressConfig.address, {
				from: deployer
			})
			marketGroup = await marketGroupContract.new(addressConfig.address, {
				from: deployer
			})
			await marketGroup.createStorage()
			const decimals = await decimalsLibrary.new({from: deployer})
			await allocatorContract.link('Decimals', decimals.address)
			allocator = await allocatorContract.new(addressConfig.address, {
				from: deployer
			})
			await addressConfig.setAllocator(allocator.address, {
				from: deployer
			})
			await lockupContract.link('Decimals', decimals.address)
			lockup = await lockupContract.new(addressConfig.address, {from: deployer})
			await addressConfig.setLockup(lockup.address, {
				from: deployer
			})
			const lockupStorage = await lockupStorageContract.new(
				addressConfig.address,
				{from: deployer}
			)
			await lockupStorage.createStorage()
			await addressConfig.setLockupStorage(lockupStorage.address, {
				from: deployer
			})
			voteTimes = await voteTimesContract.new(addressConfig.address, {
				from: deployer
			})
			voteTimesStorage = await voteTimesStorageContract.new(
				addressConfig.address,
				{
					from: deployer
				}
			)
			await voteTimesStorage.createStorage()
			await addressConfig.setVoteTimesStorage(voteTimesStorage.address, {
				from: deployer
			})
			await addressConfig.setMarketFactory(marketFactory.address, {
				from: deployer
			})
			await addressConfig.setMarketGroup(marketGroup.address, {from: deployer})
			await addressConfig.setVoteTimes(voteTimes.address, {
				from: deployer
			})
			propertyFactory = await propertyFactoryContract.new(
				addressConfig.address,
				{from: deployer}
			)
			await addressConfig.setPropertyFactory(propertyFactory.address, {
				from: deployer
			})
			propertyGroup = await propertyGroupContract.new(addressConfig.address, {
				from: deployer
			})
			await propertyGroup.createStorage()
			await addressConfig.setPropertyGroup(propertyGroup.address, {
				from: deployer
			})
			await policyContract.link('Decimals', decimals.address)
			policy = await policyContract.new({from: deployer})
			policyGroup = await policyGroupContract.new(addressConfig.address, {
				from: deployer
			})
			policyGroup.createStorage()
			await addressConfig.setPolicyGroup(policyGroup.address, {
				from: deployer
			})
			policySet = await policySetContract.new(addressConfig.address, {
				from: deployer
			})
			policySet.createStorage()
			await addressConfig.setPolicySet(policySet.address, {
				from: deployer
			})
			policyFactory = await policyFactoryContract.new(addressConfig.address, {
				from: deployer
			})
			await addressConfig.setPolicyFactory(policyFactory.address, {
				from: deployer
			})
			await policyFactory.create(policy.address)
			behavior = await marketTest1Contract.new(addressConfig.address, {
				from: deployer
			})
			let result = await marketFactory.create(behavior.address)
			const marketAddress = await result.logs.filter(
				(e: {event: string}) => e.event === 'Create'
			)[0].args._market
			// eslint-disable-next-line @typescript-eslint/await-thenable
			market = await marketContract.at(marketAddress)
			result = await propertyFactory.create('sample', 'SAMPLE', deployer, {
				from: deployer
			})
			propertyAddress = await result.logs.filter(
				(e: {event: string}) => e.event === 'Create'
			)[0].args._property
		})

		it(
			'Total value of votes for and against, votes are the number of sent DEVs'
		)
		it(
			'Creating a market contract from other than a factory results in an error'
		)

		it('When total votes for more than 10% of the total supply of DEV are obtained, this Market Contract is enabled', async () => {
			// eslint-disable-next-line no-warning-comments
			// TODO PolicyTest1, VoteCounter, VoteCounterStorage
			// await dummyDEV.approve(lockup.address, 10000, {from: deployer})
			// await lockup.lockup(propertyAddress, 10000, {from: deployer})
			// await market.vote(propertyAddress, true, {from: deployer})
			// const isEnable = await market.enabled({from: deployer})
			// expect(isEnable).to.be.equal(true)
		})

		it('Should fail to vote when already determined enabled', async () => {
			// Await dummyDEV.approve(market.address, 100000, {from: deployer})
			// await market.vote(10000, {from: deployer})
			// const isEnable = await market.enabled({from: deployer})
			// expect(isEnable).to.be.equal(true)
			// const result = await market
			// 	.vote(100, {from: deployer})
			// 	.catch((err: Error) => err)
			// expect((result as Error).message).to.be.equal(
			// 	'Returned error: VM Exception while processing transaction: revert market is already enabled -- Reason given: market is already enabled.'
			// )
		})

		it('Vote decrease the number of sent DEVs from voter owned DEVs', async () => {
			// Await dummyDEV.approve(market.address, 100, {from: deployer})
			// await market.vote(100, {from: deployer})
			// const ownedDEVs = await dummyDEV.balanceOf(deployer, {from: deployer})
			// expect(ownedDEVs.toNumber()).to.be.equal(9900)
		})

		it('Vote decrease the number of sent DEVs from DEVtoken totalSupply', async () => {
			// Await dummyDEV.approve(market.address, 100, {from: deployer})
			// await market.vote(100, {from: deployer})
			// const DEVsTotalSupply = await dummyDEV.totalSupply({from: deployer})
			// expect(DEVsTotalSupply.toNumber()).to.be.equal(9900)
		})
		it('voting deadline is over')
	})
})

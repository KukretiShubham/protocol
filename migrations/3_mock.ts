import {setAddressConfig} from './mock/config'
import {createStorage} from './mock/storage'
import {createPolicy} from './mock/policy'
import {createProperty} from './mock/property'
import {changeBalance} from './mock/token'
import {lockup} from './mock/lockup'
import {createMarket} from './mock/market'
import {createMetrics} from './mock/metrics'

const handler = async function(deployer, network) {
	if (network === 'test') {
		return
	}

	console.log('[set contract address to AddressConfig]')
	await setAddressConfig(artifacts)
	console.log('---finish---')
	console.log('[create storage]')
	await createStorage(artifacts)
	console.log('---finish---')
	if (network !== 'mock') {
		return
	}

	console.log('[create policy]')
	await createPolicy(artifacts)
	console.log('---finish---')
	console.log('[create property]')
	// eslint-disable-next-line no-undef
	const addressInfo = await createProperty(artifacts, web3)
	console.log('---finish---')
	console.log('[balance adjustment]')
	await changeBalance(artifacts, addressInfo)
	console.log('---finish---')
	console.log('[lockup]')
	await lockup(artifacts, addressInfo)
	console.log('---finish---')
	console.log('[create market]')
	const marketAddresses = await createMarket(artifacts, addressInfo)
	console.log('---finish---')
	console.log('[create metrics]')
	await createMetrics(artifacts, addressInfo, marketAddresses)
	console.log('---finish---')
} as Truffle.Migration

export = handler

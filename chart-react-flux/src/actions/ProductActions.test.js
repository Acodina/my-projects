import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import { getProductList } from './ProductActions';

jest.mock('../dispatcher');
jest.dontMock('./ProductActions');

describe('ProductActions', () => {
	xit('Should return product List', async () => {
		const fakeList = ['fakeList'];
		jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({
				json: () => Promise.resolve(fakeList)
			});
		});
		await getProductList();
		expect(dispatcher.dispatch.mock.calls[0][0].data).toEqual(fakeList);
	});
});

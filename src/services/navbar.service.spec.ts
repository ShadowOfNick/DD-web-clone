import { getNavbarData } from './navbar.service';
import { mockData } from './mockData';

describe('getNavbarData', () => {
  let client : any;
  
  beforeEach(() => {
    client = {
      getEntries: jest.fn().mockResolvedValue(mockData)
    };
    jest.mock('contentful', () => ({
      createClient: jest.fn(() => client)
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct fields and call the contentful client with the correct arguments', async () => {
    const expectedData = mockData.navbarData;
    client.getEntries.mockResolvedValueOnce({ items: [{fields: {navbarItem: expectedData}}] });
    const data = await getNavbarData();
    expect(data).toEqual(expectedData);
    expect(client.getEntries).toHaveBeenCalledWith({ content_type: 'navbar', locale: 'cs-CZ' });
  });
});
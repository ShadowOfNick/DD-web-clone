import { getHomePageData } from './homepage.service';
import { mockData } from './mockData';

describe('getHomePageData', () => {
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
    const expectedData = mockData.homePageData;
    client.getEntries.mockResolvedValueOnce({ items: [{fields: expectedData}] });
    const data = await getHomePageData();
    expect(data).toEqual(expectedData);
    expect(client.getEntries).toHaveBeenCalledWith({ content_type: 'homePage', locale: 'cs-CZ', include: 2 });
  });
});

import { getFooterData } from './footer.service';
import { mockData } from './mockData';

describe('getFooterData', () => {
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

  it('should return the correct fields', async () => {
    const expectedData = mockData.footerData;
    client.getEntries.mockResolvedValueOnce({ items: [{fields: expectedData}] });
    const data = await getFooterData();
    expect(data).toEqual(expectedData);
    expect(client.getEntries).toHaveBeenCalledWith({ content_type: 'footer', locale: 'cs-CZ' });
  });
});

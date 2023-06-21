import { getProjectDetailData } from './project-detail.service';
import { mockData } from './mockData';

describe('getProjectDetailData', () => {
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
    const expectedData = mockData.projectDetailData;
    client.getEntries.mockResolvedValueOnce({ items: [{fields: expectedData}] });
    const data = await getProjectDetailData();
    expect(data).toEqual(expectedData);
    expect(client.getEntries).toHaveBeenCalledWith({ content_type: 'projectDetail', locale: 'cs-CZ', include: 2 });
  });
});

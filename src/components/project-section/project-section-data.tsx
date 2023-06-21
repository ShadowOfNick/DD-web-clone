import { Document, BLOCKS} from '@contentful/rich-text-types';
import { ContentfulProjectDetailEntry } from '../../services';

export const mockDocument: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [
          {
            nodeType: "text",  // Use the BLOCKS.TEXT constant
            data: {},
            marks: [],
            value: 'This is a mock document',
          },
        ],
      },
    ],
  };

// const projectDetailData: ContentfulProjectDetailEntry[] = [
    // {
    //   fields: {
    //     title: 'Project 1',
    //     subtitle: 'Project 1 subtitle',
    //     slug: 'index',
    //     projectLead: '',  // Add an empty string for the projectLead property
    //     projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //     relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //     image: {
    //       fields: {
    //         title: 'title',
    //         file: {
    //           url: 'https://example.com/project1.jpg',
    //         },
    //       },
    //     },
    //   },
    // },
    // {
    //   fields: {
    //     title: 'Project 2',
    //     subtitle: 'Project 2 subtitle',
    //     slug: 'index',
    //     projectLead: '',  // Add an empty string for the projectLead property
    //     projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //     relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //     image: {
    //       fields: {
    //         title: 'title',
    //         file: {
    //           url: 'https://example.com/project2.jpg',
    //         },
    //       },
    //     },
    //   },
    // },
    // {
    //     fields: {
    //       title: 'Project 2',
    //       subtitle: 'Project 2 subtitle',
    //       slug: 'index',
    //       projectLead: '',  // Add an empty string for the projectLead property
    //       projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //       relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //       image: {
    //         fields: {
    //           title: 'title',
    //           file: {
    //             url: 'https://example.com/project2.jpg',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     fields: {
    //       title: 'Project 2',
    //       subtitle: 'Project 2 subtitle',
    //       slug: 'index',
    //       projectLead: '',  // Add an empty string for the projectLead property
    //       projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //       relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //       image: {
    //         fields: {
    //           title: 'title',
    //           file: {
    //             url: 'https://example.com/project2.jpg',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     fields: {
    //       title: 'Project 2',
    //       subtitle: 'Project 2 subtitle',
    //       slug: 'index',
    //       projectLead: '',  // Add an empty string for the projectLead property
    //       projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //       relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //       image: {
    //         fields: {
    //           title: 'title',
    //           file: {
    //             url: 'https://example.com/project2.jpg',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     fields: {
    //       title: 'Project 2',
    //       subtitle: 'Project 2 subtitle',
    //       slug: 'index',
    //       projectLead: '',  // Add an empty string for the projectLead property
    //       projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //       relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //       image: {
    //         fields: {
    //           title: 'title',
    //           file: {
    //             url: 'https://example.com/project2.jpg',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     fields: {
    //       title: 'Project 2',
    //       subtitle: 'Project 2 subtitle',
    //       slug: 'index',
    //       projectLead: '',  // Add an empty string for the projectLead property
    //       projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //       relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //       image: {
    //         fields: {
    //           title: 'title',
    //           file: {
    //             url: 'https://example.com/project2.jpg',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     fields: {
    //       title: 'Project 2',
    //       subtitle: 'Project 2 subtitle',
    //       slug: 'index',
    //       projectLead: '',  // Add an empty string for the projectLead property
    //       projectDescription: mockDocument,  // Add a null value for the projectDescription property
    //       relatedArticlesTitle: '',  // Add an empty string for the relatedArticlesTitle property
    //       image: {
    //         fields: {
    //           title: 'title',
    //           file: {
    //             url: 'https://example.com/project2.jpg',
    //           },
    //         },
    //       },
    //     },
    //   },
    // ];

    // export default projectDetailData;
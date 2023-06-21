export const mockData = {
  homePageData: {
    fields: {
      contactSectionTitle: "Test Title",
      contactSectionDescription: "Test Description",
      careerSection: {
        fields: {
          title: "Test Career Title",
          buttonLink: "Test Career Link",
          buttonTitle: "Test Career Button",
          description: "Test Career Description",
          subtitle: "Test Career Subtitle",
          careerImage: {
            fields: {
              file: {
                url: "Test Career Image URL"
              }
            }
          },
          positions: []
        }
      },
      carouselSlides: [
        {
          fields: {
            title: "Test Slide Title",
            image: {
              fields: {
                file: {
                  url: "Test Slide Image URL",
                  details: {
                    image: {
                      width: 100,
                      height: 100
                    }
                  }
                }
              }
            }
          }
        }
      ],
      focusSection: {
        fields: {
          focusCard: [],
          title: "Test Focus Title"
        }
      },
      infoSection: {
        fields: {
          description: "Test Info Description",
          quote: "Test Info Quote",
          title: "Test Info Title"
        }
      },
      peopleSection: {
        fields: {
          buttonLabel: "Test People Button Label",
          description: "Test People Description",
          title: "Test People Title",
          peopleCard: [
            {
              fields: {
                email: "test@example.com",
                phoneNumber: "123-456-7890",
                subtitle: "Test People Subtitle",
                title: "Test People Title"
              }
            }
          ]
        }
      },
      projectSection: {
        fields: {
          description: "Test Project Description",
          title: "Test Project Title"
        }
      }
    }
  },
  projectDetailData: [
    {
      title: "Project 1",
      subtitle: "Subtitle for Project 1",
      slug: "project-1",
      projectLead: "John Doe",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      relatedArticlesTitle: "Related Articles",
      image: {
        url: "https://example.com/project-1-image.jpg",
        width: 800,
        height: 600
      },
      relatedArticles: [
        {
          title: "Article 1",
          slug: "article-1"
        },
        {
          title: "Article 2",
          slug: "article-2"
        }
      ]
    },
    {
      title: "Project 2",
      subtitle: "Subtitle for Project 2",
      slug: "project-2",
      projectLead: "Jane Doe",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      relatedArticlesTitle: "Related Articles",
      image: {
        url: "https://example.com/project-2-image.jpg",
        width: 800,
        height: 600,
      },
      relatedArticles: [
        {
          title: "Article 3",
          slug: "article-3",
        },
        {
          title: "Article 4",
          slug: "article-4",
        }
      ]
    }
  ],
  navbarData: [
    {
      title: "Navbar Item 1",
      id: "navbar-item-1",
      link: "navbar-item-1-link"
    },
    {
      title: "Navbar Item 2",
      id: "navbar-item-2",
      link: "navbar-item-2-link"
    }
  ],
  footerData: {
    footerText: "Test Footer Text",
    iconList: [],
    links: [
      {
        link: "test-footer-link-1",
        title: "Test Footer Link 1"
      },
      {
        link: "test-footer-link-2",
        title: "Test Footer Link 2"
      }
    ],
    slogan: "Test Footer Slogan"
  },
};

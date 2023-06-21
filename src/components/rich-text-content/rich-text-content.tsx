import React from 'react';
import { BLOCKS, Block, Document, Inline } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Headline } from '../headline';
import { ImageContent } from '../image-content';

interface RichTextContentProps {
  content: Document;
  isGallery?: boolean;
};

export const RichTextContent: React.FC<RichTextContentProps> = ({
  content,
  isGallery = false,
}) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
        <Headline type='h1'>
          {children}
        </Headline>
      ),
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
        <Headline type='h2'>
          {children}
        </Headline>
      ),
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
        <Headline type='h3'>
          {children}
        </Headline>
      ),
      [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
        <Headline type='h4'>
          {children}
        </Headline>
      ),
      [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => (
        <Headline type='h5'>
          {children}
        </Headline>
      ),
      [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => (
        <Headline type='h6'>
          {children}
        </Headline>
      ),
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
        <p className="rich-text-content__paragraph">
          {children}
        </p>
      ),
      [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
        <ol>
          {children}
        </ol>
      ),
      [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
        <ul>
          {children}
        </ul>
      ),
      [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
        <li>
          {children}
        </li>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => (node.data.target.fields.file.details.image ? (
        <ImageContent
          src={`https:${node.data.target.fields.file.url}?w=1060&fm=webp`}
          modalSrc={`https:${node.data.target.fields.file.url}?w=1600&fm=webp`}
          alt={node.data.target.fields.title}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          isGallery={isGallery}
        />
      ) : (
        <p className="rich-text__error-message">error</p>
      )),
    },
  };

  return (
    <>
      {documentToReactComponents(content, options)}
    </>
  );
};

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Node',
        possibleTypes: [
          {
            name: 'Coupon',
          },
          {
            name: 'ContentType',
          },
          {
            name: 'Taxonomy',
          },
          {
            name: 'ProductCategory',
          },
          {
            name: 'EnqueuedScript',
          },
          {
            name: 'EnqueuedStylesheet',
          },
          {
            name: 'MediaItem',
          },
          {
            name: 'User',
          },
          {
            name: 'Comment',
          },
          {
            name: 'CommentAuthor',
          },
          {
            name: 'Post',
          },
          {
            name: 'Category',
          },
          {
            name: 'PostFormat',
          },
          {
            name: 'Tag',
          },
          {
            name: 'ProductType',
          },
          {
            name: 'VisibleProduct',
          },
          {
            name: 'ProductTag',
          },
          {
            name: 'PaBrand',
          },
          {
            name: 'ProductVariation',
          },
          {
            name: 'VariableProduct',
          },
          {
            name: 'PaMaterial',
          },
          {
            name: 'PaPaperWeight',
          },
          {
            name: 'ShippingClass',
          },
          {
            name: 'Page',
          },
          {
            name: 'UserRole',
          },
          {
            name: 'Customer',
          },
          {
            name: 'Order',
          },
          {
            name: 'TaxRate',
          },
          {
            name: 'Refund',
          },
          {
            name: 'ShippingMethod',
          },
          {
            name: 'ExternalProduct',
          },
          {
            name: 'GroupProduct',
          },
          {
            name: 'Menu',
          },
          {
            name: 'MenuItem',
          },
          {
            name: 'Plugin',
          },
          {
            name: 'SimpleProduct',
          },
          {
            name: 'Theme',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'TermNode',
        possibleTypes: [
          {
            name: 'ProductCategory',
          },
          {
            name: 'Category',
          },
          {
            name: 'PostFormat',
          },
          {
            name: 'Tag',
          },
          {
            name: 'ProductType',
          },
          {
            name: 'VisibleProduct',
          },
          {
            name: 'ProductTag',
          },
          {
            name: 'PaBrand',
          },
          {
            name: 'PaMaterial',
          },
          {
            name: 'PaPaperWeight',
          },
          {
            name: 'ShippingClass',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'EnqueuedAsset',
        possibleTypes: [
          {
            name: 'EnqueuedScript',
          },
          {
            name: 'EnqueuedStylesheet',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'UniformResourceIdentifiable',
        possibleTypes: [
          {
            name: 'ProductCategory',
          },
          {
            name: 'MediaItem',
          },
          {
            name: 'User',
          },
          {
            name: 'Post',
          },
          {
            name: 'Category',
          },
          {
            name: 'PostFormat',
          },
          {
            name: 'Tag',
          },
          {
            name: 'ProductType',
          },
          {
            name: 'VisibleProduct',
          },
          {
            name: 'ProductTag',
          },
          {
            name: 'PaBrand',
          },
          {
            name: 'PaMaterial',
          },
          {
            name: 'PaPaperWeight',
          },
          {
            name: 'ShippingClass',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ContentNode',
        possibleTypes: [
          {
            name: 'MediaItem',
          },
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'CommentAuthorUnion',
        possibleTypes: [
          {
            name: 'User',
          },
          {
            name: 'CommentAuthor',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'PostObjectUnion',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithTitle',
        possibleTypes: [
          {
            name: 'MediaItem',
          },
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithContentEditor',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithAuthor',
        possibleTypes: [
          {
            name: 'MediaItem',
          },
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithFeaturedImage',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithExcerpt',
        possibleTypes: [
          {
            name: 'Post',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithComments',
        possibleTypes: [
          {
            name: 'MediaItem',
          },
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithTrackbacks',
        possibleTypes: [
          {
            name: 'Post',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithRevisions',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'TermObjectUnion',
        possibleTypes: [
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
          {
            name: 'PostFormat',
          },
          {
            name: 'ProductType',
          },
          {
            name: 'VisibleProduct',
          },
          {
            name: 'ProductCategory',
          },
          {
            name: 'ProductTag',
          },
          {
            name: 'ShippingClass',
          },
          {
            name: 'PaBrand',
          },
          {
            name: 'PaMaterial',
          },
          {
            name: 'PaPaperWeight',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Product',
        possibleTypes: [
          {
            name: 'VariableProduct',
          },
          {
            name: 'ExternalProduct',
          },
          {
            name: 'GroupProduct',
          },
          {
            name: 'SimpleProduct',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ProductAttribute',
        possibleTypes: [
          {
            name: 'GlobalProductAttribute',
          },
          {
            name: 'LocalProductAttribute',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithPageAttributes',
        possibleTypes: [
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'HierarchicalContentNode',
        possibleTypes: [
          {
            name: 'MediaItem',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentRevisionUnion',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'MenuItemObjectUnion',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
          {
            name: 'ProductCategory',
          },
          {
            name: 'ProductTag',
          },
          {
            name: 'MenuItem',
          },
        ],
      },
    ],
  },
};
export default result;

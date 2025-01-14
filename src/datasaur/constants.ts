export enum ExtensionID {
  AUTO_LABEL_TOKEN_EXTENSION_ID = 'AUTO_LABEL_TOKEN_EXTENSION_ID',
  AUTO_LABEL_ROW_EXTENSION_ID = 'AUTO_LABEL_ROW_EXTENSION_ID',
  DASHBOARD_EXTENSION_ID = 'DASHBOARD_EXTENSION_ID',
  DICTIONARY_EXTENSION_ID = 'DICTIONARY_EXTENSION_ID',
  DOCUMENT_LABELING_EXTENSION_ID = 'DOCUMENT_LABELING_EXTENSION_ID',
  FILE_COLLECTION_EXTENSION_ID = 'FILE_COLLECTION_EXTENSION_ID',
  GUIDELINES_EXTENSION_ID = 'GUIDELINES_EXTENSION_ID',
  LABELS_EXTENSION_ID = 'LABELS_EXTENSION_ID',
  REVIEW_EXTENSION_ID = 'REVIEW_EXTENSION_ID',
  SEARCH_EXTENSION_ID = 'SEARCH_EXTENSION_ID',
  TEST_EXTENSION_ID = 'TEST_EXTENSION_ID',
}

export const EXTENSIONS = {
  ROW_BASED: {
    LABELER: [
      ExtensionID.DOCUMENT_LABELING_EXTENSION_ID,
      ExtensionID.SEARCH_EXTENSION_ID,
      ExtensionID.FILE_COLLECTION_EXTENSION_ID,
      ExtensionID.AUTO_LABEL_ROW_EXTENSION_ID,
    ],
    REVIEWER: [
      ExtensionID.REVIEW_EXTENSION_ID,
      ExtensionID.DOCUMENT_LABELING_EXTENSION_ID,
      ExtensionID.SEARCH_EXTENSION_ID,
      ExtensionID.FILE_COLLECTION_EXTENSION_ID,
      ExtensionID.AUTO_LABEL_ROW_EXTENSION_ID,
    ],
  },
  DOCUMENT_BASED: {
    LABELER: [
      ExtensionID.DOCUMENT_LABELING_EXTENSION_ID,
      ExtensionID.SEARCH_EXTENSION_ID,
      ExtensionID.FILE_COLLECTION_EXTENSION_ID,
    ],
    REVIEWER: [
      ExtensionID.REVIEW_EXTENSION_ID,
      ExtensionID.DOCUMENT_LABELING_EXTENSION_ID,
      ExtensionID.SEARCH_EXTENSION_ID,
      ExtensionID.FILE_COLLECTION_EXTENSION_ID,
    ],
  },
  TOKEN_BASED: {
    LABELER: [
      ExtensionID.LABELS_EXTENSION_ID,
      ExtensionID.AUTO_LABEL_TOKEN_EXTENSION_ID,
      ExtensionID.SEARCH_EXTENSION_ID,
      ExtensionID.FILE_COLLECTION_EXTENSION_ID,
    ],
    REVIEWER: [
      ExtensionID.REVIEW_EXTENSION_ID,
      ExtensionID.LABELS_EXTENSION_ID,
      ExtensionID.AUTO_LABEL_TOKEN_EXTENSION_ID,
      ExtensionID.SEARCH_EXTENSION_ID,
      ExtensionID.FILE_COLLECTION_EXTENSION_ID,
    ],
  },
};

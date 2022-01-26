import Ajv, { JSONSchemaType } from 'ajv';
import { IDocumentsConfig } from '../interfaces';

const schemaValidator = new Ajv({
  allErrors: true,
});

const DocumentsSchema: JSONSchemaType<IDocumentsConfig> = {
  type: 'object',
  properties: {
    source: { type: 'string' },
    path: { type: 'string' },
    bucketName: { type: 'string' },
    prefix: { type: 'string' },
  },
  required: ['source'],
  oneOf: [{ required: ['source', 'path'] }, { required: ['source', 'bucketName', 'prefix'] }],
};

export const documentsSchemaValidator = schemaValidator.compile(DocumentsSchema);

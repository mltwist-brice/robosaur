import { getLabelSetsFromDirectory } from './labelset';

describe(getLabelSetsFromDirectory.name, () => {
  it('should parse sample labelsets correctly', () => {
    const labelsets = getLabelSetsFromDirectory({ project: { labelSetDirectory: 'config/labelset' } } as any);

    expect(labelsets.length).toEqual(3);
    expect(labelsets[0].label).toEqual('1.sample-hierarchical');
  });
});
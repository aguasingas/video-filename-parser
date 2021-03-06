import { parseResolution, Resolution } from '../src';

describe('parseResolution', () => {
  const cases: Array<[string, Resolution | null]> = [
    ['Oceans.Thirteen.2007.iNTERNAL.720p.BluRay.x264-MHQ', Resolution.R720P],
    ['Rocketman 2019 2160p UHD BluRay x265-TERMiNAL', Resolution.R2160P],
    ['Alita Battle Angel 2019 1080p BluRay x264-SPARKS', Resolution.R1080P],
    ['Alita Battle Angel 2019 HDRip AC3 x264-CMRG', null],
    ['Alita Battle Angel 2019 2160p WEB-DL DD+5 1 HEVC-DEFLATE[NO RAR]', Resolution.R2160P],
    ['Alita: Battle Angel 2019 BRRip AC3 x264-CMRG', null],
    ['Revolution.S01E02.Chained.Heat.[Bluray720p].mkv', Resolution.R720P],
    ['WEEDS.S03E01-06.DUAL.720p.Blu-ray.AC3.-HELLYWOOD.avi', Resolution.R720P],
    ['Revolution.S01E02.Chained.Heat.[Bluray1080p].mkv', Resolution.R1080P],
    ['27.Dresses.2008.REMUX.2160p.Bluray.AVC.DTS-HR.MA.5.1-LEGi0N', Resolution.R2160P],
  ];
  test.each(cases)('should parse %s', (title, expected) => {
    expect(parseResolution(title).resolution).toBe(expected);
  });
});

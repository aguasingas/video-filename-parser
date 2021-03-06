import { parseAudioCodec, AudioCodec } from '../src/audioCodec';

describe('parseAudioCodec', () => {
  const audioChannelCases: Array<[string, ReturnType<typeof parseAudioCodec>]> = [
    [
      'Hannibal 2001 4K UHD Dolby Vision MP4 DD+5 1 H265-d3g',
      { codec: AudioCodec.DOLBY, source: 'Dolby' },
    ],
    ['Aladdin 2019 720p BluRay x264 AC3 5 1-OMEGA', { codec: AudioCodec.DOLBY, source: 'AC3' }],
    ['Trespass Against Us (2017) 1080p BluRay x265 6ch -Dtech mkv', { codec: null, source: null }],
    [
      'Abbot and Costello Meet Frankenstein 1948 BluRay 1080p HEVC Dts Stereo-D3FiL3R',
      { codec: AudioCodec.DTS, source: 'Dts' },
    ],
    [
      'The.Daily.Show.2015.07.01.Kirsten.Gillibrand.Extended.720p.Comedy.Central.WEBRip.AAC2.0.x264-BTW.mkv',
      { codec: AudioCodec.AAC, source: 'AAC' },
    ],
    [
      'Girl on the Third Floor 2019 BRRip x264 AAC-SSN',
      { codec: AudioCodec.AAC, source: 'AAC' },
    ],
    [
      'New Eden S01E01 Who Are These Women CRAV WEB-DL AAC2 0 H 264-BTW',
      { codec: AudioCodec.AAC, source: 'AAC' },
    ],
    [
      'South Park S20E08 Members Only Uncensored 1080p WEB-DL HEVC x265 AAC2ch-NEBO666',
      { codec: AudioCodec.AAC, source: 'AAC' },
    ],
    [
      'Behind the Candelabra 2013 BDRip 1080p DTS-HD extra-HighCode',
      { codec: AudioCodec.DTSHD, source: 'DTS-HD' },
    ],
  ];
  it.each(audioChannelCases)('should parse channel "%s"', (title, channel) => {
    expect(parseAudioCodec(title)).toEqual(channel);
  });
});

// src/mocks/handlers.js
import { rest } from 'msw';

const handlers = [
  rest.get(import.meta.env.VITE_SERVICE_ENDPOINT, (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          {
            id: 1,
            url: 'http://www.example.com/item1_1',
            patient_id: '12492931',
            patient_name: 'McFly, Marty',
            patient_gender: 'M',
            patient_dob: '1968-06-12',
            timestamp: '2007-01-22 22:36:39',
            state: 'ready',
            slice_thickness: 4,
            scanner_manufacturer: 'MegaScan',
            scanner_model: 'MC2000',
            series_description: 'Adult brain  4.0 H40s',
            study_description: 'FremdCT Sch\u00e4del/Hals',
            thumbnail:
              'https://brainomix-web-media.s3-eu-west-1.amazonaws.com/recruitment/fe-challenge/thumbnail1_1.png',
          },
          {
            id: 2,
            url: 'http://www.example.com/item1_2',
            patient_id: '07432175',
            patient_name: 'Brown, Emmett',
            patient_gender: 'M',
            patient_dob: '1920-03-04',
            timestamp: '2016-04-03 12:34:56',
            state: 'ready',
            slice_thickness: 4,
            scanner_manufacturer: 'MegaScan',
            scanner_model: 'MC2000',
            series_description:
              'The description of this item is very long and goes on for ages and ages.',
            study_description: 'What a lot of descriptive text.',
            thumbnail:
              'https://brainomix-web-media.s3-eu-west-1.amazonaws.com/recruitment/fe-challenge/thumbnail1_2.png',
          },
          {
            id: 42,
            url: 'http://www.example.com/item1_3',
            patient_id: 'A987345-110010',
            patient_name: 'Clayton, Clara',
            patient_gender: 'F',
            patient_dob: '1855-10-25',
            timestamp: '2016-04-05 14:41:23',
            state: 'failed',
            slice_thickness: 1.25,
            scanner_manufacturer: '  UltraScannerCo',
            scanner_model: 'UltraScannerCo Model F',
            series_description: 'Brain',
            study_description: 'HEAD',
            thumbnail:
              'https://brainomix-web-media.s3-eu-west-1.amazonaws.com/recruitment/fe-challenge/thumbnail1_3.png',
          },
          {
            id: 43,
            url: 'http://www.example.com/item1_4',
            patient_id: '_ID14',
            patient_name: null,
            patient_gender: null,
            patient_dob: null,
            timestamp: '2016-01-01 13:14:15',
            state: 'ready',
            slice_thickness: 1.234,
            scanner_manufacturer: 'We Make Scanners Ltd',
            scanner_model: 'Type 1',
            series_description: '',
            study_description: '',
            thumbnail:
              'https://brainomix-web-media.s3-eu-west-1.amazonaws.com/recruitment/fe-challenge/thumbnail1_4.png',
          },
          {
            id: 410,
            url: 'http://www.example.com/item1_5',
            patient_id: '_ID15',
            patient_name: null,
            patient_gender: null,
            patient_dob: null,
            timestamp: '2016-01-01 14:15:16',
            state: 'ready',
            slice_thickness: 4.0,
            scanner_manufacturer: 'We Make Scanners Ltd',
            scanner_model: 'Type 1',
            series_description: '',
            study_description: '',
            thumbnail:
              'https://brainomix-web-media.s3-eu-west-1.amazonaws.com/recruitment/fe-challenge/thumbnail1_5.png',
          },
        ],
      })
    );
  }),
];

export default handlers;

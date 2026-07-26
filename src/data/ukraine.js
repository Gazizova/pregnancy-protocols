export const ukraineProtocol = {
  title: 'Український протокол ведення вагітності',
  subtitle: 'Календар обстежень і візитів за Наказом МОЗ України №1437 (2022), розділений на 3 триместри.',
  otherLabel: 'Інше',
  trimesters: [
    {
      number: 1,
      label: 'I триместр',
      weeks: '1–13 тижнів',
      items: [
        {
          id: 'ua-t1-1',
          week: '6–8 тиж',
          title: 'Взяття на облік',
          shortDesc: 'Перший візит до лікаря, збір анамнезу',
          category: 'visit',
          required: true,
          desc: 'Перший візит для постановки на облік з приводу вагітності.',
        },
      ],
    },
    {
      number: 2,
      label: 'II триместр',
      weeks: '14–27 тижнів',
      items: [
        {
          id: 'ua-t2-1',
          week: '18–21 тиж',
          title: 'УЗД II триместру',
          shortDesc: 'Анатомічний скринінг плода',
          category: 'uzd',
          required: true,
          desc: 'Детальне УЗД для оцінки анатомії плода.',
        },
      ],
    },
    {
      number: 3,
      label: 'III триместр',
      weeks: '28–40 тижнів',
      items: [
        {
          id: 'ua-t3-1',
          week: '35–36 тиж',
          title: 'Візит перед пологами',
          shortDesc: 'Оцінка стану та плану пологів',
          category: 'visit',
          required: true,
          desc: 'Плановий візит для підготовки до пологів.',
        },
      ],
    },
  ],
  modals: {},
}

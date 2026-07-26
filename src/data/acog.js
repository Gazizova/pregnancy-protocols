export const acogProtocol = {
  title: 'Американський протокол ACOG',
  subtitle: 'Календар обстежень і візитів за ACOG Practice Bulletins, розділений на 3 триместри.',
  otherLabel: 'Інше',
  trimesters: [
    {
      number: 1,
      label: 'I триместр',
      weeks: '1–13 тижнів',
      items: [
        {
          id: 'acog-t1-1',
          week: '10 тиж',
          title: 'cfDNA screening',
          shortDesc: 'Неінвазивний пренатальний тест',
          category: 'analysis',
          required: false,
          desc: 'Скринінг вільної фетальної ДНК у крові матері.',
        },
      ],
    },
    {
      number: 2,
      label: 'II триместр',
      weeks: '14–27 тижнів',
      items: [
        {
          id: 'acog-t2-1',
          week: '18–22 тиж',
          title: 'Anatomy ultrasound',
          shortDesc: 'Детальне УЗД анатомії плода',
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
          id: 'acog-t3-1',
          week: '39 тиж',
          title: 'Елективна стимуляція',
          shortDesc: 'Обговорення планової індукції пологів',
          category: 'visit',
          required: false,
          desc: 'Обговорення можливості елективної стимуляції пологів на 39 тижні.',
        },
      ],
    },
  ],
  modals: {},
}

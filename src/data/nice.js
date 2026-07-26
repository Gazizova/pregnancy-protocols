export const niceProtocol = {
  title: 'Британський протокол NICE',
  subtitle: 'Календар обстежень і візитів за NICE NG201, розділений на 3 триместри.',
  otherLabel: 'Візит',
  trimesters: [
    {
      number: 1,
      label: 'I триместр',
      weeks: '1–13 тижнів',
      items: [
        {
          id: 'nice-t1-1',
          week: '8–12 тиж',
          title: 'Booking appointment',
          shortDesc: 'Перший антенатальний візит',
          category: 'visit',
          required: true,
          desc: 'Booking appointment для оцінки стану та планування спостереження.',
        },
      ],
    },
    {
      number: 2,
      label: 'II триместр',
      weeks: '14–27 тижнів',
      items: [
        {
          id: 'nice-t2-1',
          week: '18–21 тиж',
          title: 'Anomaly scan',
          shortDesc: 'Скринінгове УЗД аномалій розвитку',
          category: 'uzd',
          required: true,
          desc: 'Anomaly scan для оцінки анатомії плода.',
        },
      ],
    },
    {
      number: 3,
      label: 'III триместр',
      weeks: '28–40 тижнів',
      items: [
        {
          id: 'nice-t3-1',
          week: '28 тиж',
          title: 'Tdap вакцинація',
          shortDesc: 'Вакцинація проти кашлюку',
          category: 'vaccine',
          required: true,
          desc: 'Вакцинація Tdap у період 16–32 тижнів.',
        },
      ],
    },
  ],
  modals: {},
}

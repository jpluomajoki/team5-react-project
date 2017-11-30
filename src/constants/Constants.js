export const DUMMY_DATA = [
  {
    id: 6,
    name: 'AMO 2018',
    description: 'Alueellisen metsäohjelman skenaariot vuodelta 2018; VMI11-maastoaineisto vuosilta 2015-2019',
    scenarios: [
      {
        id: 10,
        description: 'Suurin nettotulo',
        name: 'SNT',
        order: 1
      },
      {
        id: 11,
        description: 'Ilmasto- ja energiapoliittinen',
        name: 'IEP',
        order: 2
      },
      {
        id: 12,
        description: 'Mustikkasato',
        name: 'MuS',
        order: 3
      },
      {
        id: 13,
        description: 'Puolukkasato',
        name: 'PuS',
        order: 4
      },
      {
        id: 14,
        description: 'Lahopuu',
        name: 'LaP',
        order: 5
      },
      {
        id: 15,
        description: 'Hiilinielu',
        name: 'HiN',
        order: 6
      }
    ],
    timePeriods: [
      {
        id: 20,
        yearStart: 2018,
        yearEnd: 2022
      },
      {
        id: 21,
        yearStart: 2023,
        yearEnd: 2027
      },
      {
        id: 22,
        yearStart: 2028,
        yearEnd: 2032
      },
      {
        id: 23,
        yearStart: 2033,
        yearEnd: 2033
      }
    ],
    indicatorCategories: [
      {
        id: 1,
        name: 'Puuntuotanto',
        description: 'Puuntuotanto-indikaattorit kuvaavat …',
        isMandatory: 1,
        order: 1,
        indicators: [
          {
            id: 120,
            name: 'Kantohinta-arvo',
            description: 'Kantohinta-arvo suhteessa kantohinta-arvon maksimiin, joka on saatu ….',
            absVar: 11,
            order: 1
          },
          {
            id: 122,
            name: 'Nettotulojen nykyarvo',
            description: 'Nettotulojen nykyarvo suhteessa nettotulojen nykyarvon maksimiin, joka on saatu ….',
            absVar: 121,
            order: 2
          },
          {
            id: 123,
            name: 'Tukkikertymä',
            description: 'Tukkikertymä suhteessa tukkikertymän maksimiin, joka on saatu ….',
            absVar: 17,
            order: 3
          },
          {
            id: 124,
            name: 'Kuitukertymä',
            description: 'Kuitukertymä suhteessa  kuitukertymän  maksimiin, joka on saatu ….',
            absVar: 94,
            order: 4
          },
          {
            id: 125,
            name: 'Runkotilavuus',
            description: 'Runkotilavuus suhteessa  runkotilaavuden  maksimiin, joka on saatu ….',
            absVar: 2,
            order: 5
          }
        ]
      },
      {
        id: 2,
        name: 'Monimuotoisuus',
        description: 'Monimuotoisuus-indikaattorit kuvaavat …',
        isMandatory: 1,
        order: 2,
        indicators: [
          {
            id: 127,
            name: 'Lahopuun määrä',
            description: 'Lahopuun määrä suhteessa  lahopuun määrän  maksimiin, joka on saatu ….',
            absVar: 126,
            order: 6
          },
          {
            id: 129,
            name: 'Putkilokasvien lkm',
            description: 'Putkilokasvien lukumäärä suhteessa  putkilokasvien lukumäärän  maksimiin, joka on saatu ….',
            absVar: 128,
            order: 7
          },
          {
            id: 131,
            name: 'Mustikan peittävyys',
            description: 'Mustikan peittävyys suhteessa  mustikan peittävyden  maksimiin, joka on saatu ….',
            absVar: 130,
            order: 8
          }
        ]
      },
      {
        id: 3,
        name: 'Keruutuotteet',
        description: 'Keruutuotteet-indikaattorit kuvaavat …',
        isMandatory: 0,
        order: 3,
        indicators: [
          {
            id: 133,
            name: 'Mustikkasato',
            description: 'Mustikkasato suhteessa  mustikkasadon maksimiin, joka on saatu ….',
            absVar: 132,
            order: 9
          },
          {
            id: 134,
            name: 'Puolukkasato',
            description: 'Poimittavissa olevan puolukan määrä',
            absVar: 135,
            order: 10
          }
        ]
      },
      {
        id: 4,
        name: 'Hiili',
        description: 'Hiili-indikaattorit kuvaavat …',
        isMandatory: 0,
        order: 4,
        indicators: [
          {
            id: 137,
            name: 'Hiili',
            description: 'Hiilen määrä suhteessa hiilen maksimiin, joka on saatu …',
            absVar: 136,
            order: 11
          }
        ]
      },
      {
        id: 5,
        name: 'Muut',
        description: 'Muut sekalaiset indikaattorit …',
        isMandatory: 0,
        order: 5,
        indicators: [
          {
            id: 139,
            name: 'Biomassa, luonnonpoistuma',
            description: 'Luonnonpoistuman kokonaisbiomassa suhteessa luonnonpoistuman kokonaisbiomassan maksimiin, joka on saatu … Luonnonpoistuman kokonaisbiomassa käsittää  rungon, latvuksen, kannon ja juurien biomassan.',
            absVar: 138,
            order: 12
          },
          {
            id: 141,
            name: 'Biomassa, hakkuupoistuma',
            description: 'Hakkuupoistuman kokonaisbiomassa suhteessa hakkuupoistuman kokonaisbiomassan maksimiin, joka on saatu … Luonnonpoistuman kokonaisbiomassa käsittää  rungon, latvuksen, kannon ja juurien biomassan.',
            absVar: 140,
            order: 13
          }
        ]
      }
    ],
    values: [
      {
        scenarioId: 10,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.27
      },
      {
        scenarioId: 10,
        indicatorId: 122,
        timePeriodId: 20,
        value: 0.99
      },
      {
        scenarioId: 10,
        indicatorId: 137,
        timePeriodId: 20,
        value: 0.37
      },
      {
        scenarioId: 10,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.13
      },
      {
        scenarioId: 10,
        indicatorId: 131,
        timePeriodId: 20,
        value: 0.26
      },
      {
        scenarioId: 10,
        indicatorId: 129,
        timePeriodId: 20,
        value: 0.13
      },
      {
        scenarioId: 10,
        indicatorId: 127,
        timePeriodId: 20,
        value: 0.22
      },
      {
        scenarioId: 10,
        indicatorId: 125,
        timePeriodId: 20,
        value: 0.7
      },
      {
        scenarioId: 10,
        indicatorId: 124,
        timePeriodId: 20,
        value: 0.11
      },
      {
        scenarioId: 10,
        indicatorId: 123,
        timePeriodId: 20,
        value: 0.65
      },
      {
        scenarioId: 10,
        indicatorId: 123,
        timePeriodId: 21,
        value: 0.13
      },
      {
        scenarioId: 10,
        indicatorId: 122,
        timePeriodId: 21,
        value: 0.12
      },
      {
        scenarioId: 10,
        indicatorId: 137,
        timePeriodId: 21,
        value: 0.94
      },
      {
        scenarioId: 10,
        indicatorId: 120,
        timePeriodId: 21,
        value: 0.79
      },
      {
        scenarioId: 10,
        indicatorId: 131,
        timePeriodId: 21,
        value: 0.2
      },
      {
        scenarioId: 10,
        indicatorId: 129,
        timePeriodId: 21,
        value: 0.35
      },
      {
        scenarioId: 10,
        indicatorId: 127,
        timePeriodId: 21,
        value: 0.84
      },
      {
        scenarioId: 10,
        indicatorId: 125,
        timePeriodId: 21,
        value: 0.95
      },
      {
        scenarioId: 10,
        indicatorId: 124,
        timePeriodId: 21,
        value: 0.16
      },
      {
        scenarioId: 10,
        indicatorId: 124,
        timePeriodId: 22,
        value: 0.7
      },
      {
        scenarioId: 10,
        indicatorId: 123,
        timePeriodId: 22,
        value: 0.74
      },
      {
        scenarioId: 10,
        indicatorId: 122,
        timePeriodId: 22,
        value: 0.26
      },
      {
        scenarioId: 10,
        indicatorId: 137,
        timePeriodId: 22,
        value: 0.36
      },
      {
        scenarioId: 10,
        indicatorId: 120,
        timePeriodId: 22,
        value: 0.75
      },
      {
        scenarioId: 10,
        indicatorId: 131,
        timePeriodId: 22,
        value: 0.24
      },
      {
        scenarioId: 10,
        indicatorId: 129,
        timePeriodId: 22,
        value: 0.76
      },
      {
        scenarioId: 10,
        indicatorId: 127,
        timePeriodId: 22,
        value: 0.03
      },
      {
        scenarioId: 10,
        indicatorId: 125,
        timePeriodId: 22,
        value: 0.67
      },
      {
        scenarioId: 10,
        indicatorId: 125,
        timePeriodId: 23,
        value: 0.76
      },
      {
        scenarioId: 10,
        indicatorId: 124,
        timePeriodId: 23,
        value: 0.75
      },
      {
        scenarioId: 10,
        indicatorId: 123,
        timePeriodId: 23,
        value: 0.46
      },
      {
        scenarioId: 10,
        indicatorId: 122,
        timePeriodId: 23,
        value: 0.75
      },
      {
        scenarioId: 10,
        indicatorId: 137,
        timePeriodId: 23,
        value: 0.04
      },
      {
        scenarioId: 10,
        indicatorId: 120,
        timePeriodId: 23,
        value: 0.48
      },
      {
        scenarioId: 10,
        indicatorId: 131,
        timePeriodId: 23,
        value: 0.14
      },
      {
        scenarioId: 10,
        indicatorId: 129,
        timePeriodId: 23,
        value: 0.17
      },
      {
        scenarioId: 10,
        indicatorId: 127,
        timePeriodId: 23,
        value: 0.91
      },
      {
        scenarioId: 11,
        indicatorId: 127,
        timePeriodId: 20,
        value: 0.6
      },
      {
        scenarioId: 11,
        indicatorId: 125,
        timePeriodId: 20,
        value: 0.61
      },
      {
        scenarioId: 11,
        indicatorId: 124,
        timePeriodId: 20,
        value: 0.83
      },
      {
        scenarioId: 11,
        indicatorId: 123,
        timePeriodId: 20,
        value: 0.19
      },
      {
        scenarioId: 11,
        indicatorId: 122,
        timePeriodId: 20,
        value: 0.62
      },
      {
        scenarioId: 11,
        indicatorId: 137,
        timePeriodId: 20,
        value: 0.93
      },
      {
        scenarioId: 11,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.89
      },
      {
        scenarioId: 11,
        indicatorId: 131,
        timePeriodId: 20,
        value: 0.95
      },
      {
        scenarioId: 11,
        indicatorId: 129,
        timePeriodId: 20,
        value: 0.33
      },
      {
        scenarioId: 11,
        indicatorId: 129,
        timePeriodId: 21,
        value: 0.35
      },
      {
        scenarioId: 11,
        indicatorId: 127,
        timePeriodId: 21,
        value: 0.7
      },
      {
        scenarioId: 11,
        indicatorId: 125,
        timePeriodId: 21,
        value: 0.35
      },
      {
        scenarioId: 11,
        indicatorId: 124,
        timePeriodId: 21,
        value: 0.07
      },
      {
        scenarioId: 11,
        indicatorId: 123,
        timePeriodId: 21,
        value: 0.7
      },
      {
        scenarioId: 11,
        indicatorId: 122,
        timePeriodId: 21,
        value: 0.34
      },
      {
        scenarioId: 11,
        indicatorId: 137,
        timePeriodId: 21,
        value: 0.67
      },
      {
        scenarioId: 11,
        indicatorId: 120,
        timePeriodId: 21,
        value: 0.07
      },
      {
        scenarioId: 11,
        indicatorId: 131,
        timePeriodId: 21,
        value: 0.36
      },
      {
        scenarioId: 11,
        indicatorId: 131,
        timePeriodId: 22,
        value: 0.76
      },
      {
        scenarioId: 11,
        indicatorId: 129,
        timePeriodId: 22,
        value: 0.85
      },
      {
        scenarioId: 11,
        indicatorId: 127,
        timePeriodId: 22,
        value: 0.62
      },
      {
        scenarioId: 11,
        indicatorId: 125,
        timePeriodId: 22,
        value: 0.37
      },
      {
        scenarioId: 11,
        indicatorId: 124,
        timePeriodId: 22,
        value: 0.76
      },
      {
        scenarioId: 11,
        indicatorId: 123,
        timePeriodId: 22,
        value: 0.07
      },
      {
        scenarioId: 11,
        indicatorId: 122,
        timePeriodId: 22,
        value: 0.62
      },
      {
        scenarioId: 11,
        indicatorId: 137,
        timePeriodId: 22,
        value: 0.44
      },
      {
        scenarioId: 11,
        indicatorId: 120,
        timePeriodId: 22,
        value: 0.83
      },
      {
        scenarioId: 11,
        indicatorId: 137,
        timePeriodId: 23,
        value: 0.55
      },
      {
        scenarioId: 11,
        indicatorId: 120,
        timePeriodId: 23,
        value: 0.85
      },
      {
        scenarioId: 11,
        indicatorId: 131,
        timePeriodId: 23,
        value: 0.02
      },
      {
        scenarioId: 11,
        indicatorId: 129,
        timePeriodId: 23,
        value: 0.77
      },
      {
        scenarioId: 11,
        indicatorId: 127,
        timePeriodId: 23,
        value: 0.98
      },
      {
        scenarioId: 11,
        indicatorId: 125,
        timePeriodId: 23,
        value: 0.19
      },
      {
        scenarioId: 11,
        indicatorId: 124,
        timePeriodId: 23,
        value: 0.39
      },
      {
        scenarioId: 11,
        indicatorId: 123,
        timePeriodId: 23,
        value: 0.91
      },
      {
        scenarioId: 11,
        indicatorId: 122,
        timePeriodId: 23,
        value: 0.71
      },
      {
        scenarioId: 12,
        indicatorId: 122,
        timePeriodId: 20,
        value: 0.08
      },
      {
        scenarioId: 12,
        indicatorId: 137,
        timePeriodId: 20,
        value: 0.44
      },
      {
        scenarioId: 12,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.53
      },
      {
        scenarioId: 12,
        indicatorId: 131,
        timePeriodId: 20,
        value: 0.09
      },
      {
        scenarioId: 12,
        indicatorId: 129,
        timePeriodId: 20,
        value: 0.62
      },
      {
        scenarioId: 12,
        indicatorId: 127,
        timePeriodId: 20,
        value: 0.38
      },
      {
        scenarioId: 12,
        indicatorId: 125,
        timePeriodId: 20,
        value: 0.52
      },
      {
        scenarioId: 12,
        indicatorId: 124,
        timePeriodId: 20,
        value: 0.93
      },
      {
        scenarioId: 12,
        indicatorId: 123,
        timePeriodId: 20,
        value: 0.98
      },
      {
        scenarioId: 12,
        indicatorId: 123,
        timePeriodId: 21,
        value: 0.4
      },
      {
        scenarioId: 12,
        indicatorId: 122,
        timePeriodId: 21,
        value: 0.89
      },
      {
        scenarioId: 12,
        indicatorId: 137,
        timePeriodId: 21,
        value: 0.38
      },
      {
        scenarioId: 12,
        indicatorId: 120,
        timePeriodId: 21,
        value: 0.19
      },
      {
        scenarioId: 12,
        indicatorId: 131,
        timePeriodId: 21,
        value: 0.31
      },
      {
        scenarioId: 12,
        indicatorId: 129,
        timePeriodId: 21,
        value: 0.35
      },
      {
        scenarioId: 12,
        indicatorId: 127,
        timePeriodId: 21,
        value: 0.19
      },
      {
        scenarioId: 12,
        indicatorId: 125,
        timePeriodId: 21,
        value: 0.44
      },
      {
        scenarioId: 12,
        indicatorId: 124,
        timePeriodId: 21,
        value: 0.13
      },
      {
        scenarioId: 12,
        indicatorId: 124,
        timePeriodId: 22,
        value: 0.32
      },
      {
        scenarioId: 12,
        indicatorId: 123,
        timePeriodId: 22,
        value: 0.11
      },
      {
        scenarioId: 12,
        indicatorId: 122,
        timePeriodId: 22,
        value: 0.37
      },
      {
        scenarioId: 12,
        indicatorId: 137,
        timePeriodId: 22,
        value: 0.93
      },
      {
        scenarioId: 12,
        indicatorId: 120,
        timePeriodId: 22,
        value: 1
      },
      {
        scenarioId: 12,
        indicatorId: 131,
        timePeriodId: 22,
        value: 0.16
      },
      {
        scenarioId: 12,
        indicatorId: 129,
        timePeriodId: 22,
        value: 0.91
      },
      {
        scenarioId: 12,
        indicatorId: 127,
        timePeriodId: 22,
        value: 0.24
      },
      {
        scenarioId: 12,
        indicatorId: 125,
        timePeriodId: 22,
        value: 0.16
      },
      {
        scenarioId: 12,
        indicatorId: 125,
        timePeriodId: 23,
        value: 0.25
      },
      {
        scenarioId: 12,
        indicatorId: 124,
        timePeriodId: 23,
        value: 0.56
      },
      {
        scenarioId: 12,
        indicatorId: 123,
        timePeriodId: 23,
        value: 0.39
      },
      {
        scenarioId: 12,
        indicatorId: 122,
        timePeriodId: 23,
        value: 0.73
      },
      {
        scenarioId: 12,
        indicatorId: 137,
        timePeriodId: 23,
        value: 0.76
      },
      {
        scenarioId: 12,
        indicatorId: 120,
        timePeriodId: 23,
        value: 0.27
      },
      {
        scenarioId: 12,
        indicatorId: 131,
        timePeriodId: 23,
        value: 0.67
      },
      {
        scenarioId: 12,
        indicatorId: 129,
        timePeriodId: 23,
        value: 0.04
      },
      {
        scenarioId: 12,
        indicatorId: 127,
        timePeriodId: 23,
        value: 0.83
      },
      {
        scenarioId: 13,
        indicatorId: 127,
        timePeriodId: 20,
        value: 0.93
      },
      {
        scenarioId: 13,
        indicatorId: 125,
        timePeriodId: 20,
        value: 0.5
      },
      {
        scenarioId: 13,
        indicatorId: 124,
        timePeriodId: 20,
        value: 0.97
      },
      {
        scenarioId: 13,
        indicatorId: 123,
        timePeriodId: 20,
        value: 0.05
      },
      {
        scenarioId: 13,
        indicatorId: 122,
        timePeriodId: 20,
        value: 0.66
      },
      {
        scenarioId: 13,
        indicatorId: 137,
        timePeriodId: 20,
        value: 0.72
      },
      {
        scenarioId: 13,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.24
      },
      {
        scenarioId: 13,
        indicatorId: 131,
        timePeriodId: 20,
        value: 0.11
      },
      {
        scenarioId: 13,
        indicatorId: 129,
        timePeriodId: 20,
        value: 0.17
      },
      {
        scenarioId: 13,
        indicatorId: 129,
        timePeriodId: 21,
        value: 0.24
      },
      {
        scenarioId: 13,
        indicatorId: 127,
        timePeriodId: 21,
        value: 0.45
      },
      {
        scenarioId: 13,
        indicatorId: 125,
        timePeriodId: 21,
        value: 0.04
      },
      {
        scenarioId: 13,
        indicatorId: 124,
        timePeriodId: 21,
        value: 0.41
      },
      {
        scenarioId: 13,
        indicatorId: 123,
        timePeriodId: 21,
        value: 0.38
      },
      {
        scenarioId: 13,
        indicatorId: 122,
        timePeriodId: 21,
        value: 0.8
      },
      {
        scenarioId: 13,
        indicatorId: 137,
        timePeriodId: 21,
        value: 0.3
      },
      {
        scenarioId: 13,
        indicatorId: 120,
        timePeriodId: 21,
        value: 0.07
      },
      {
        scenarioId: 13,
        indicatorId: 131,
        timePeriodId: 21,
        value: 0.85
      },
      {
        scenarioId: 13,
        indicatorId: 131,
        timePeriodId: 22,
        value: 0.88
      },
      {
        scenarioId: 13,
        indicatorId: 129,
        timePeriodId: 22,
        value: 0.04
      },
      {
        scenarioId: 13,
        indicatorId: 127,
        timePeriodId: 22,
        value: 0.64
      },
      {
        scenarioId: 13,
        indicatorId: 125,
        timePeriodId: 22,
        value: 0.16
      },
      {
        scenarioId: 13,
        indicatorId: 124,
        timePeriodId: 22,
        value: 0.84
      },
      {
        scenarioId: 13,
        indicatorId: 123,
        timePeriodId: 22,
        value: 0.21
      },
      {
        scenarioId: 13,
        indicatorId: 122,
        timePeriodId: 22,
        value: 0.19
      },
      {
        scenarioId: 13,
        indicatorId: 137,
        timePeriodId: 22,
        value: 0.06
      },
      {
        scenarioId: 13,
        indicatorId: 120,
        timePeriodId: 22,
        value: 0.25
      },
      {
        scenarioId: 13,
        indicatorId: 137,
        timePeriodId: 23,
        value: 0.81
      },
      {
        scenarioId: 13,
        indicatorId: 120,
        timePeriodId: 23,
        value: 0.48
      },
      {
        scenarioId: 13,
        indicatorId: 131,
        timePeriodId: 23,
        value: 0.95
      },
      {
        scenarioId: 13,
        indicatorId: 129,
        timePeriodId: 23,
        value: 0.25
      },
      {
        scenarioId: 13,
        indicatorId: 127,
        timePeriodId: 23,
        value: 0.27
      },
      {
        scenarioId: 13,
        indicatorId: 125,
        timePeriodId: 23,
        value: 0.92
      },
      {
        scenarioId: 13,
        indicatorId: 124,
        timePeriodId: 23,
        value: 0.15
      },
      {
        scenarioId: 13,
        indicatorId: 123,
        timePeriodId: 23,
        value: 0.3
      },
      {
        scenarioId: 13,
        indicatorId: 122,
        timePeriodId: 23,
        value: 0.22
      },
      {
        scenarioId: 14,
        indicatorId: 122,
        timePeriodId: 20,
        value: 0.96
      },
      {
        scenarioId: 14,
        indicatorId: 137,
        timePeriodId: 20,
        value: 0.85
      },
      {
        scenarioId: 14,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.08
      },
      {
        scenarioId: 14,
        indicatorId: 131,
        timePeriodId: 20,
        value: 0.4
      },
      {
        scenarioId: 14,
        indicatorId: 129,
        timePeriodId: 20,
        value: 0.14
      },
      {
        scenarioId: 14,
        indicatorId: 127,
        timePeriodId: 20,
        value: 0.08
      },
      {
        scenarioId: 14,
        indicatorId: 125,
        timePeriodId: 20,
        value: 0.22
      },
      {
        scenarioId: 14,
        indicatorId: 124,
        timePeriodId: 20,
        value: 0.73
      },
      {
        scenarioId: 14,
        indicatorId: 123,
        timePeriodId: 20,
        value: 0.38
      },
      {
        scenarioId: 14,
        indicatorId: 123,
        timePeriodId: 21,
        value: 0.96
      },
      {
        scenarioId: 14,
        indicatorId: 122,
        timePeriodId: 21,
        value: 0.98
      },
      {
        scenarioId: 14,
        indicatorId: 137,
        timePeriodId: 21,
        value: 0.83
      },
      {
        scenarioId: 14,
        indicatorId: 120,
        timePeriodId: 21,
        value: 0.15
      },
      {
        scenarioId: 14,
        indicatorId: 131,
        timePeriodId: 21,
        value: 0.09
      },
      {
        scenarioId: 14,
        indicatorId: 129,
        timePeriodId: 21,
        value: 0.59
      },
      {
        scenarioId: 14,
        indicatorId: 127,
        timePeriodId: 21,
        value: 0.78
      },
      {
        scenarioId: 14,
        indicatorId: 125,
        timePeriodId: 21,
        value: 0.08
      },
      {
        scenarioId: 14,
        indicatorId: 124,
        timePeriodId: 21,
        value: 0.96
      },
      {
        scenarioId: 14,
        indicatorId: 124,
        timePeriodId: 22,
        value: 0.24
      },
      {
        scenarioId: 14,
        indicatorId: 123,
        timePeriodId: 22,
        value: 0.31
      },
      {
        scenarioId: 14,
        indicatorId: 122,
        timePeriodId: 22,
        value: 0.5
      },
      {
        scenarioId: 14,
        indicatorId: 137,
        timePeriodId: 22,
        value: 0.69
      },
      {
        scenarioId: 14,
        indicatorId: 120,
        timePeriodId: 22,
        value: 0.91
      },
      {
        scenarioId: 14,
        indicatorId: 131,
        timePeriodId: 22,
        value: 0.72
      },
      {
        scenarioId: 14,
        indicatorId: 129,
        timePeriodId: 22,
        value: 0.2
      },
      {
        scenarioId: 14,
        indicatorId: 127,
        timePeriodId: 22,
        value: 0.38
      },
      {
        scenarioId: 14,
        indicatorId: 125,
        timePeriodId: 22,
        value: 0.47
      },
      {
        scenarioId: 14,
        indicatorId: 125,
        timePeriodId: 23,
        value: 0.03
      },
      {
        scenarioId: 14,
        indicatorId: 124,
        timePeriodId: 23,
        value: 0.8
      },
      {
        scenarioId: 14,
        indicatorId: 123,
        timePeriodId: 23,
        value: 0.17
      },
      {
        scenarioId: 14,
        indicatorId: 122,
        timePeriodId: 23,
        value: 0.07
      },
      {
        scenarioId: 14,
        indicatorId: 137,
        timePeriodId: 23,
        value: 0.01
      },
      {
        scenarioId: 14,
        indicatorId: 120,
        timePeriodId: 23,
        value: 0.56
      },
      {
        scenarioId: 14,
        indicatorId: 131,
        timePeriodId: 23,
        value: 0.5
      },
      {
        scenarioId: 14,
        indicatorId: 129,
        timePeriodId: 23,
        value: 0.1
      },
      {
        scenarioId: 14,
        indicatorId: 127,
        timePeriodId: 23,
        value: 0.85
      },
      {
        scenarioId: 15,
        indicatorId: 127,
        timePeriodId: 20,
        value: 0.9
      },
      {
        scenarioId: 15,
        indicatorId: 125,
        timePeriodId: 20,
        value: 0.37
      },
      {
        scenarioId: 15,
        indicatorId: 124,
        timePeriodId: 20,
        value: 0.91
      },
      {
        scenarioId: 15,
        indicatorId: 123,
        timePeriodId: 20,
        value: 0.79
      },
      {
        scenarioId: 15,
        indicatorId: 122,
        timePeriodId: 20,
        value: 0.35
      },
      {
        scenarioId: 15,
        indicatorId: 137,
        timePeriodId: 20,
        value: 0.58
      },
      {
        scenarioId: 15,
        indicatorId: 120,
        timePeriodId: 20,
        value: 0.04
      },
      {
        scenarioId: 15,
        indicatorId: 131,
        timePeriodId: 20,
        value: 0.56
      },
      {
        scenarioId: 15,
        indicatorId: 129,
        timePeriodId: 20,
        value: 0.28
      },
      {
        scenarioId: 15,
        indicatorId: 129,
        timePeriodId: 21,
        value: 0.15
      },
      {
        scenarioId: 15,
        indicatorId: 127,
        timePeriodId: 21,
        value: 0.89
      },
      {
        scenarioId: 15,
        indicatorId: 125,
        timePeriodId: 21,
        value: 0.34
      },
      {
        scenarioId: 15,
        indicatorId: 124,
        timePeriodId: 21,
        value: 0.1
      },
      {
        scenarioId: 15,
        indicatorId: 123,
        timePeriodId: 21,
        value: 0.25
      },
      {
        scenarioId: 15,
        indicatorId: 122,
        timePeriodId: 21,
        value: 0.61
      },
      {
        scenarioId: 15,
        indicatorId: 137,
        timePeriodId: 21,
        value: 0.66
      },
      {
        scenarioId: 15,
        indicatorId: 120,
        timePeriodId: 21,
        value: 0.48
      },
      {
        scenarioId: 15,
        indicatorId: 131,
        timePeriodId: 21,
        value: 0.99
      },
      {
        scenarioId: 15,
        indicatorId: 131,
        timePeriodId: 22,
        value: 0.15
      },
      {
        scenarioId: 15,
        indicatorId: 129,
        timePeriodId: 22,
        value: 0.77
      },
      {
        scenarioId: 15,
        indicatorId: 127,
        timePeriodId: 22,
        value: 0.05
      },
      {
        scenarioId: 15,
        indicatorId: 125,
        timePeriodId: 22,
        value: 0.57
      },
      {
        scenarioId: 15,
        indicatorId: 124,
        timePeriodId: 22,
        value: 0.65
      },
      {
        scenarioId: 15,
        indicatorId: 123,
        timePeriodId: 22,
        value: 0.17
      },
      {
        scenarioId: 15,
        indicatorId: 122,
        timePeriodId: 22,
        value: 0.84
      },
      {
        scenarioId: 15,
        indicatorId: 137,
        timePeriodId: 22,
        value: 0.36
      },
      {
        scenarioId: 15,
        indicatorId: 120,
        timePeriodId: 22,
        value: 0.18
      },
      {
        scenarioId: 15,
        indicatorId: 137,
        timePeriodId: 23,
        value: 0.74
      },
      {
        scenarioId: 15,
        indicatorId: 120,
        timePeriodId: 23,
        value: 0.09
      },
      {
        scenarioId: 15,
        indicatorId: 131,
        timePeriodId: 23,
        value: 0.74
      },
      {
        scenarioId: 15,
        indicatorId: 129,
        timePeriodId: 23,
        value: 0.87
      },
      {
        scenarioId: 15,
        indicatorId: 127,
        timePeriodId: 23,
        value: 0.4
      },
      {
        scenarioId: 15,
        indicatorId: 125,
        timePeriodId: 23,
        value: 0.38
      },
      {
        scenarioId: 15,
        indicatorId: 124,
        timePeriodId: 23,
        value: 0.56
      },
      {
        scenarioId: 15,
        indicatorId: 123,
        timePeriodId: 23,
        value: 0.87
      },
      {
        scenarioId: 15,
        indicatorId: 122,
        timePeriodId: 23,
        value: 0.83
      }
    ]
  }
]
